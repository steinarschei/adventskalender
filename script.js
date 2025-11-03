const calendar = document.querySelector('.calendar');
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1; // desember = 12

// Her kan du skrive inn meldingene bak lukene
const messages = [
  "Du er min favorittperson ❤️",
  "En liten påminnelse om hvor mye jeg elsker deg 💌",
  "I dag får du en klem når du står opp 🤗",
  // ...
  "God jul, vakreste menneske 🎅❤️"
];

// Lag luker 1–24
for (let i = 1; i <= 24; i++) {
  const door = document.createElement('div');
  door.classList.add('door');
  door.textContent = i;

  // Sjekk om luka er tilgjengelig
  if (month === 11 && i <= day) {
    door.addEventListener('click', () => openDoor(i, door));
  } else {
    door.classList.add('locked');
  }

  calendar.appendChild(door);
}

function openDoor(i, door) {
  if (door.classList.contains('open')) return;

  door.classList.add('open');
  setTimeout(() => {
    const msg = messages[i - 1] || "Overraskelse 🎁";
    alert(`🎄 Luke ${i} 🎄\n\n${msg}`);
  }, 500);
}
