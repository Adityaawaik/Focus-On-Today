const alltask = document.querySelector("#alltask");

const addTask = document.querySelector("#addTask");

const entireTask = document.querySelector(".entireTask");

const progress = document.querySelector(".progress");

const date = document.querySelector(".date");

const todayDate = new Date();

date.textContent = todayDate.toDateString();

const greetings = document.querySelector(".greetings");

const hour = todayDate.getHours();

const facts = document.querySelector(".facts");

const sunLogo = document.querySelector("#sun");

const moonLogo = document.querySelector("#moon");

if (hour < 12) {
  greetings.textContent = "Good Morning !!";
  sunLogo.style.display = "inline-block";
} else if (hour < 17) {
  greetings.textContent = "Good Afternoon !!";
  sunLogo.style.display = "inline-block";
} else {
  greetings.textContent = "Good Evening !!";
  sunLogo.style.display = "none";
  moonLogo.style.display = "inline-block";
}

addTask.addEventListener("click", () => {
  const newTaskAdd = alltask.cloneNode(true);

  newTaskAdd.removeAttribute("id");
  newTaskAdd.classList.add("newTaskAdded");

  entireTask.append(newTaskAdd);

  const textField = newTaskAdd.querySelector(".textWritten");

  const tickMark = newTaskAdd.querySelector(".tickmark");

  const selectionBtn = newTaskAdd.querySelector(".selection");

  const deleteBtn = newTaskAdd.querySelector("#deleteBtn");

  const setPriority = newTaskAdd.querySelector(".priorityOrder");

  setPriority.addEventListener("change", (e) => {
    let selectedPriority = e.target.value;

    if (selectedPriority === "highPriority" && textField.value.trim() !== "") {
      textField.style.color = "red";
    } else if (
      selectedPriority === "mediumPriority" &&
      textField.value.trim() !== ""
    ) {
      textField.style.color = "orange";
    } else if (
      selectedPriority === "lowPriority" &&
      textField.value.trim() !== ""
    ) {
      textField.style.color = "green";
    }
  });

  selectionBtn.addEventListener("click", () => {
    console.log("btn clicked");
    if (textField.value.trim() !== "") {
      textField.style.textDecoration = "line-through";
      textField.style.textDecorationColor = "black";

      tickMark.style.display = "block";
    }
  });
  deleteBtn.addEventListener("click", () => {
    newTaskAdd.remove();
  });
});

fetch("https://dummyjson.com/quotes")
  .then((res) => res.json())
  .then((data) => {
    const allFacts = data.quotes;

    const randomIndex = Math.floor(Math.random() * allFacts.length);

    facts.textContent = `"${allFacts[randomIndex].quote}"`;
  });


