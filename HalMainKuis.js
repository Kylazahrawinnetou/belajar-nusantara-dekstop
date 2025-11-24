// =======================
//  KONFIGURASI MODE
// =======================

const MODE_CONFIGS = [
  {
    id: "easy",
    name: "Mode Mudah",
    splashId: "splash-easy",
    titleText: "Ayo Pemanasan!",
    totalQuestions: 11,
    scoreCorrect: 10,
    scoreWrong: -5,
  },
  {
    id: "normal",
    name: "Mode Normal",
    splashId: "splash-normal",
    titleText: "Saatnya Tantangan!",
    totalQuestions: 15,
    scoreCorrect: 15,
    scoreWrong: -7,
  },
  {
    id: "hard",
    name: "Mode Sulit",
    splashId: "splash-hard",
    titleText: "Tantangan Terakhir!",
    totalQuestions: 19,
    scoreCorrect: 20,
    scoreWrong: -10,
  },
];

const TIME_PER_QUESTION = 15;    // detik per soal (semua mode)
const NEXT_DELAY_MS      = 1200; // dipakai untuk timeout (waktu habis)

// =======================
//  AMBIL ELEMEN DOM
// =======================

const titleBar     = document.getElementById("title-bar");

const splashEasy   = document.getElementById("splash-easy");
const splashNormal = document.getElementById("splash-normal");
const splashHard   = document.getElementById("splash-hard");

const quizCard     = document.getElementById("quiz-card");
const finalScreen  = document.getElementById("final-screen");
const finalScoreEl = document.getElementById("final-score");

const timerEl      = document.getElementById("timer");
const scoreEl      = document.getElementById("score");
const levelEl      = document.getElementById("level-text");
const questionEl   = document.getElementById("question-text");
const optionButtons = Array.from(document.querySelectorAll(".option-btn"));

// Tombol & popup keluar
const backBtn      = document.getElementById("backBtn");
const confirmExit  = document.getElementById("confirm-exit");
const btnExitYes   = document.getElementById("btn-exit-yes");
const btnExitNo    = document.getElementById("btn-exit-no");

// =======================
//  STATE
// =======================

let currentModeIndex  = 0;       // 0 = mudah, 1 = normal, 2 = sulit
let questionIndex     = 0;       // nomor soal di mode saat ini
let currentQuestion   = null;

let score             = 0;
let timeLeft          = TIME_PER_QUESTION;
let timerId           = null;
let isLocked          = false;   // supaya user tak bisa spam klik

// =======================
//  FUNGSI BANTUAN
// =======================

function pickRandomBuilder() {
  const builders = [
    buildQuestionHewan,
    buildQuestionPakaian,
    buildQuestionRumah,
    buildQuestionTari,
    buildQuestionSenjata,
    buildQuestionMakanan,
    buildQuestionAlatMusik,
  ];

  while (true) {
    const fn = builders[Math.floor(Math.random() * builders.length)];
    const q = fn(PROVINSI_DATA);
    if (q) return q;
  }
}

function resetOptionsStyle() {
  optionButtons.forEach((btn) => {
    btn.className =
      "option-btn w-full py-3 rounded-2xl border border-black bg-gray-200 text-base sm:text-lg font-semibold";
  });
}

function updateTimerLabel() {
  timerEl.textContent = `00:${String(timeLeft).padStart(2, "0")}`;
}

function startTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }

  updateTimerLabel();

  timerId = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerId);
      timerId = null;
      handleTimeout();
      return;
    }
    timeLeft -= 1;
    updateTimerLabel();
  }, 1000);
}

function highlightAnswers(selectedValue) {
  optionButtons.forEach((btn) => {
    const val = btn.dataset.value;

    btn.classList.remove(
      "bg-gray-200",
      "bg-green-400",
      "bg-red-400",
      "border-green-600",
      "border-red-600"
    );

    if (val === currentQuestion.correct) {
      // jawaban benar → hijau
      btn.classList.add("bg-green-400", "border-green-600");
    } else if (selectedValue && val === selectedValue) {
      // jawaban yang dipilih tapi salah → merah
      btn.classList.add("bg-red-400", "border-red-600");
    } else {
      btn.classList.add("bg-gray-200", "border-black");
    }
  });
}

