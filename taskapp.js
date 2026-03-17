const tasks=[];

//add
 function addTask(){

    const taskInput =document.querySelector("#taskInput").value.trim();
    if (taskInput) {

        tasks.push(taskInput);
        document.querySelector("#taskInput").value='';
        displayTask();
    
    } else{
        alert("Please insert a task!");
 }
}

//display
function displayTask(){
   const taskList=document.querySelector("#taskList");
   taskList.innerHTML="";
   tasks.forEach((task) => {
   const li =document.createElement("li");
   li.textContent=task;
   li.classList.add("newTask");
   taskList.appendChild(li);
  

  
    
   });

}

//remove
 function removeTask(){
const removeButton=document.querySelector("#removeTask");

   if (tasks.length > 0){
    tasks.pop();
    displayTask();
    
   }else{
    alert("no task to remove");
   }
  }



document.querySelector("#addTask").addEventListener("click", addTask);
document.querySelector("#removeTask").addEventListener("click", removeTask);



