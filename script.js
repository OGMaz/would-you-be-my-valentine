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

  // RANDOM SCATTER (avoid Yes button area)
  const container = document.querySelector(".buttons");
  const containerRect = container.getBoundingClientRect();
  const noRect = noBtn.getBoundingClientRect();
  const yesRect = yesBtn.getBoundingClientRect();

  const maxX = containerRect.width - noRect.width;
  const maxY = containerRect.height - noRect.height;

  let randomX, randomY;
  let attempts = 0;

  do {
    randomX = Math.random() * maxX;
    randomY = Math.random() * maxY;

    attempts++;
    if (attempts > 50) break; // safety exit

  } while (
    randomX < yesRect.right - containerRect.left &&
    randomX + noRect.width > yesRect.left - containerRect.left &&
    randomY < yesRect.bottom - containerRect.top &&
    randomY + noRect.height > yesRect.top - containerRect.top
  );

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});