function hideAllPanels() {
  splashEasy.classList.add("hidden");
  splashNormal.classList.add("hidden");
  splashHard.classList.add("hidden");
  quizCard.classList.add("hidden");
  finalScreen.classList.add("hidden");
}

// =======================
//  SIKLUS PER MODE
// =======================

function showSplashForMode(modeIndex) {
  hideAllPanels();
  titleBar.textContent = "JAWAB KUIS";

  const mode    = MODE_CONFIGS[modeIndex];
  const splashEl = document.getElementById(mode.splashId);
  splashEl.classList.remove("hidden");
  splashEl.classList.add("flex");

  setTimeout(() => startMode(modeIndex), 4000);
}

function startMode(modeIndex) {
  currentModeIndex = modeIndex;
  questionIndex    = 0;
  isLocked         = false;

  hideAllPanels();

  const mode = MODE_CONFIGS[modeIndex];
  titleBar.textContent = mode.titleText;

  quizCard.classList.remove("hidden");
  quizCard.classList.add("flex");

  if (mode.id === "easy") {
    score = 0;
    scoreEl.textContent = score;
  }

  loadNextQuestion();
}

function loadNextQuestion() {
  const mode = MODE_CONFIGS[currentModeIndex];

  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }

  if (questionIndex >= mode.totalQuestions) {
    if (currentModeIndex < MODE_CONFIGS.length - 1) {
      showSplashForMode(currentModeIndex + 1);
    } else {
      showFinalScore();
    }
    return;
  }

  questionIndex += 1;
  levelEl.textContent = `${mode.name} • Level ${questionIndex} / ${mode.totalQuestions}`;

  currentQuestion = pickRandomBuilder();

  questionEl.textContent = currentQuestion.question;
  resetOptionsStyle();

  optionButtons.forEach((btn, idx) => {
    const text = currentQuestion.options[idx];
    btn.textContent = text;
    btn.dataset.value = text;
  });

  isLocked = false;
  timeLeft = TIME_PER_QUESTION;
  startTimer();
}

function showFinalScore() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }

  hideAllPanels();
  titleBar.textContent = "Kuis Selesai!";

  finalScoreEl.textContent = score;
  finalScreen.classList.remove("hidden");
  finalScreen.classList.add("flex");
}

// =======================
//  JIKA WAKTU HABIS
// =======================

function handleTimeout() {
  if (isLocked) return;
  isLocked = true;

  const mode = MODE_CONFIGS[currentModeIndex];

  score = Math.max(0, score + mode.scoreWrong);
  scoreEl.textContent = score;

  highlightAnswers(null);

  setTimeout(loadNextQuestion, NEXT_DELAY_MS);
}

// =======================
//  EVENT KLIK JAWABAN
// =======================

optionButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (isLocked) return;
    isLocked = true;

    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }

    const selected  = btn.dataset.value;
    const isCorrect = selected === currentQuestion.correct;
    const mode      = MODE_CONFIGS[currentModeIndex];

    if (isCorrect) {
      score += mode.scoreCorrect;
    } else {
      score = Math.max(0, score + mode.scoreWrong);
    }
    scoreEl.textContent = score;

    // tampilkan warna hijau / merah dulu
    highlightAnswers(selected);

    // beri jeda pendek supaya user sempat lihat warna
    setTimeout(() => {
      loadNextQuestion();
    }, 700);
  });
});

// =======================
//  TOMBOL KEMBALI + POPUP
// =======================

backBtn.addEventListener("click", () => {
  // Kalau sudah di final screen → langsung balik, tanpa popup
  if (!finalScreen.classList.contains("hidden")) {
    window.location.href = "HalPenyambutanReal.html";
    return;
  }

  // Di tengah kuis → tampilkan popup
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  confirmExit.classList.remove("hidden");
});

btnExitYes.addEventListener("click", () => {
  window.location.href = "HalPenyambutanReal.html";
});

btnExitNo.addEventListener("click", () => {
  confirmExit.classList.add("hidden");

  // kalau kuis sedang tampil & soal belum dikunci → lanjut timer lagi
  if (!isLocked && quizCard.classList.contains("flex")) {
    startTimer();
  }
});

// =======================
//  MULAI: SPLASH MODE MUDAH
// =======================

document.addEventListener("DOMContentLoaded", () => {
  showSplashForMode(0);
});
