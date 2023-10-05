// Sélectionnez tous les éléments radio
const radioButtons = document.querySelectorAll('.genre-filter');

// Ajoutez un gestionnaire d'événement 'click' à chaque radio button
radioButtons.forEach(function(radioButton) {
  radioButton.addEventListener('click', function() {
    // Récupérez la valeur de l'option sélectionnée
    const selectedGenre = this.value;

    // Sélectionnez tous les éléments card par ID
    const cards = document.querySelectorAll('#table > article');

    // Parcourez tous les cards
    cards.forEach(function(card) {
      // Vérifiez si le card correspond à la valeur sélectionnée
      if (selectedGenre === 'All' || card.id === selectedGenre) {
        // Affichez le card si correspondance
        card.style.display = 'flex';
      } else {
        // Masquez le card sinon
        card.style.display = 'none';
      }
    });
  });
});

