let todoItemsContainer = document.getElementById("todoItemsContainer");

let todoList = [];

let saveTodoButton = document.getElementById("saveTodoButton");
saveTodoButton.onclick = function() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
}

function getTodoFromLocalStorage() {
    let stringifiedTodoList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);
    if (parsedTodoList === null) {
        return [];
    } else {
        return parsedTodoList;
    }
}

todoList = getTodoFromLocalStorage();
let todoCount = todoList.length;

function todoStatusChanged(checkboxId, labelId, todoId) {
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked");

    let todoItemIndex = todoList.findIndex(function(eachTodo) {
        let eachTodoId = "todo" + eachTodo.uniqueNo;
        if (eachTodoId === todoId) {
            return true;
        } else {
            return false;
        }
    });
    let todoObject = todoList[todoItemIndex];
    if (todoObject.isChecked === true) {
        todoObject.isChecked = false;
    } else {
        todoObject.isChecked = true;
    }
}

function todoDelete(todoId) {
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
    let deletedTodoIndex = todoList.findIndex(function(eachTodo) {
        let eachTodoId = "todo" + eachTodo.uniqueNo;
        if (eachTodoId === todoId) {
            return true;
        } else {
            return false;
        }
    });
    todoList.splice(deletedTodoIndex, 1);
}

function createAndAppendTodo(todo) {
    let todoId = "todo" + todo.uniqueNo;
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.classList.add("checkbox-input");
    inputElement.checked = todo.isChecked;
    inputElement.onclick = function() {
        todoStatusChanged(checkboxId, labelId, todoId);
    };
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("d-flex", "flex-row", "label-container");
    todoElement.appendChild(labelContainer);
    let labelItem = document.createElement("label");
    labelItem.classList.add("checkbox-label");
    labelItem.htmlFor = checkboxId;
    labelItem.id = labelId;
    labelItem.textContent = todo.text;
    labelContainer.appendChild(labelItem);
    if (todo.isChecked === true) {
        labelItem.classList.add("checked");
    }

    let iconContainer = document.createElement("div");
    iconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(iconContainer);
    let icon = document.createElement("i");
    icon.classList.add("far", "fa-trash-alt", "delete-icon");
    icon.onclick = function() {
        todoDelete(todoId);
    };
    iconContainer.appendChild(icon);
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}

function addTodo() {
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;
    if (userInputValue === "") {
        alert("Enter Valid Text");
        return;
    }
    todoCount += 1;
    let newTodo = {
        text: userInputValue,
        uniqueNo: todoCount,
        isChecked: false
    };
    createAndAppendTodo(newTodo);
    todoList.push(newTodo);
    userInputElement.value = "";
}

let addTodoButton = document.getElementById("addTodoButton");
addTodoButton.onclick = function() {
    addTodo();
};