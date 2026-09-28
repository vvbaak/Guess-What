const MODE_WORDS = {
  kids: [
    'Teddybeer', 'Piraat', 'Dino', 'Tuin', 'Banaan', 'Auto', 'Luchtballon', 'Aap', 'Kikker',
    'Vliegtuig', 'Piano', 'Schoen', 'Juf', 'Kasteel', 'Maan', 'Zon', 'Vissen', 'Tijger', 'Olifant',
    'Puppy', 'Ballet', 'Puzzel', 'Sneeuwman', 'Zebra', 'Brandweer', 'Pasta', 'Kerstboom', 'Bakker', 'School',
    'Konijn', 'Draak', 'Regenboog', 'IJsje', 'Ballon', 'Fiets', 'Trommel', 'Clown', 'Beer', 'Muis',
    'Giraffe', 'Krokodil', 'Pinguïn', 'Kabouter', 'Heks', 'Ridder', 'Prinses', 'Koning', 'Robot', 'Raket',
    'Trein', 'Boot', 'Tractor', 'Politie', 'Dokter', 'Tandarts', 'Kapper', 'Bakkerij', 'Snoep', 'Koekje',
    'Appel', 'Aardbei', 'Wortel', 'Paddenstoel', 'Vlinder', 'Bij', 'Lieveheersbeestje', 'Slak', 'Egel', 'Uil',
    'Paard', 'Koe', 'Schaap', 'Varken', 'Kip', 'Eend', 'Hond', 'Poes', 'Hamster', 'Papegaai',
    'Voetbal', 'Schommel', 'Glijbaan', 'Zwembad', 'Strand', 'Zandkasteel', 'Sneeuwbal', 'Slee', 'Skelter', 'Step',
    'Dolfijn', 'Haai', 'Walvis', 'Zeester', 'Krab', 'Kreeft', 'Octopus', 'Zeepaardje', 'Schildpad', 'Kwal',
    'Leeuw', 'Neushoorn', 'Nijlpaard', 'Kangoeroe', 'Koala', 'Panda', 'Wolf', 'Vos', 'Hert', 'Eekhoorn',
    'Papegaai', 'Flamingo', 'Pauw', 'Zwaan', 'Ooievaar', 'Kraai', 'Merel', 'Mus', 'Specht', 'Vleermuis',
    'Spin', 'Rups', 'Mier', 'Sprinkhaan', 'Libel', 'Mug', 'Worm', 'Kever', 'Vuurvlieg', 'Wesp',
    'Appeltaart', 'Pannenkoek', 'Poffertjes', 'Patat', 'Hamburger', 'Ijshoorntje', 'Lolly', 'Chocolade', 'Popcorn', 'Marshmallow',
    'Melk', 'Kaas', 'Brood', 'Ei', 'Yoghurt', 'Soep', 'Salade', 'Druif', 'Sinaasappel', 'Kers',
    'Watermeloen', 'Ananas', 'Perzik', 'Peer', 'Framboos', 'Bosbes', 'Kiwi', 'Meloen', 'Pompoen', 'Komkommer',
    'Tent', 'Kampvuur', 'Zaklamp', 'Verrekijker', 'Kompas', 'Vlieger', 'Bel', 'Fluit', 'Gitaar', 'Xylofoon',
    'Kleurpotlood', 'Kwast', 'Schaar', 'Lijm', 'Stift', 'Gum', 'Liniaal', 'Rugzak', 'Schrift', 'Bord',
    'Astronaut', 'Brandweerman', 'Zeeman', 'Cowboy', 'Indiaan', 'Tovenaar', 'Fee', 'Reus', 'Dwerg', 'Zeemeermin',
    'Sneeuwpop', 'Slingers', 'Ballonnen', 'Taart', 'Kaarsjes', 'Cadeautje', 'Feesthoed', 'Confetti', 'Toeter', 'Discobal',
    'Trampoline', 'Wip', 'Draaimolen', 'Reuzenrad', 'Achtbaan', 'Botsauto', 'Spookhuis', 'Suikerspin', 'Kermis', 'Dierentuin',
    'Regenlaars', 'Paraplu', 'Wanten', 'Muts', 'Sjaal', 'Zonnebril', 'Pet', 'Zwemband', 'Emmer', 'Schepje'
  ],
  adults: [
    'Film', 'Boodschap', 'Piano', 'Laptop', 'Zwemmen', 'Aloha', 'Berg', 'Restaurant', 'Koffie', 'Vakantie',
    'Sport', 'Bureau', 'Boot', 'Kerstmis', 'Aardbeien', 'Winkel', 'Parachute', 'Bruiloft', 'Trein', 'Taxi',
    'Muziek', 'Spiegel', 'Wolk', 'Regen', 'Hotel', 'Theater', 'Tennis', 'Bioscoop', 'Wandelen', 'Licht',
    'Festival', 'Concert', 'Museum', 'Schilderij', 'Beeldhouwen', 'Fotograaf', 'Journalist', 'Advocaat', 'Chirurg', 'Piloot',
    'Marathon', 'Yoga', 'Fitness', 'Skiën', 'Surfen', 'Duiken', 'Zeilen', 'Golf', 'Hockey', 'Boksen',
    'Smartphone', 'Tablet', 'Camera', 'Koptelefoon', 'Toetsenbord', 'Wifi', 'Podcast', 'Streaming', 'Selfie', 'Emoji',
    'Sushi', 'Pizza', 'Barbecue', 'Cocktail', 'Wijn', 'Kaasplank', 'Ontbijt', 'Picknick', 'Bakkerij', 'Markt',
    'Amsterdam', 'Parijs', 'Rome', 'Londen', 'Berlijn', 'Barcelona', 'New York', 'Tokio', 'Egypte', 'Safari',
    'Verhuizen', 'Solliciteren', 'Vergadering', 'Deadline', 'Presentatie', 'Belasting', 'Hypotheek', 'Verzekering', 'Files', 'Weekend',
    'Bruidstaart', 'Verjaardag', 'Cadeau', 'Vuurwerk', 'Oudjaar', 'Sinterklaas', 'Halloween', 'Carnaval', 'Koningsdag', 'Zomer',
    'Winter', 'Herfst', 'Lente', 'Onweer', 'Sneeuwstorm', 'Mist', 'Hittegolf', 'Regenboog', 'Zonsondergang', 'Volle maan',
    'Orkest', 'Dirigent', 'Ballerina', 'Opera', 'Musical', 'Cabaret', 'Circus', 'Goochelaar', 'Acrobaat', 'Jongleur',
    'Schaken', 'Dammen', 'Pokeren', 'Darten', 'Bowlen', 'Biljarten', 'Kaarten', 'Puzzelen', 'Sudoku', 'Kruiswoord',
    'Architect', 'Ingenieur', 'Boekhouder', 'Notaris', 'Makelaar', 'Kapper', 'Kok', 'Ober', 'Barman', 'Tuinman',
    'Elektricien', 'Loodgieter', 'Timmerman', 'Schilder', 'Metselaar', 'Monteur', 'Lasser', 'Stukadoor', 'Dakdekker', 'Stratenmaker',
    'Gitaar', 'Drumstel', 'Viool', 'Saxofoon', 'Trompet', 'Harp', 'Cello', 'Fluit', 'Accordeon', 'Basgitaar',
    'Spaghetti', 'Lasagne', 'Risotto', 'Paella', 'Curry', 'Ramen', 'Taco', 'Burrito', 'Kebab', 'Falafel',
    'Croissant', 'Baguette', 'Tiramisu', 'Cheesecake', 'Macaron', 'Éclair', 'Stroopwafel', 'Bitterbal', 'Kroket', 'Frikandel',
    'Rugby', 'Volleybal', 'Basketbal', 'Handbal', 'Badminton', 'Tafeltennis', 'Schaatsen', 'Wielrennen', 'Roeien', 'Turnen',
    'Klimmen', 'Kanoën', 'Paardrijden', 'Kickboksen', 'Judo', 'Karate', 'Schermen', 'Boogschieten', 'Zwemmen', 'Hardlopen',
    'Venetië', 'Praag', 'Wenen', 'Madrid', 'Lissabon', 'Athene', 'Istanbul', 'Dubai', 'Sydney', 'Kaapstad',
    'Vulkaan', 'Woestijn', 'Oerwoud', 'Waterval', 'Gletsjer', 'Koraalrif', 'Grot', 'Kliffen', 'Fjord', 'Kanaal',
    'Telescoop', 'Microscoop', 'Kompas', 'Barometer', 'Thermometer', 'Kaars', 'Lantaarn', 'Ventilator', 'Stofzuiger', 'Wasmachine',
    'Koelkast', 'Magnetron', 'Vaatwasser', 'Strijkijzer', 'Waterkoker', 'Broodrooster', 'Blender', 'Koffiezetapparaat', 'Naaimachine', 'Boormachine',
    'Dokter', 'Verpleegster', 'Tandarts', 'Apotheker', 'Psycholoog', 'Fysiotherapeut', 'Diëtist', 'Opticien', 'Dierenarts', 'Vroedvrouw',
    'Detective', 'Astronaut', 'Brandweer', 'Politie', 'Rechter', 'Leraar', 'Professor', 'Bibliothecaris', 'Postbode', 'Buschauffeur'
  ]
};

