// DOM elements
var todoList = [];
var comdoList = [];
var remList = [];

var addButton = document.getElementById("add-button");
var todoInput = document.getElementById("todo-input");
var deleteAllButton = document.getElementById("delete-all");
var allTodos = document.getElementById("all-todos");
var deleteSbButton = document.getElementById("delete-selected");
var saveAll = document.getElementById('saveAll');

function onLoad(){
    var temp = localStorage.getItem('oldTask');
    if(temp != null ){
        todoList = JSON.parse(temp);
    }
    else{
        todoList = [];
    }
    updateList();
    appendTask(todoList);
}
onLoad();


function updateList(){
    
    comdoList = todoList.filter((date)=>{
        if(date.complete == true) return date;
    });
    remList = todoList.filter((date)=>{
        if(date.complete == false) return date;
    });

    console.log("compleat task "+ comdoList);
    console.log("All task reamins" + remList);

    document.querySelector('#r-count').textContent = todoList.length;
    document.querySelector('#c-count').textContent = comdoList.length;
}

    // document.querySelector('#r-count').textContent = todoList.length;

    function appendTask(todoList){
        allTodos.innerHTML = ""; 

        todoList.forEach((element) => {
            var x = `<li id=${element.id} class="todo-item">
                <p id="task"> ${element.complete ? `<strike>${element.content}</strike>` : element.content}</p>
                <div class="todo-actions">
                    <button class="complete btn btn-success">
                        <i class="ci bx bx-check bx-sm"></i>
                    </button>

                    <button class="delete btn btn-error">
                        <i class="ci bx bx-trash bx-sm"></i>
                    </button>
                </div>
            </li>`
            allTodos.innerHTML += x;
        });

    }

    function deleteAll(){
    todoList = [];
    updateList();
    appendTask(todoList);
}

function add(){
    var text = todoInput.value;
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
    todoInput.value = ""
    // todoList.value ="";

    updateList();  // entire 2 remaining arr -> completion .....
    appendTask(todoList);
}

// event listeners for add and delete
addButton.addEventListener("click", add);

todoInput.addEventListener('keypress',(event) =>{
    if(event.key === 'Enter'){
        add();
    }
});

deleteAllButton.addEventListener("click", deleteAll);

function deletes(){
    todoList = todoList.filter((data)=>{
        if(data.complete === false){
            return data;
        }
    });
    updateList();
    appendTask(todoList);
}





deleteSbButton.addEventListener("click", deletes);

function save(){
    localStorage.setItem('oldTask',JSON.stringify(remList))
}
saveAll.addEventListener('click', save);



function deleteTask(event){
    var id = event.target.parentElement.parentElement.getAttribute('id');

    todoList = todoList.filter((data) => {
        return data.id != id;
    })

    updateList();
    appendTask(todoList);
}

function completeTask(){
    var id = event.target.parentElement.parentElement.getAttribute('id');

    todoList.forEach((data)=>{
        if(data.id == id){
            if(data.complete == false){
                data.complete = true;
                event.target.parentElement.parentElement.querySelector('#task').classList.add('line');
            }
            else{
                data.complete = false;
                event.target.parentElement.parentElement.querySelector('#task').classList.remove('line');
            }
        }
    });
    updateList();
    appendTask(todoList);
}


document.addEventListener('click', (event)=>{
    if(event.target.classList.contains('delete') || event.target.classList.contains('di')){
        deleteTask(event);
    }
    if(event.target.classList.contains('complete') || event.target.classList.contains('ci')){
        completeTask(event);
    }
    if(event.target.classList.contains('all')){
        updateList();
        appendTask(todoList);
    }
    if(event.target.classList.contains('rem')){
        updateList();
        appendTask(remList);
    }
    if(event.target.classList.contains('com')){
        updateList();
        appendTask(comdoList);
    }
    
});
