const shakeItButton = document.querySelector(".shake_it");
const chicken = document.querySelector(".chicken");
const stopItButton = document.createElement("button");
const main = document.querySelector("main");

stopItButton.classList.add("stop_it");
stopItButton.textContent = "멈춰!";

function animate() {
  shakeItButton.classList.add("colorful");
  setTimeout(() => {
    shakeItButton.classList.remove("colorful");
  }, 2900);
  setTimeout(animate, 3000);
}

animate();

shakeItButton.addEventListener("click", () => {
  shakeItButton.remove();
  main.classList.add("bg");
  chicken.classList.add("toggle");
  chicken.append(stopItButton);
});

stopItButton.addEventListener("click", () => {
  main.append(shakeItButton);
  main.classList.remove("bg");
  chicken.classList.remove("toggle");
  stopItButton.remove();
});