const homeScreen = document.getElementById('homeScreen');
const teamTurnScreen = document.getElementById('teamTurnScreen');
const gameScreen = document.getElementById('gameScreen');
const endScreen = document.getElementById('endScreen');
const startButton = document.getElementById('startButton');
const startTurnButton = document.getElementById('startTurnButton');
const turnHomeButton = document.getElementById('turnHomeButton');
const nextTeamButton = document.getElementById('nextTeamButton');
const stopButton = document.getElementById('stopButton');
const passButton = document.getElementById('passButton');
const goodButton = document.getElementById('goodButton');
const homeButton = document.getElementById('homeButton');
const scoreValue = document.getElementById('scoreValue');
const timerValue = document.getElementById('timerValue');
const wordText = document.getElementById('wordText');
const wordCard = document.getElementById('wordCard');
const countdownEl = document.getElementById('countdown');
const statusText = document.getElementById('statusText');
const finalScore = document.getElementById('finalScore');
const orientationNotice = document.getElementById('orientationNotice');
const timerBox = document.querySelector('.timer-box');
const finalDetail = document.getElementById('finalDetail');
const finalRecord = document.getElementById('finalRecord');
const homeHighscore = document.getElementById('homeHighscore');
const timeButtons = document.querySelectorAll('.time-btn');
const clearHighscoreButton = document.getElementById('clearHighscoreButton');
const rulesButton = document.getElementById('rulesButton');
const rulesModal = document.getElementById('rulesModal');
const rulesCloseButton = document.getElementById('rulesCloseButton');
const rulesDoneButton = document.getElementById('rulesDoneButton');
const teamButtons = document.querySelectorAll('.team-btn');
const teamConfig = document.getElementById('teamConfig');
const teamTurnTitle = document.getElementById('teamTurnTitle');
const standingsTurn = document.getElementById('standingsTurn');
const standingsEnd = document.getElementById('standingsEnd');
const endEyebrow = document.getElementById('endEyebrow');
const endTitle = document.getElementById('endTitle');

