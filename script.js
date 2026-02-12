* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Courier New", monospace;
}

body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ffe6f0, #ffd6e7);
  overflow: hidden;
}

.card {
  background: white;
  padding: 50px 40px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  width: 400px;
  max-width: 90%;
}

h1 {
  margin-bottom: 30px;
  font-size: 26px;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

button {
  padding: 14px 28px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.2s ease;
}

#yesBtn {
  background: #ff3b7a;
  color: white;
}

#yesBtn:hover {
  background: #ff1f68;
}

#noBtn {
  background: #e5e7eb;
}

.hint {
  font-size: 14px;
  opacity: 0.7;
}

.hidden {
  display: none;
}

#result {
  margin-top: 20px;
  animation: pop 0.3s ease;
}

@keyframes pop {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

#confettiCanvas {
  position: fixed;
  inset: 0;
  pointer-events: none;
}
