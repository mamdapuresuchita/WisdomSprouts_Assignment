//1.To do list

inputElement = document.querySelector(".textarea");
displayTask = document.querySelector(".result");
deleteElement = document.querySelector(".deleteBtn");

function addTask(){

    // inputValue = inputElement.value;
    // displayTask.innerHTML += `<li>${inputValue}</li>`;
    inputValue = inputElement.value;
    displayTask.innerHTML += `<span><li>${inputValue}</li></span>
    <button class="deleteBtn" style="display:inline;" onclick="deleteTask()">Delete task</button>`; //
    inputElement.value = "";//to clear previous input
}

function deleteTask(){
  displayTask.remove();
 }

function clearAllTasks() {
        displayTask.innerHTML = ""; // removes all tasks
}

//2.Student marks Calculator

studentMks = document.querySelector(".marks");
displayMarks = document.querySelector(".displayMks");


storeMarks = [];

function addMks(){
    marksArray = Number(studentMks.value.split(",")) ; //split marks
    storeMarks = storeMarks.concat(marksArray); // add to storeMarks array
    studentMks.value = ""; // clear the input
    displayMarks.innerHTML = "Marks: " + storeMarks.join(", ");
}

function CalculateMarks(){
    let sumOfMks = 0;
    for(let i=0 ;i<storeMarks.length ;i++){
        sumOfMks += storeMarks[i];
    }

    let average = sumOfMks / storeMarks.length;
    displayMarks.innerHTML += "<br>Average of Marks: " + average;

    let highest = storeMarks[0];
    for(i=1;i<storeMarks.length;i++){
        if(storeMarks[i] > highest){
            highest = storeMarks[i];
        }
    }
    displayMarks.innerHTML += "<br>Maximum Marks: " + highest;

    let lowest = storeMarks[0];
    for(i=1;i<storeMarks.length;i++){
        if(storeMarks[i] < lowest){
            lowest = storeMarks[i];
        }
    }
    displayMarks.innerHTML += "<br>Minimum Marks: " + lowest;
}


//3.Search in Array

ArrayElement = document.querySelector(".enterElement");
arrayResult = document.querySelector(".searchResult");
searchElement = document.querySelector(".findElement");

listOfArray = [];

function addElement(){
    listOfArray = ArrayElement.value.split(","); //split elements
    ArrayElement.value = "";

}

function searchArray(){
    if(listOfArray.includes (searchElement.value)){
        arrayResult.innerHTML ="Element found in array: " + searchElement.value;
    }
    else{
        arrayResult.innerHTML ="Sorry Element not found in array!! " ;
    }
}

function clearArray(){
    listOfArray = [];
    ArrayElement.value = "";
    searchElement.value = "";
    arrayResult.innerHTML = "";
}


//4. Filter Odd and Even Numbers

addNumToArray = document.querySelector(".addNum");
displayAllNum = document.querySelector(".showAllNum");
displayEvenNum = document.querySelector(".displayEven");
displayOddNum = document.querySelector(".displayOdd");

let numbers = [];

function addNumbers(){
    let listOfNum = addNumToArray.value.split(",").map(Number); //split numbers
    numbers = numbers.concat(listOfNum); // add to numbers array
    addNumToArray.value = ""; // clear the input
    displayAllNum.innerHTML = "Numbers: " + numbers.join(", "); //display as list
}

function showEven(){
    let even=0;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i] % 2 == 0){
            even++;
        }
    }
    displayEvenNum.innerHTML = even;
}

function showOdd(){
    let odd=0;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i] % 2 != 0){
            odd++;
        }
    }
    displayOddNum.innerHTML =  odd;
}

function clearNumbers(){
    numbers = [];
    addNumToArray.value = "";
    displayAllNum.innerHTML = "";
    displayEven.innerHTML = "";
    displayOdd.innerHTML = "";
}

//5.Sort Names Alphabetically

store= document.querySelector(".storeName")
displayName = document.querySelector(".displayName");
storedNames = document.querySelector(".nameList");

let names = [];

function addNameToArray(){
    let words = store.value.split(","); //split words
    names = names.concat(words); // add to names array
    store.value = ""; // clear the input
    storedNames.innerHTML += `<li>${words}</li>`; //display as list

}

function sortNamesAlphabetically(){
    names.sort(); //sorts alphbetically
    displayName.value = names.join(" , "); // displays sorted names
}

function reset(){
    names = [];
    displayName.value = ""; // clear the display input
    storedNames.innerHTML = ""; // clear the stored names list
}
