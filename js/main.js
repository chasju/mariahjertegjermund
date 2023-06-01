// counter

const countContainer = document.querySelector(".counter");
const weddingDate = new Date("Aug 5, 2023 13:00:00").getTime();

let countDown = setInterval(() => {
  const todaysDate = new Date().getTime();
  const distance = weddingDate - todaysDate;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countContainer.innerHTML = "";

  countContainer.innerHTML = `<p class="days">${days}d</p>
                            <p class="">${hours}t</p>
                            <p class="mins">${minutes}m</p>
                            <p class="secs">${seconds}s</p>`;
}, 1000);

// Reaction

const reactButton = document.querySelector(".ready-container button");
let reactP = document.querySelector(".ready-container .reaction");

reactP = ["JA!"];

reactButton.addEventListener("click", () => {
  reactP.push("!");
  reactButton.innerHTML = reactP.join("");
  if (reactP.join("") === "JA!!!!!!!!!!!!!") {
    reactP.splice(1);
  }
});
