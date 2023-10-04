function createCards() {
  let article = document.createElement("article");
  article.innerHTML = `
      <form class="carte">
          <input type="text" id="title" class="title" placeholder="Enter your title"></input>
          <textarea id="text" name="message" class="textInput" placeholder="Enter your text"></textarea>
          <label for="dateInput">Task end date:</label>
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
  const differenceInDays = Math.floor(
    (userDate - today) / (1000 * 60 * 60 * 24)
  ); // arrondir en jour
  if (differenceInDays === 0) {
    resultElement.textContent = "End date is today!";
  } else if (differenceInDays > 0) {
    resultElement.textContent = `${differenceInDays} days remaining.`;
  } else {
    resultElement.textContent = `The selected date has passed ${-differenceInDays} days.`;
  }
}

dateInput.addEventListener("input", daysLeft);
