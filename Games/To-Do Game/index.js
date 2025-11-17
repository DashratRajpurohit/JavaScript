// DOM elements
var todoList = [];
var comdoList = [];
var remList = [];

var addButton = document.getElementById("add-button");
var todoInput = document.getElementById("todo-input");
var deleteAllButton = document.getElementById("delete-all");
var allTodos = document.getElementById("all-todos");
var deleteSbButton = document.getElementById("delete-selected");


function upsateList(){
    comdoList = todoList.filter((date)=>{
        if(date.complete == true) return date;
    });
    remList = todoList.filter((date)=>{
        if(date.complete == false) return date;
    });

    console.log("compleat task "+ comdoList);
    console.log("All task reamins" + remList);
}

    document.querySelector('#r-count').textContent = todoList.length;
function add(){
    var text = todoInput.ariaValueMax;
    if(text == ""){
        alert ("content is empty");
        return;
    }

    todoList.push({
        content : text,
        id : Date.now().toString(),
        complete : false
    });

    todoList.forEach((value) => {
        console.log(value);
    });

    todoList.value ="";

    upsateList();  // entire 2 remaining arr -> completion .....

}

// event listeners for add and delete
addButton.addEventListener("click", add);
// deleteAllButton.addEventListener("click", deleteAll);
// deleteSbButton.addEventListener("click", deletes);
