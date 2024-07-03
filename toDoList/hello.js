document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
});

function newElement() {
    var task = document.getElementById("task").value;
    if (task === "") {
        $('#liveToast1').toast('show');
    } else {
        addTaskToDOM(task);
        saveTask(task);
        $('#liveToast').toast('show');
        document.getElementById("task").value = "";
    }
}

function deleteElement(element) {
    var li = element.parentElement;
    var task = li.firstChild.textContent;
    li.remove();
    deleteTask(task);
}

function toggleComplete(element) {
    element.classList.toggle("completed");
}

function saveTask(task) {
    let tasks = getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTask(task) {
    let tasks = getTasks();
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks() {
    let tasks = localStorage.getItem('tasks');
    if (tasks) {
        return JSON.parse(tasks);
    } else {
        return [];
    }
}

function loadTasks() {
    let tasks = getTasks();
    tasks.forEach(task => {
        addTaskToDOM(task);
    });
}

function addTaskToDOM(task) {
    var li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(task));
    li.onclick = function() {
        toggleComplete(li);
    };

    var span = document.createElement("span");
    span.className = "close";
    span.innerHTML = "&times;";
    span.onclick = function() {
        deleteElement(span);
    };
    li.appendChild(span);

    document.getElementById("list").appendChild(li);
}

// Get the input field
var input = document.getElementById("task");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("liveToastBtn").click();
    }
});