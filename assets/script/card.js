function addTxt(event) {
  let taskContainer = document.createElement("div"); // Crée un conteneur div
  taskContainer.className = "task-container draggable";
  taskContainer.draggable = "true"

  let dateLabel = document.createElement("label");
  dateLabel.textContent = "Task end date";
  dateLabel.id = "labDate";
  dateLabel.setAttribute("for", "userdateInput1");

  let dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.id = "userdateInput1";

  let task = document.createElement("p");
  task.className = "editable-content";
  task.setAttribute("contenteditable", "true");
  task.textContent = "Add task"; // Ajoute le texte au paragraphe

  // Ajouter les éléments au conteneur
  taskContainer.appendChild(dateLabel);
  taskContainer.appendChild(dateInput);
  taskContainer.appendChild(task);

  // Trouver l'article parent du bouton
  let article = event.target.closest("article");

  // Trouver la div avec la classe "addTxt" à l'intérieur de l'article
  let newtextzone = article.querySelector(".addTxt");

  // Ajouter le conteneur au div "addTxt"
  newtextzone.appendChild(taskContainer);

  // Désactiver le bouton "addtext"
  event.target.disabled = true;

  // Surveiller les changements dans le paragraphe
  task.addEventListener("input", function () {
    // Réactiver le bouton si le paragraphe est vide
    event.target.disabled = task.textContent.trim() === "";
  });
}

let addNewTxtBtns = document.querySelectorAll(".addtext");
addNewTxtBtns.forEach(btn => {
  btn.addEventListener("click", addTxt);
});

