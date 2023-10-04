function createCards() {
  let article = document.createElement("article");
  article.innerHTML = `
      <form class="carte" draggable="true" ondragstart="drag(event)">
          <input type="text" id="title" class="title" placeholder="Enter your title"></input>
          <textarea id="text" name="message" class="textInput" placeholder="Enter your text"></textarea>
          <label>Task end date:</label>
          <input type="date" id="userdateInput">
          <p id="result"></p> 
      </form>`;

  let section = document.getElementById("table");
  section.appendChild(article);
}

let addBtn = document.getElementById("btn-add");
addBtn.addEventListener("click", createCards);

let dateInput = document.getElementById("userdateInput");
let resultElement = document.getElementById("result");

function daysLeft() {
  let userDate = new Date(dateInput.value);
  let today = new Date();
  const differenceInDays = calcTime(userDate, today);
  // arrondir en jour
  if (differenceInDays === 0) {
    resultElement.textContent = "End date is today!";
  } else if (differenceInDays > 0) {
    resultElement.textContent = differenceInDays.jours + " days remaining.";
  } else {
    resultElement.textContent = `The selected date has passed ${differenceInDays.jours} days.`;
  }
}

function calcTime (startDate, endDate) {
  const difference = endDate - startDate;
  let secondes = Math.floor(difference / 1000);
  let minutes = Math.floor(secondes / 60);
  let heures = Math.floor(minutes / 60);
  let jours = Math.floor(heures / 24);
  
  return{
    jours: jours,
    heures: heures % 24,
    minutes: minutes % 60,
    secondes: secondes % 60
  }
}

