/*const inp = document.querySelector(".usertodo");
const add = document.querySelector(".add");
const unlist = document.querySelector(".welcome");
const filter = document.querySelector(".filter-todo")

add.addEventListener("click",addtodo);
unlist.addEventListener("click",chde);
filter.addEventListener("click",fill);
function addtodo(e)
{
    const con = document.createElement("div")
    con.className = "coni"

    const l = document.createElement("li");
    l.className = "lis";
   setTodos(todo)
    l.appendChild(document.createTextNode(inp.value));
    inp.value = ""
    con.appendChild(l) 

    const com = document.createElement("button");
    com.className = "complete"
    com.innerHTML='<i class="fa-solid fa-check" style="color: #ffffff;background-color:#63E6BE"></i>'
    con.appendChild(com)

    

   const del = document.createElement("button")
   del.className = "delete"
   del.innerHTML = '<i class="fas fa-trash" style="color: #ffffff;background-color:#63E6BE"></i>'
   con.appendChild(del);   


    unlist.appendChild(con)
    e.preventDefault();
}

function chde(e)
{
   //delete func 
  
   const items = e.target;
  
   if(items.className === "delete")
  {
   
    const to = items.parentElement;
    to.classList.add("fall");
    to.addEventListener("transitionend",function(){
        to.remove();
    }) 
    
  
    
   addEventListener("transitionstart")

    
  }
   
  if(items.className === "complete")
  {  
    const todo = items.parentElement;
   
    todo.classList.toggle('completed');
   
  }

    e.preventDefault();
}

function fill(e) {
  // Filter to get only element nodes
  const todos = unlist.childNodes;

  todos.forEach(function(todo) {
    switch (e.target.value) {
      case "All":
        todo.style.display = "flex";
        break;
      case "Completed":
        if (todo.classList.contains("complete")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "UnCompleted":
        if (!todo.classList.contains("complete")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      default:
        console.log(121);
    }
  });

  e.preventDefault();
}  


function setTodo(todo)
{
  let todos;
  if(localStorage.getItem('todos'))
  {
    todos  = []
  }
  else
  {
    todos = JSON.parse(localStorage.getItem('todos'))
  }
todos.push(todo)
localStorage.setItem("todos",JSON.stringify)
}*/

const inp = document.querySelector(".usertodo");
const add = document.querySelector(".add");
const unlist = document.querySelector(".welcome");
const filter = document.querySelector(".filter-todo");

add.addEventListener("click", addtodo);
unlist.addEventListener("click", chde);
filter.addEventListener("change", fill);

function addtodo(e) {
    e.preventDefault();
    const todoText = inp.value.trim();
    if (!todoText) return;

    const con = document.createElement("div");
    con.className = "coni";

    const l = document.createElement("li");
    l.className = "lis";
    l.appendChild(document.createTextNode(todoText));
    con.appendChild(l);

    const com = document.createElement("button");
    com.className = "complete";
    com.innerHTML = '<i class="fa-solid fa-check" style="color: #ffffff;background-color:#63E6BE"></i>';
    con.appendChild(com);

    const del = document.createElement("button");
    del.className = "delete";
    del.innerHTML = '<i class="fas fa-trash" style="color: #ffffff;background-color:#63E6BE"></i>';
    con.appendChild(del);

    unlist.appendChild(con);
    
    setTodo(todoText);
    inp.value = "";
}

function chde(e) {
    const items = e.target;
    const todo = items.parentElement;

    if (items.classList.contains("delete")) {
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function() {
            todo.remove();
        });
    } else if (items.classList.contains("complete")) {
        todo.classList.toggle("completed");
    }

    e.preventDefault();
}

function fill(e) {
    const todos = unlist.childNodes;
    todos.forEach(function(todo) {
        if (todo.nodeType === Node.ELEMENT_NODE) {
            switch (e.target.value) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "uncompleted":
                    if (!todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                default:
                    console.log("Unknown filter option");
            }
        }
    });

    e.preventDefault();
}

function setTodo(todo) {
    let todos = [];
    if (localStorage.getItem("todos")) {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}
