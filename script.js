let input = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");
console.log(input);
console.log(addTaskBtn);
console.log(taskList);
addTaskBtn.addEventListener("click", function() {
   console.log("Button Clicked!");
   
   let newtask =document.createElement("li");
   
   newtask.textContent = input.value;
   taskList.appendChild(newtask);
   input.value=" ";
   console.log(newtask);
});