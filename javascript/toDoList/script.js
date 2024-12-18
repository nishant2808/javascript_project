const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const toDoList = document.getElementById('toDoList');
let error = document.getElementById('errormsg');

let editTodo = null;

// function to Add todo 

const addToDo = ()=>{
    const inputText =inputBox.value.trim();
    if(inputText.length <= 0){
     error.textContent = "You must write something in your to do";
     error.style.color = "red";
     setTimeout(()=>{
        error.textContent = "";
        },3000);
        return false;
    }
    if (addBtn.value === "Edit") {
        // Passing the original text to editLocalTodos function before edit it in the todoList
        editLocalTodos(editTodo.target.previousElementSibling.innerHTML);
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addBtn.value = "Add";
        inputBox.value = "";
    }
    else{
        //create a p tag 
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = inputText;
        li.appendChild(p);

        //create a Edit button
        const editBtn = document.createElement("button");
        //editBtn.innerHTML = "<i class='material-icons' style='font-size:25px'>edit</i>";
        editBtn.innerHTML = "Edit";
        editBtn.classList.add("btn","editBtn");
        li.appendChild(editBtn);

        //create a delete button
        const deleteBtn = document.createElement("button");
        //deleteBtn.innerHTML = "<i class='material-icons' style='font-size:25px'>remove</i>";
        deleteBtn.innerHTML = "Remove";
        deleteBtn.classList.add("btn","deleteBtn");
        li.appendChild(deleteBtn);

        //empty input
        toDoList.appendChild(li);
        inputBox.value = "";
        saveLocalTodos(inputText);
    }

}
// function to Update:(edit/delete) todo 
const updateToDo =(e)=>{
    //console.log(e.target.innerHTML);
    if(e.target.innerHTML === "Remove"){
        toDoList.removeChild(e.target.parentElement);
        deleteLocalTodos(e.target.parentElement);
    }
    if(e.target.innerHTML === "Edit"){
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value = "Edit";
        editTodo = e;
    }
}
// function save to local todo
const saveLocalTodos = (todo)=>{
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}
// function get to local todo
const getLocalTodos = ()=>{
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach(todo =>{
            //create a p tag 
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = todo;
        li.appendChild(p);

        //create a Edit button
        const editBtn = document.createElement("button");
        //editBtn.innerHTML = "<i class='material-icons' style='font-size:25px'>edit</i>";
        editBtn.innerHTML = "Edit";
        editBtn.classList.add("btn","editBtn");
        li.appendChild(editBtn);

        //create a delete button
        const deleteBtn = document.createElement("button");
        //deleteBtn.innerHTML = "<i class='material-icons' style='font-size:25px'>remove</i>";
        deleteBtn.innerHTML = "Remove";
        deleteBtn.classList.add("btn","deleteBtn");
        li.appendChild(deleteBtn);

        //empty input
        toDoList.appendChild(li);

        })
    }
}
// function delete to local todo
const deleteLocalTodos = (todo)=>{
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    let todoText = todo.children[0].innerHTML;
    let todoIndex = todos.indexOf(todoText);
    todos.splice(todoIndex,1);
    localStorage.setItem("todos",JSON.stringify(todos));
    // Array functions: slice/splice
    console.log(todoIndex);

}
// function edit to local todo
const editLocalTodos =(todo)=>{ 
    let todos = JSON.parse(localStorage.getItem("todos"));
    let todoIndex = todos.indexOf(todo);
    todos[todoIndex] = inputBox.value;
    localStorage.setItem("todos", JSON.stringify(todos));
}

document.addEventListener('DOMContentLoaded',getLocalTodos);
addBtn.addEventListener('click',addToDo);
toDoList.addEventListener('click',updateToDo);