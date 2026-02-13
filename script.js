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
  if (noIndex < noTexts.length) {
    noBtn.textContent = noTexts[noIndex];
    noIndex++;

    yesScale += 0.15;
    yesBtn.style.transform = `scale(${yesScale})`;
  }
});

/* ---------------- YES CLICK ---------------- */

yesBtn.addEventListener("click", () => {

  mainTitle.textContent = "Wawawiwa! 🎉";

  document.querySelector(".buttons").style.display = "none";
  document.querySelector(".hint").style.display = "none";

  result.innerHTML = `
    <p>You have successfully confirmed that you possess a heart ❤️</p>
  `;

  result.classList.remove("hidden");
});
