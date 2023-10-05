function updateDaysRemaining(input) {
  let card = input.closest(".carte");
  let resultElement = card.querySelector(".days-remaining");

  if (input) {
    let userDate = new Date(input.value);
    let today = new Date();
    const differenceInDays = Math.floor(
      (userDate - today) / (1000 * 60 * 60 * 24) // on passe en jour et pas milliseconde
    );

    if (differenceInDays === 0) {
      resultElement.textContent = "End date is today!";
    } else if (differenceInDays > 0) {
      resultElement.textContent = `${differenceInDays} days remaining.`;
    } else {
      resultElement.textContent = `The selected date has passed ${-differenceInDays} days.`;
    }
  }
}

let projectContainer = document.getElementById("table");

// eventlistener pour gérer les événements input sur toutes les taches de projet
projectContainer.addEventListener("input", function (event) {
  let target = event.target;
  updateDaysRemaining(target);
});
