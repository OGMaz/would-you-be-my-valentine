const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");
const mainTitle = document.getElementById("mainTitle");
const buttonsContainer = document.querySelector(".buttons");
const hint = document.querySelector(".hint");

/* ---------------- NO BUTTON TEXT ---------------- */

const noTexts = [
  "Huuh?!",
  "Are you sure?",
  "Really?",
  "Don't even think about it",
  "Think again!",
  "Last chance!",
  "Pleaaase",
  "You're breaking my heart 💔",
  "I'm gonna cry..."
];

let noIndex = 0;
let yesScale = 1;

noBtn.addEventListener("click", () => {

  // Change text
  if (noIndex < noTexts.length) {
    noBtn.textContent = noTexts[noIndex];
    noIndex++;
  }

  // Grow Yes
  yesScale += 0.15;
  yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;

  // Move No randomly
  const containerRect = buttonsContainer.getBoundingClientRect();
  const buttonRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - buttonRect.width;
  const maxY = containerRect.height - buttonRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

/* ---------------- YES CLICK ---------------- */

yesBtn.addEventListener("click", () => {

  mainTitle.textContent = "Wawawiwa! 🎉";

  buttonsContainer.style.display = "none";
  hint.style.display = "none";

  result.innerHTML = `
    <p>You have successfully confirmed that you possess a heart ❤️</p>
  `;

  result.classList.remove("hidden");
});

