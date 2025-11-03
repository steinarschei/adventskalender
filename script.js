const calendar = document.querySelector('.calendar');
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1; // desember = 12

// ✉️ Meldinger bak lukene (legg inn egne her!)
const messages = [
  "Du er min favorittperson ❤️",
  "I dag får du en klem når du står opp 🤗",
  "Et lite kompliment: Du er fantastisk 💫",
  "Du gjør desember mye bedre 🎄",
  "Jeg elsker smilet ditt 😍",
  "I dag skal du få velge middag! 🍝",
  "Kanskje en liten overraskelse venter i kveld 🎁",
  "Du fortjener all kjærlighet i verden 💌",
  "Et varmt teppe og en god film? 🎬",
  "Du er min julestjerne ⭐",
  "En kopp kakao til deg ☕",
  "Takk for at du er du 💖",
  "Halvveis til jul! 🎅",
  "I dag: En ekstra lang klem 💞",
  "Jeg gleder meg til jul med deg 🎄",
  "Snart ferie! 😄",
  "Du gjør alt bedre ❤️",
  "I dag: Sett på din favorittjulesang 🎶",
  "Kos deg med noe søtt 🍫",
  "Du lyser opp dagene mine ✨",
  "En liten nisse sier hei 🧑‍🎄",
  "I dag får du et smil 😊",
  "Du betyr alt for meg 💕",
  "God jul, vakreste menneske 🎁❤️"
];

// 🎁 Lag luker 1–24
for (let i = 1; i <= 24; i++) {
  const door = document.createElement('div');
  door.classList.add('door');

  const inner = document.createElement('div');
  inner.classList.add('door-inner');

  const front = document.createElement('div');
  front.classList.add('door-front');
  front.textContent = i;

  const back = document.createElement('div');
  back.classList.add('door-back');
  back.textContent = "🎁";

  inner.appendChild(front);
  inner.appendChild(back);
  door.appendChild(inner);

  // Gjør luka aktiv kun hvis dagens dato >= i (og det er desember)
  if (month === 12 && i <= day) {
    door.addEventListener('click', () => openDoor(i, door));
  } else {
    door.classList.add('locked');
  }

  calendar.appendChild(door);
}

// 🎄 Åpne luke
function openDoor(i, door) {
  if (door.classList.contains('open')) return;
  door.classList.add('open');

  setTimeout(() => {
    const msg = messages[i - 1] || "Overraskelse 🎄";
    alert(`🎅 Luke ${i}\n\n${msg}`);
  }, 700);
}
