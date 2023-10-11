const input = document.querySelector("input");
const button = document.querySelector("button");
const valueEl = document.querySelector("#value");
const number = document.querySelector(".number");
const mainWindow = document.querySelector(".window");
const list_1 = document.querySelector("#list_1");
const list_2 = document.querySelector("#list_2");
const list_3 = document.querySelector("#list_3");

const refreshButton = document.createElement("button");
refreshButton.textContent = "Запустить заново";
refreshButton.style.marginTop = "15px";

let numbersOfUsers = null;
function generate(limit) {
  numbersOfUsers = [];
  for (let i = 0; i < limit; i++) {
    numbersOfUsers.push(i);
  }
  input.setAttribute("disabled", true);
  number.style.display = "block";
  if (limit > 15 && limit <= 20) {
    const choosed = document.querySelector(".choosed");
    const ul = document.createElement("ul");
    choosed.append(ul);
  }
}

function setBackgroundColor(value) {
  const elementList = document.createElement("li");
  elementList.textContent = value;
  if (value <= 5) {
    valueEl.style.backgroundColor = "red";
    valueEl.style.color = "linen";
    elementList.style.backgroundColor = "red";
    elementList.style.color = "linen";
    list_1.append(elementList);
  } else if (value <= 10) {
    valueEl.style.backgroundColor = "blue";
    valueEl.style.color = "lightcyan";
    elementList.style.backgroundColor = "blue";
    elementList.style.color = "lightcyan";
    list_2.append(elementList);
  } else if (value <= 15) {
    valueEl.style.backgroundColor = "gold";
    valueEl.style.color = "black";
    elementList.style.backgroundColor = "gold";
    elementList.style.color = "black";
    list_3.append(elementList);
  } else if (value <= 20) {
    valueEl.style.backgroundColor = "green";
    elementList.style.backgroundColor = "green";
  }
}

function generateNumber() {
  if (valueEl.className) {
    valueEl.className = "";
  }
  const index = Math.floor(Math.random() * numbersOfUsers.length);
  setBackgroundColor(numbersOfUsers[index] + 1);
  valueEl.className = "fadeOut";
  if (numbersOfUsers[index] + 1 < 10) {
    valueEl.innerHTML = `0${numbersOfUsers[index] + 1}`;
  } else {
    valueEl.innerHTML = numbersOfUsers[index] + 1;
  }
  valueEl.focus();
  valueEl.className = "fadeIn";

  numbersOfUsers.splice(index, 1);
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (button.textContent !== "Ок") {
    mainWindow.style.maxHeight = "308px";
    number.style.transform = "scaleY(1)";
  }
  if (numbersOfUsers === null) {
    button.textContent = "Ок";
    generate(input.value);
    generateNumber();
  } else if (numbersOfUsers.length > 1) {
    if (button.textContent === "Получить номер и цвет команды") {
      button.textContent = "Ок";
      generateNumber();
    } else {
      button.textContent = "Получить номер и цвет команды";
    }
  } else if (numbersOfUsers.length === 1) {
    mainWindow.append(refreshButton);
    button.setAttribute("disabled", true);
    mainWindow.style.maxHeight = "500px";
    generateNumber();
  }
});

refreshButton.addEventListener("click", (e) => {
  list_1.innerHTML = "";
  list_2.innerHTML = "";
  list_3.innerHTML = "";
  input.removeAttribute("disabled");
  button.removeAttribute("disabled");
  button.textContent = "Подтвердить и получить цвет и номер";
  mainWindow.style.maxHeight = "188px";
  number.style.display = "none";
  number.style.transform = "scaleY(0)";
  numbersOfUsers = null;
  refreshButton.remove();
});
