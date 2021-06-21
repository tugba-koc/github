let ulDOM = document.getElementById("list");

let currentId = document.querySelectorAll("li").length;

let alertDOM = document.querySelector("#toast");

function newElement() {
  let taskDOM = document.getElementById("task");
  let liDOM = document.createElement("li");   
  if (taskDOM.value.trim() != 0) {
    liDOM.id = currentId++;
    liDOM.innerHTML = `<input id="checkbox" type="checkbox"></input><label> ${taskDOM.value}</label> <span onclick="deleteTask(${currentId})"><i class="far fa-trash-alt"></i></span>`;
    localStorage.setItem(`task - ${currentId}`, taskDOM.value);
    taskDOM.value = "";
    ulDOM.prepend(liDOM);
    $("#liveToastAdd").toast("show");
  } else {
    $("#liveToastErr").toast("show");
  }
}

function deleteTask(k) {
  let liTags = document.querySelectorAll("li");
  for (i in liTags) {
    if (liTags[i].id == k - 1) {
      liTags[i].remove();
    }
  }
}
