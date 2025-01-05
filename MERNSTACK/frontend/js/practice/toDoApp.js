//ToDo App
//List- to show all todos
// add-to add  a todo
//delete- to delete a task
// quit- to exit the todo

let option = prompt(`Select below Option:\nlist \nadd \ndelete \nquit`);
let toDoItemList = [];
let activityName;
while (true) {
  if (option == "quit") {
    alert(`You quit To do App`);
    break;
  }

  if (option == "list") {
    alert(`To Do List Items: ${toDoItemList.join("\n")}`);
  } else if (option == "add") {
    activityName = prompt("Enter Activity Name !");
    toDoItemList.push(activityName);
    alert(`You Successfully Added your activity!`);
  } else if (option == "delete") {
    activityName = prompt("Enter Activity Name that you want to delete!");
    toDoItemList.splice(toDoItemList.indexOf(activityName), 1);
  }else{
    alert(`Invalid Option`);
  }
  option = prompt(`Select below Option:\nlist \nadd \ndelete \nquit`);
}
