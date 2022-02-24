const input = document.querySelector("input");
const button = document.querySelector("button");
const valueEl = document.querySelector("#value");
const number = document.querySelector(".number");
const mainWindow = document.querySelector('.window')

let numbersOfUsers = null;
function generate(limit) {
  numbersOfUsers = [];
  for (let i = 0; i < limit; i++) {
    numbersOfUsers.push(i);
  }
  input.setAttribute("disabled", true);
  number.style.display = "block";
}

function setBackgroundColor(value) {
  if (value <= 5) {
    valueEl.style.backgroundColor = 'red'
    valueEl.style.color = "linen"
  } else if (value <= 10) {
    valueEl.style.backgroundColor = 'blue'
    valueEl.style.color = "lightcyan"
  } else if (value <= 15) {
    valueEl.style.backgroundColor = 'gold'
    valueEl.style.color = 'black'
  } else if (value <= 20) {
    valueEl.style.backgroundColor = 'green'
  }
}

function generateNumber() {
  const index = Math.floor(Math.random() * numbersOfUsers.length);
  setBackgroundColor(numbersOfUsers[index] + 1)
  if (numbersOfUsers[index] + 1 < 10) {
    valueEl.innerHTML = `0${numbersOfUsers[index] + 1}`;
  } else {
    valueEl.innerHTML = numbersOfUsers[index] + 1;
  }
  numbersOfUsers.splice(index, 1)
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (numbersOfUsers === null) {
    generate(input.value);
    const index = Math.floor(Math.random() * numbersOfUsers.length);
    valueEl.innerHTML = index + 1;
    generateNumber();
  } else if (numbersOfUsers.length > 1) {
    generateNumber()
  } else {
    const refreshButton = document.createElement('button')
    refreshButton.textContent = 'Запустить заново'
    mainWindow.append(refreshButton)
    button.setAttribute("disabled", true)
    refreshButton.addEventListener('click', (e) => {
      input.removeAttribute("disabled");
      button.removeAttribute("disabled");
      number.style.display = "none";
      numbersOfUsers = null
      refreshButton.remove()
    })
  };
});
