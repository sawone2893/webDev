let inputTask = document.querySelector("#enterTask");
let addTaskBtn = document.querySelector("#addTask");
let deleteTaskBtn = document.querySelector("#deleteTask");
let ul = document.querySelector("ul");

addTaskBtn.addEventListener("click", () => {
  let item = document.createElement("li");
  let inputItem = document.createElement("input");
  inputItem.setAttribute("type", "checkbox");
  inputItem.setAttribute("name", "task");
  inputItem.setAttribute("id", inputTask.value.toLowerCase());
  let label = document.createElement("label");
  label.setAttribute("for", "task");
  label.innerText = inputTask.value;

  item.appendChild(inputItem);
  item.appendChild(label);
  ul.appendChild(item);
  inputTask.value = "";
});

deleteTaskBtn.addEventListener("click", (event) => {
  let checkboxList = document.querySelectorAll("input[name='task']");
  for (cb of checkboxList) {
    if (cb.checked == true) {
      let listItem = cb.parentElement;
      listItem.remove();
      console.log(`Deleted Task: ${cb.nextElementSibling.innerText}`);
    }
  }
});

/*
addTaskBtn.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerText = inputTask.value;
  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteTask");
  deleteBtn.innerText = "delete";
  li.appendChild(deleteBtn);
  ul.appendChild(li);
  inputTask.value = "";
});

ul.addEventListener("click", (event) => {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});*/
