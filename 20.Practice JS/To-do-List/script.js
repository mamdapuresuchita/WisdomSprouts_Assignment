const inputValue=document.querySelector("#input"); //New tasks are added 
const taskList = document.querySelector("#listOfTasks"); //Tasks will be displayed here

function addTask(){

    const taskText = inputValue.value.trim();//gets value in input and remove spaces by trim
    if(taskText == "") {
        return; // prevent empty task
    }


    const newTask= document.createElement("li");//li element is created after tasks are added
    newTask.innerHTML=`<span>${taskText}</span> 
        <div class="taskBtn" style="display:inline;">
        <button id="editBtn"><i class="fa-solid fa-pen-to-square"></i></button>
        <button id="delBtn"><i class="fa-solid fa-trash"></i></button>
        </div>`;//del & edit button are added 


     const delTask = newTask.querySelector("#delBtn")
     delTask.onclick=()=>  newTask.remove();

     const editTask = newTask.querySelector("#editBtn")
     editTask.addEventListener('click',()=>{
             inputValue.value = newTask.querySelector ('span').textContent;
             newTask.remove();
     })

     newTask.appendChild(delTask);
     newTask.appendChild(editTask);
     taskList.appendChild(newTask);



    inputValue.value = ""; //clear input
}



