// Fonction pour ouvrir le modal avec le texte actuel de la carte
function openModal(cardId) {
    var modal = document.getElementById("myModal");
    var modalText = document.getElementById("modal-text");
    var modalDateInput = document.getElementById("modal-date-input");
    var currentDateElement = document.querySelector(".card#" + cardId + " .date");
    var currentTextElement = document.querySelector(".card#" + cardId + " .card-text");
  
    // Remplir le modal avec le texte actuel de la carte
    modalText.value = currentTextElement.textContent;
    modalDateInput.value = currentDateElement.textContent.replace("Task end date: ", "");
  
    // Définir une fonction pour mettre à jour le texte dans la carte après la sauvegarde
    var saveButton = document.getElementById("modal-save-button");
    saveButton.onclick = function () {
      currentTextElement.textContent = modalText.value;
      currentDateElement.textContent = "Task end date: " + modalDateInput.value;
      closeModal();
    };
  
    // Ouvrir le modal
    modal.style.display = "block";
  }
  