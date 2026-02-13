const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");
const mainTitle = document.getElementById("mainTitle");

/* ---------------- NO BUTTON DRAMA ---------------- */

const noTexts = [
  "Are you sure?",
  "Really?",
  "Think again!",
  "Last chance!",
  "Pleaaze",
  "You're breaking my heart 💔",
  "I'm gonna cry..."
];

let noIndex = 0;
let yesScale = 1;

noBtn.addEventListener("click", () => {

  // TEXT CHANGE
  if (noIndex < noTexts.length) {
    noBtn.textContent = noTexts[noIndex];
    noIndex++;
  }

  // YES GROWS
  yesScale += 0.15;
  yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;

  // RANDOM SCATTER
  const container = document.querySelector(".buttons");
  const containerRect = container.getBoundingClientRect();
  const buttonRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - buttonRect.width;
  const maxY = containerRect.height - buttonRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