const WIN_TARGET = 30;

let selectedTime = 90;
let teamCount = 2;
let teamConfigs = [];
let teams = [];
let currentTeamIndex = 0;
let currentMode = 'kids';
let gameOver = false;
let usedWords = { kids: new Set(), adults: new Set() };
let wakeLock = null;
let score = 0;
let passCount = 0;
let timeLeft = 90;
let currentWords = [];
let currentIndex = 0;
let isRunning = false;
let roundActive = false;
let startingRound = false;
let timerInterval = null;
let orientationPermissionGranted = false;
let lastTilt = null;
let audioContext = null;

function highscoreKey(mode) {
  return `napoleon_highscore_${mode}`;
}

function getHighscore(mode) {
  try {
    return Number(localStorage.getItem(highscoreKey(mode))) || 0;
  } catch (error) {
    return 0;
  }
}

function setHighscore(mode, value) {
  try {
    localStorage.setItem(highscoreKey(mode), String(value));
  } catch (error) {
    // storage may be unavailable in private mode; ignore.
  }
}

function updateHighscoreDisplay() {
  if (homeHighscore) {
    homeHighscore.textContent = `Highscore \u2014 Kids: ${getHighscore('kids')} \u00b7 Volw.: ${getHighscore('adults')}`;
  }
}

