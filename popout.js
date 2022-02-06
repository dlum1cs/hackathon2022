// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

//get task from local storage
function getTasks(){
  const itemsList = document.querySelector('ul.taskList');
  itemsList.innerHTML = '';
  let newItemHTML = '';

  let tasks = localStorage.getItem('taskList');
  let tasksArr = JSON.parse(tasks);
  for (let i = 0; i < tasksArr.length; i++) {
      let state = '';
      if (tasksArr[i].state == 1) {
          state = 'class="done"';
      }
      newItemHTML += `<li data-taskIdx="${i}" ${state}>
      <span class="task">${tasksArr[i].task}</span>
      <div><span class="taskDone">✅</span><span class="taskDelete">❌
      </span></div></li>`;
  }
  itemsList.innerHTML = newItemHTML;
  let itemsListUL = document.querySelectorAll('ul li');
  for (let i = 0; i < itemsListUL.length; i++) {
      itemsListUL[i].querySelector('.taskDone').addEventListener('click', function(){
          let index = this.parentNode.parentNode.dataset.taskIdx;
          taskDone(index);
      });
      itemsListUL[i].querySelector('.taskDelete').addEventListener('click', function(){
          let index = this.parentNode.parentNode.dataset.taskIdx;
          taskDelete(index);
      });
  }
}

function taskDone(index) {
  let itemsStorage = localStorage.getItem('taskList');
  let tasksArr = JSON.parse(itemsStorage);
  //change state to 1
  tasksArr[index].state = 1;
  //save str
  saveTasks(tasksArr);
  //set class to done for the task
  document.querySelector('ul.taskList li[data-taskIdx="'+index+'"]').className='done';
}

function taskDelete(index) {
  let itemsStorage = localStorage.getItem('taskList');
  let tasksArr = JSON.parse(itemsStorage);
  //pass in index and remove 1 item
  tasksArr.splice(index, 1);
  saveTasks(tasksArr);

  document.querySelector('ul.taskList li[data-taskIdx="'+index+'"]').remove();

}

//add task to local storage
function saveTasks(obj){
  let str = JSON.stringify(obj);
  localStorage.setItem('taskList', str);
}

getTasks();

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  
  document.getElementById("myUL").appendChild(li);
  
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}