const todo = document.querySelector("#todo");
const inProgress = document.querySelector("#in-progress");
const done = document.querySelector("#done");

//Dragenter animaiton //
 function onDragEnterandLeave(column) {
    column.addEventListener("dragenter", (e) => {
        e.preventDefault();
        column.classList.add("hover-over");
    });
    column.addEventListener("dragleave", (e) => {
        e.preventDefault();
        column.classList.remove("hover-over");
    });
  }

onDragEnterandLeave(todo);
onDragEnterandLeave(inProgress);
onDragEnterandLeave(done);  