function clearHighscore() {
  try {
    localStorage.removeItem(highscoreKey('kids'));
    localStorage.removeItem(highscoreKey('adults'));
  } catch (error) {
    // storage may be unavailable; ignore.
  }
  updateHighscoreDisplay();
  ensureAudioContext();
  playTone(300, 0.14, 0.24, 'sine');
}

async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator) {
      wakeLock = await navigator.wakeLock.request('screen');
    }
  } catch (error) {
    // wake lock may be rejected; ignore.
  }
}

function releaseWakeLock() {
  if (wakeLock) {
    wakeLock.release().catch(() => {});
    wakeLock = null;
  }
}

function openRules() {
  if (rulesModal) {
    rulesModal.classList.remove('hidden');
  }
}

function closeRules() {
  if (rulesModal) {
    rulesModal.classList.add('hidden');
  }
}

function syncViewportMetrics() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function ensureAudioContext() {
  if (!audioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      audioContext = new AudioCtx();
    }
  }

  if (audioContext && audioContext.state === 'suspended') {
    audioContext.resume();
  }
}

// iOS only unlocks WebAudio inside a real user gesture; play a silent buffer once.
function unlockAudio() {
  ensureAudioContext();
  if (!audioContext) return;

  audioContext.resume();
  const buffer = audioContext.createBuffer(1, 1, 22050);
  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.connect(audioContext.destination);
  source.start(0);
}

function playTone(frequency, duration, volume, type = 'sine') {
  if (!audioContext) {
    ensureAudioContext();
  }

  if (!audioContext) {
    return;
  }

  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }

  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, now);

  gainNode.gain.setValueAtTime(0.0001, now);
  gainNode.gain.exponentialRampToValueAtTime(volume, now + 0.01);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start(now);
  oscillator.stop(now + duration);
}

function setTime(seconds) {
  selectedTime = seconds;
  timeButtons.forEach((button) => {
    button.classList.toggle('active', Number(button.dataset.time) === seconds);
  });
}

function ensureTeamConfigs() {
  for (let i = 0; i < teamCount; i += 1) {
    if (!teamConfigs[i]) {
      teamConfigs[i] = { name: `Team ${i + 1}`, mode: 'kids' };
    }
  }
}

function renderTeamConfig() {
  if (!teamConfig) return;
  ensureTeamConfigs();
  teamConfig.innerHTML = '';

  for (let i = 0; i < teamCount; i += 1) {
    const config = teamConfigs[i];

    const row = document.createElement('div');
    row.className = 'team-config-row';

    const input = document.createElement('input');
    input.className = 'team-name-input';
    input.type = 'text';
    input.maxLength = 14;
    input.value = config.name;
    input.setAttribute('aria-label', `Naam team ${i + 1}`);
    input.addEventListener('input', () => {
      teamConfigs[i].name = input.value;
    });

    const toggle = document.createElement('div');
    toggle.className = 'team-mode-toggle';

    ['kids', 'adults'].forEach((mode) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'team-mode-btn';
      button.textContent = mode === 'kids' ? 'Kids' : 'Volw.';
      button.classList.toggle('active', config.mode === mode);
      button.addEventListener('click', () => {
        teamConfigs[i].mode = mode;
        toggle.querySelectorAll('.team-mode-btn').forEach((other) => {
          other.classList.toggle('active', other === button);
        });
      });
      toggle.appendChild(button);
    });

    row.append(input, toggle);
    teamConfig.appendChild(row);
  }
}

