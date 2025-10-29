import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Comments = () => {
  const { movieID } = useParams();
  const storageKey = `comments ${movieID}`;

  //Load saved comments from local storage

  const [comments, setComments] = useState(() => {
    const savedComments = localStorage.getItem(storageKey);
    return savedComments ? JSON.parse(savedComments) : [];
  });

  const [newComment, setNewComments] = useState("");//store comments entered in input box

  //Save comment to local storage

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(comments));
  }, [comments, storageKey]); //every time comments changes.It updates localStorage with the latest list of comments

  //Adding new comments

  const addComment = () => {
    if (newComment.trim() != "") {
      setComments([...comments, newComment]);//...comments means copy all
      setNewComments("");//clears field
    }
  };

  //Delete Comment

  const deleteComment = (index) => {
    const updatedComment = comments.filter((_, i) => i !== index);//filters comments when index matches
    setComments(updatedComment);//updates comment list
  };

  return (
    <div className="my-3">
      <h4 className="text-center">Comments: ({comments.length})</h4>

    <div className="container p-3">
      <div className="d-flex mb-3">
        <input
          type="text"
          className="form-control me-2 border border-warning-subtle border-3"
          placeholder="Add a comments..."
          value={newComment}
          onChange={(e) => setNewComments(e.target.value)}
        ></input>

        <button className="btn btn-warning" onClick={addComment}>
          Add Comment
        </button>
      </div>

      <ul className="list-group">
        {comments.map((comment, index) => (//
          <li
            key={index}
            className="list-group-item d-flex justify-content align-items-center"
          >
            {comment}
            <button
              className="btn btn-sm btn-danger ms-3"
              onClick={() => deleteComment(index)} //each comment has delete button
            >
               Delete
            </button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Comments;
