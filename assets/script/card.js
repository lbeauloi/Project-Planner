function addTxt() {
  let task = document.createElement("textarea");
  task.id = "text";
  task.name = "message";
  task.className = "textInput";
  task.placeholder = "Enter your text";
  let newtextzone = document.querySelector(".addTxt");
  newtextzone.appendChild(task);
}

let addNewTxtBtn = document.querySelector(".addtext");
addNewTxtBtn.addEventListener("click", addTxt);