function setTeams(count) {
  teamCount = count;
  teamButtons.forEach((button) => {
    button.classList.toggle('active', Number(button.dataset.teams) === count);
  });
  renderTeamConfig();
}

function renderStandings(container) {
  if (!container) return;
  container.innerHTML = '';
  const leaderScore = teams.reduce((max, team) => Math.max(max, team.score), 0);
  teams.forEach((team, index) => {
    const row = document.createElement('div');
    row.className = 'standing-row';
    if (index === currentTeamIndex) row.classList.add('current');
    if (team.score === leaderScore && leaderScore > 0) row.classList.add('leader');

    const name = document.createElement('span');
    name.className = 'standing-name';
    name.textContent = team.name;

    const value = document.createElement('span');
    value.className = 'standing-score';
    value.textContent = `${team.score} / ${WIN_TARGET}`;

    row.append(name, value);
    container.appendChild(row);
  });
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function showScreen(screen) {
  [homeScreen, teamTurnScreen, gameScreen, endScreen].forEach((element) => {
    element.classList.toggle('visible', element === screen);
    element.classList.toggle('hidden', element !== screen);
  });
}

function isLandscapeMode() {
  if (window.matchMedia) {
    return window.matchMedia('(orientation: landscape)').matches;
  }

  return true;
}

function updateOrientationState() {
  if (!isRunning) {
    orientationNotice.classList.add('hidden');
    return;
  }

  const landscape = isLandscapeMode();
  orientationNotice.classList.toggle('hidden', landscape);

  if (landscape) {
    if (!roundActive && !startingRound) {
      beginRound();
    }
  } else {
    setStatus('Draai je telefoon naar landscape');
  }
}

async function lockLandscapeOrientation() {
  try {
    if (screen && screen.orientation && typeof screen.orientation.lock === 'function') {
      await screen.orientation.lock('landscape');
    }
  } catch (error) {
    // Safari may reject locking; this is safe to ignore.
  }
}

function startTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  timerInterval = setInterval(() => {
    timeLeft -= 1;
    timerValue.textContent = String(Math.max(0, timeLeft));

    if (timerBox) {
      timerBox.classList.toggle('low', timeLeft <= 10);
    }

    if (timeLeft <= 10 && timeLeft > 0) {
      playTone(880, 0.06, 0.18, 'square');
    }

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

function flashFeedback(type) {
  gameScreen.classList.remove('flash-good', 'flash-pass');
  // force reflow so the animation restarts on rapid taps
  void gameScreen.offsetWidth;
  gameScreen.classList.add(type === 'good' ? 'flash-good' : 'flash-pass');
  setTimeout(() => {
    gameScreen.classList.remove('flash-good', 'flash-pass');
  }, 260);
}

function setStatus(message) {
  statusText.textContent = message;
  statusText.classList.remove('good', 'pass');
  if (message.includes('Goed')) {
    statusText.classList.add('good');
  } else if (message.includes('Pas')) {
    statusText.classList.add('pass');
  }
}

function showCountdown() {
  return new Promise((resolve) => {
    ensureAudioContext();
    countdownEl.classList.add('visible');
    const values = [5, 4, 3, 2, 1];
    let index = 0;

    function tick() {
      countdownEl.textContent = String(values[index]);
      countdownEl.classList.remove('pop');
      void countdownEl.offsetWidth;
      countdownEl.classList.add('pop');
      playTone(520, 0.14, 0.28, 'sine');

      if (index < values.length - 1) {
        index += 1;
        setTimeout(tick, 750);
      } else {
        setTimeout(() => {
          countdownEl.textContent = 'GO!';
          playTone(880, 0.28, 0.32, 'triangle');
          setTimeout(() => {
            countdownEl.classList.remove('visible', 'pop');
            resolve();
          }, 450);
        }, 750);
      }
    }

    tick();
  });
}

function fitWordText() {
  const length = wordText.textContent.length;
  let size;
  if (length <= 6) size = 3.4;
  else if (length <= 9) size = 2.9;
  else if (length <= 12) size = 2.4;
  else if (length <= 15) size = 2;
  else size = 1.6;
  wordText.style.fontSize = `${size}rem`;
}

function drawWord() {
  let pool = MODE_WORDS[currentMode].filter((word) => !usedWords[currentMode].has(word));
  if (pool.length === 0) {
    // All words used this game; reset the pool as a fallback so play can continue.
    usedWords[currentMode].clear();
    pool = MODE_WORDS[currentMode].slice();
  }
  const word = shuffle(pool)[0];
  usedWords[currentMode].add(word);
  return word;
}

function nextWord() {
  if (!isRunning) return;

  wordText.textContent = drawWord();
  fitWordText();
  wordCard.classList.remove('hidden');
}

function updateScore() {
  scoreValue.textContent = String(score);
}

function handleCorrect() {
  if (!roundActive) return;
  score += 1;
  updateScore();
  ensureAudioContext();
  playTone(660, 0.1, 0.35, 'triangle');
  playTone(990, 0.18, 0.3, 'triangle');
  flashFeedback('good');
  setStatus('Goed! Volgend woord');
  nextWord();
}

function handlePass() {
  if (!roundActive) return;
  passCount += 1;
  ensureAudioContext();
  playTone(240, 0.2, 0.3, 'sawtooth');
  playTone(150, 0.24, 0.28, 'sawtooth');
  flashFeedback('pass');
  setStatus('Pas! Geen punt');
  nextWord();
}

function resetGame() {
  score = 0;
  passCount = 0;
  timeLeft = selectedTime;
  currentIndex = 0;
  currentWords = [];
  scoreValue.textContent = '0';
  timerValue.textContent = String(selectedTime);
  if (timerBox) {
    timerBox.classList.remove('low');
  }
  lastTilt = null;
  roundActive = false;
  startingRound = false;
  wordCard.classList.add('hidden');
  setStatus('Hou de telefoon op je voorhoofd');
}

async function beginRound() {
  if (roundActive || startingRound || !isRunning) return;
  if (!isLandscapeMode()) return;

  startingRound = true;
  orientationNotice.classList.add('hidden');
  wordCard.classList.add('hidden');
  await showCountdown();

  if (!isRunning) {
    startingRound = false;
    return;
  }

  roundActive = true;
  startingRound = false;
  setStatus('Hou de telefoon op je voorhoofd');
  nextWord();
  startTimer();
}

function startMatch() {
  ensureTeamConfigs();
  teams = [];
  for (let i = 0; i < teamCount; i += 1) {
    const config = teamConfigs[i];
    const name = (config.name || '').trim() || `Team ${i + 1}`;
    teams.push({ name, score: 0, mode: config.mode });
  }
  currentTeamIndex = 0;
  gameOver = false;
  usedWords = { kids: new Set(), adults: new Set() };
  showTeamTurn();
}

function showTeamTurn() {
  if (teamTurnTitle) {
    teamTurnTitle.textContent = teams[currentTeamIndex].name;
  }
  renderStandings(standingsTurn);
  showScreen(teamTurnScreen);
}

async function startTurn() {
  currentMode = teams[currentTeamIndex].mode;
  resetGame();
  showScreen(gameScreen);
  isRunning = true;

  ensureAudioContext();
  requestWakeLock();

  if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
    if (!orientationPermissionGranted) {
      try {
        const response = await DeviceOrientationEvent.requestPermission();
        orientationPermissionGranted = response === 'granted';
      } catch (error) {
        orientationPermissionGranted = false;
      }
    }
  }

  await lockLandscapeOrientation();

  if (isLandscapeMode()) {
    orientationNotice.classList.add('hidden');
    beginRound();
  } else {
    orientationNotice.classList.remove('hidden');
    setStatus('Draai je telefoon naar landscape');
  }
}

function endGame() {
  isRunning = false;
  roundActive = false;
  startingRound = false;
  clearInterval(timerInterval);
  timerInterval = null;
  releaseWakeLock();

  const team = teams[currentTeamIndex];
  if (team) {
    team.score += score;
  }

  const totalScore = team ? team.score : score;
  finalScore.textContent = String(totalScore);
  if (endTitle && team) {
    endTitle.textContent = team.name;
  }
  if (finalDetail) {
    finalDetail.textContent = `+${score} deze beurt \u00b7 ${passCount} gepast`;
  }

  const previousBest = getHighscore(currentMode);
  const isRecord = score > previousBest;
  if (isRecord) {
    setHighscore(currentMode, score);
  }
  if (finalRecord) {
    finalRecord.classList.toggle('hidden', !isRecord || score === 0);
  }
  updateHighscoreDisplay();

  gameOver = Boolean(team) && team.score >= WIN_TARGET;
  if (endEyebrow) {
    endEyebrow.textContent = gameOver ? 'Gewonnen!' : 'Beurt voorbij';
  }
  if (nextTeamButton) {
    nextTeamButton.textContent = gameOver ? 'Nieuw spel' : 'Volgende team';
  }
  if (gameOver) {
    ensureAudioContext();
    playTone(660, 0.14, 0.3, 'triangle');
    playTone(880, 0.16, 0.3, 'triangle');
    playTone(1180, 0.3, 0.3, 'triangle');
  }

  renderStandings(standingsEnd);

  if (timerBox) {
    timerBox.classList.remove('low');
  }
  orientationNotice.classList.add('hidden');
  showScreen(endScreen);
}

function nextTeam() {
  if (gameOver) {
    updateHighscoreDisplay();
    showScreen(homeScreen);
    return;
  }
  currentTeamIndex = (currentTeamIndex + 1) % teamCount;
  showTeamTurn();
}

function stopGame() {
  if (!isRunning) return;
  ensureAudioContext();
  playTone(320, 0.16, 0.28, 'sawtooth');
  playTone(200, 0.28, 0.26, 'sawtooth');
  endGame();
}

function handleOrientation() {
  updateOrientationState();
}

function attachListeners() {
  document.addEventListener('pointerdown', unlockAudio, { once: true });
  document.addEventListener('touchend', unlockAudio, { once: true });

  timeButtons.forEach((button) => {
    button.addEventListener('click', () => setTime(Number(button.dataset.time)));
  });

  teamButtons.forEach((button) => {
    button.addEventListener('click', () => setTeams(Number(button.dataset.teams)));
  });

  startButton.addEventListener('click', startMatch);
  if (startTurnButton) {
    startTurnButton.addEventListener('click', startTurn);
  }
  if (turnHomeButton) {
    turnHomeButton.addEventListener('click', () => showScreen(homeScreen));
  }
  if (nextTeamButton) {
    nextTeamButton.addEventListener('click', nextTeam);
  }
  stopButton.addEventListener('click', stopGame);
  passButton.addEventListener('click', handlePass);
  goodButton.addEventListener('click', handleCorrect);
  if (clearHighscoreButton) {
    clearHighscoreButton.addEventListener('click', clearHighscore);
  }
  if (rulesButton) {
    rulesButton.addEventListener('click', openRules);
  }
  if (rulesCloseButton) {
    rulesCloseButton.addEventListener('click', closeRules);
  }
  if (rulesDoneButton) {
    rulesDoneButton.addEventListener('click', closeRules);
  }
  if (rulesModal) {
    rulesModal.addEventListener('click', (event) => {
      if (event.target.dataset.close) {
        closeRules();
      }
    });
  }
  homeButton.addEventListener('click', () => {
    if (isRunning) {
      endGame();
    }
    showScreen(homeScreen);
  });

  window.addEventListener('orientationchange', updateOrientationState);
  window.addEventListener('resize', () => {
    syncViewportMetrics();
    updateOrientationState();
  });

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && isRunning) {
      requestWakeLock();
    }
  });

  syncViewportMetrics();
  renderTeamConfig();
  updateHighscoreDisplay();
}

attachListeners();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
