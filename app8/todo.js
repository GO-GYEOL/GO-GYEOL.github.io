const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");


const TODOS_KEY = "todos"
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo)=>toDo.id !== parseInt(li.id));
    //li는 removed돼서 없어졌으니까
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button")
    button.innerText = "X";
    button.addEventListener("click", deleteToDo); 
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    }; // 여기 바꿨다. text가 아닌 이제 id를 부여해서 object형식으로 주고싶기 때문이다.
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY)
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; 
    parsedToDos.forEach(paintToDo); 
}

// item을 지우는게 아니라 지우고싶은 item을 빼고 새 array를 만든다.





// function sexyFilter(){return true}
// function sexyFilter(){return false}
// [1,2,3,4].filter(sexyFilter)
// sexyFilter(1) 이 true면 그대로 1
// sexyFilter(2) 이 true면 그대로 2
// sexyFilter(3) 이 true면 그대로 3
// sexyFilter(4) 이 true면 그대로 4
// function sexyFilter(item){return item !== 3} // item이 3이 아니면 true 리턴
// [1,2,3,4,5].filter(sexyFilter)

// const arr = ["pizza", "banana", "tomato"]
// function sexyFilter(food){return food !== banana}
// arr.filter(sexyFilter)
// 바나나가 제외된다.

// const arr = [1234, 45251, 123,123,1241,16,323,125314]
// function sexyFunction(potato){return potato <= 1000} // 1000보다 작으면 true
// 각 item들이 potato임.
// arr.filter(sexyFunction); // 1000보다 큰 숫자들 제외됐음.


// const arr = [1,2,3,4]
// arr.filter(item => item >2)
// const newArr = arr.filter(item => item >2)
// console.log(newArr);