function addTxt(event) {
  let task = document.createElement("textarea");
  task.id = "text";
  task.name = "message";
  task.className = "textInput";
  task.placeholder = "Enter your text";

  // Trouver l'article parent du bouton
  let article = event.target.closest("article");

  // Trouver la div avec la classe "addTxt" à l'intérieur de l'article
  let newtextzone = article.querySelector(".addTxt");

  // Ajouter le textarea à la div "addTxt"
  newtextzone.appendChild(task);

  // Désactiver le bouton "addtext"
  event.target.disabled = true;

  // Surveiller les changements dans le textarea
  task.addEventListener("input", function () {
    // Réactiver le bouton si le textarea n'est pas vide
    event.target.disabled = task.value.trim() === "";
  });
}

let addNewTxtBtns = document.querySelectorAll(".addtext");
addNewTxtBtns.forEach(btn => {
  btn.addEventListener("click", addTxt);
});


