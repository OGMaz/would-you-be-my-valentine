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
  const duration = 5 * 1000; // 5 seconds of rain
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 8,          // small bursts each frame
      startVelocity: 20,         // gentle fall speed
      spread: 360,               // full horizontal spread
      ticks: 300,                // how long pieces stay
      gravity: 0.9,              // falling weight
      drift: 0.5,                // slight sideways motion
      scalar: 1.2,               // size of confetti
      origin: {
        x: Math.random(),        // random position across top
        y: 0                     // start at very top
      }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
