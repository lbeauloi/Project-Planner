// Fonction pour activer l'édition du texte
function enableTextEditing(event) {
  const card = event.target.closest("article");
  const editableContent = card.querySelector(".editable-content");

  // Cliquez sur le paragraphe pour activer l'édition
  editableContent.addEventListener("click", function () {
    editableContent.setAttribute("contenteditable", "true");
    editableContent.focus();
  });

  // Focusout (perte de focus) pour désactiver l'édition
  editableContent.addEventListener("focusout", function () {
    editableContent.setAttribute("contenteditable", "false");
  });
}

// Ajoutez un écouteur d'événements pour chaque carte
const cards = document.querySelectorAll("article");
cards.forEach(card => {
  enableTextEditing(card);
});
