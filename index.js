let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
let doneList = document.getElementById("doneList");
let removeBtn = document.getElementById("removeBtn");

addBtn.addEventListener("click", () => {
    // If value is empty, will not be added to the list
    if(taskInput.value.trim() === ""){
        taskInput.value = "";
        return;
    }
    // Create lists children to be stored in the parent list (ordered list)
    let li = document.createElement("li");
    li.textContent = taskInput.value;
    taskList.appendChild(li);
    taskInput.value = "";

    // Click the list to remove
    li.addEventListener("click", () => {
        let done_li = document.createElement("li");
        done_li.textContent = li.textContent;
        doneList.appendChild(done_li);
        taskList.removeChild(li);
    })
})

removeBtn.addEventListener("click", () => {
    let doneItem = doneList.querySelectorAll("li");
    doneItem.forEach(item => item.remove());
})