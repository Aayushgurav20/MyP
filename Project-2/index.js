const todo = document.querySelector("#todo");
const inProgress = document.querySelector("#in-progress");
const done = document.querySelector("#done");
const task = document.querySelectorAll(".task-card")
let draggedTask = null;

task.forEach((task) => {
    task.addEventListener("dragstart", (e) => {
    // console.log("dragging", e.target);
    draggedTask = task;
    });
})
//Dragenter animaiton //
 function onDragEnterandLeave(column) {
    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
    column.addEventListener("dragenter", (e) => {
        e.preventDefault();
        column.classList.add("hover-over");
    });
    column.addEventListener("dragleave", (e) => {
        e.preventDefault();
        column.classList.remove("hover-over");
    });
    column.addEventListener("drop", (e)=> {
        e.preventDefault();
        console.log("dropped", draggedTask, column);
        
        column.appendChild(draggedTask);
        column.classList.remove("hover-over");
    })
  }



onDragEnterandLeave(todo);
onDragEnterandLeave(inProgress);
onDragEnterandLeave(done);  