import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Likes = () => {
  const { movieID } = useParams();
  const storage = `like ${movieID}`;

  const [likes, setLikes] = useState(() => {
    const saveLikes = localStorage.getItem(storage);
    return saveLikes ? parseInt(saveLikes, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem(storage, likes);
  });

  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-4">
      <h3>Likes:{likes}</h3>
      <div className=" d-flex justify-content align-items-center  mt-2" >
      <button className="btn btn-success me-3" onClick={() => setLikes(likes + 1)}>
        <i class="fa-solid fa-thumbs-up"></i>
      </button>
      <button className="btn btn-danger" onClick={()=>setLikes(likes -1)}> <i class="fa-solid fa-thumbs-down"></i></button>
    </div>
    </div>
  );
};

export default Likes;
