// let dateInput = document.getElementById("userdateInput");
// let resultElement = document.getElementById("result");

// function daysLeft() {
//   let userDate = new Date(dateInput.value);
//   let today = new Date();
//   const differenceInDays = Math.floor(
//     (userDate - today) / (1000 * 60 * 60 * 24)
//   ); // arrondir en jour
//   if (differenceInDays === 0) {
//     resultElement.textContent = "End date is today!";
//   } else if (differenceInDays > 0) {
//     resultElement.textContent = `${differenceInDays} days remaining.`;
//   } else {
//     resultElement.textContent = `The selected date has passed ${-differenceInDays} days.`;
//   }
// }

// dateInput.addEventListener("input", daysLeft);

let dateInputs = document.querySelectorAll("input[type='date']");
let resultElements = document.querySelectorAll(".carte p");

function daysLeft(index) {
  let userDate = new Date(dateInputs[index].value);
  let today = new Date();
  const differenceInDays = Math.floor(
    (userDate - today) / (1000 * 60 * 60 * 24) //passe les milliseconde en jour
  );
  if (differenceInDays === 0) {
    resultElements[index].textContent = "End date is today!";
  } else if (differenceInDays > 0) {
    resultElements[index].textContent = `${differenceInDays} days remaining.`;
  } else {
    resultElements[
      index
    ].textContent = `The selected date has passed ${-differenceInDays} days.`;
  }
}

function inputEventListener(input, index) {
  input.addEventListener("input", function () {
    daysLeft(index);
  });
}

dateInputs.forEach(function (input, index) {
  inputEventListener(input, index);
});
