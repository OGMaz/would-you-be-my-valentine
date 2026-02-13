const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");
const mainTitle = document.getElementById("mainTitle");
const buttonsContainer = document.querySelector(".buttons");
const hint = document.querySelector(".hint");

const noTexts = [
  "Huh?!",
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
  }

  yesScale += 0.15;
  yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;

  const containerRect = buttonsContainer.getBoundingClientRect();
  const buttonRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - buttonRect.width;
  const maxY = containerRect.height - buttonRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

yesBtn.addEventListener("click", () => {
  mainTitle.textContent = "Wawawiwa! 🎉";
  buttonsContainer.style.display = "none";
  hint.style.display = "none";

  result.innerHTML = `
    <p>You have successfully confirmed that you possess a heart ❤️</p>
  `;

  result.classList.remove("hidden");
});

const music = document.getElementById("bgMusic");

// Play music after first user interaction
document.addEventListener("click", function () {
  if (music.paused) {
    music.volume = 0.5; // 0.0 to 1.0
    music.play();
  }
});

yesBtn.addEventListener("click", () => {

  // Your existing yes code here
  // (like changing screen or text)

  launchConfetti();

});

function launchConfetti() {
  const duration = 3 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });

    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}


