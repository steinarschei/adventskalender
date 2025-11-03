const calendar = document.querySelector('.calendar');
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1; // desember = 12, men vi tester i november (11)

// ✉️ Meldinger bak lukene
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

  // midlertidig: åpne i november for testing
  if (month === 11 && i <= day) {
    door.addEventListener('click', () => openDoor(i, door));
  } else if (month === 12 && i <= day) {
    door.addEventListener('click', () => openDoor(i, door));
  } else {
    door.classList.add('locked');
  }

  calendar.appendChild(door);
}

function openDoor(i, door) {
  if (door.classList.contains('open')) return;

  door.classList.add('open');
  const msg = messages[i - 1] || "Overraskelse 🎄";

  // ✨ Lag pen popup istedenfor alert()
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <div class="popup-content">
      <h2>🎅 Luke ${i}</h2>
      <p>${msg}</p>
      <button id="closePopup">Lukk</button>
    </div>
  `;
  document.body.appendChild(popup);

  // Lukk popup og "luk" døren igjen
  popup.querySelector('#closePopup').addEventListener('click', () => {
    document.body.removeChild(popup);
    door.classList.remove('open');
  });
}

// 🎵 Musikkavspilling
const music = new Audio('piano.mp3'); // legg mp3-filen i samme mappe
music.loop = true;
let musicPlaying = false;

const musicBtn = document.getElementById('musicToggle');
musicBtn.addEventListener('click', () => {
  if (!musicPlaying) {
    music.play();
    musicPlaying = true;
    musicBtn.textContent = "🔇 Slå av musikk";
  } else {
    music.pause();
    musicPlaying = false;
    musicBtn.textContent = "🔈 Slå på musikk";
  }
});

// ❄️ Snøfall-animasjon
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = '❄️';
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
  snowflake.style.opacity = Math.random();
  snowflake.style.animationDuration = 5 + Math.random() * 5 + 's';
  document.body.appendChild(snowflake);

  setTimeout(() => snowflake.remove(), 10000);
}

// Lag nye snøfnugg kontinuerlig
setInterval(createSnowflake, 250);

// 🎵 Diskret musikkikon nederst + lagring av status
const music = new Audio('julemusikk.mp3'); // legg MP3 i samme mappe
music.loop = true;

const musicIcon = document.getElementById('musicIcon');
let musicPlaying = false;

// 🚀 Hent lagret status fra localStorage
const savedMusicState = localStorage.getItem('musicPlaying');
if (savedMusicState === 'true') {
  music.play();
  musicPlaying = true;
  musicIcon.textContent = '🔇';
} else {
  musicPlaying = false;
  musicIcon.textContent = '🔈';
}

// 🎧 Trykk for å slå av/på musikken
musicIcon.addEventListener('click', () => {
  if (!musicPlaying) {
    music.play();
    musicPlaying = true;
    musicIcon.textContent = '🔇';
  } else {
    music.pause();
    musicPlaying = false;
    musicIcon.textContent = '🔈';
  }

  // 💾 Lagre status slik at den huskes neste gang
  localStorage.setItem('musicPlaying', musicPlaying);
});




