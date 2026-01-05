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
    timePerQuestion: 20,
  },
  {
    id: "normal",
    name: "Mode Normal",
    splashId: "splash-normal",
    titleText: "Saatnya Tantangan!",
    totalQuestions: 15,
    scoreCorrect: 15,
    scoreWrong: -7,
    timePerQuestion: 15,
  },
  {
    id: "hard",
    name: "Mode Sulit",
    splashId: "splash-hard",
    titleText: "Tantangan Terakhir!",
    totalQuestions: 19,
    scoreCorrect: 20,
    scoreWrong: -10,
    timePerQuestion: 10,
  },
];

// Mode → daftar pulau yang boleh dipakai untuk soal
const MODE_PULAU = {
  easy:   ["Sumatera", "Jawa"],
  normal: ["Kalimantan", "Sulawesi"],
  hard:   ["Papua", "Maluku", "Nusa Tenggara", "Bali"],
};

// Offset level global (1–45)
const MODE_GLOBAL_OFFSET = {
  easy:   0,   // 1–11
  normal: 11,  // 12–26
  hard:   26,  // 27–45
};

const NEXT_DELAY_MS = 1200;

// =======================
//  KONFIGURASI VARIASI SOAL & GAMBAR
// =======================

const PLACEHOLDER_IMG = "./src/assets/LogoIcons/placeholder.png";

const QUESTION_VARIATIONS = {
  TEKS: "variasi-1",                 // Variasi 1: teks
  GAMBAR_KE_PROVINSI: "variasi-2",   // Variasi 2: gambar di soal → pilih teks provinsi
  GAMBAR_KE_GAMBAR: "variasi-3",     // Variasi 3: provinsi + kategori → pilih gambar
};

const ALL_VARIATIONS = [
  QUESTION_VARIATIONS.TEKS,
  QUESTION_VARIATIONS.GAMBAR_KE_PROVINSI,
  QUESTION_VARIATIONS.GAMBAR_KE_GAMBAR,
];

// Nama kategori (untuk kalimat)
const CATEGORY_META = {
  hewanIkonik:   "hewan ikonik",
  pakaianAdat:   "pakaian adat",
  rumahAdat:     "rumah adat",
  tarianDaerah:  "tarian daerah",
  senjataDaerah: "senjata daerah",
  alatMusik:     "alat musik daerah",
  makananKhas:   "makanan khas",
};

// =======================
//  KONFIGURASI BADGES
// =======================

const LEVEL_BADGES = [
  { level: 11, id: "badge_level_11_serindit" },
  { level: 26, id: "badge_level_26_pesut" },
  { level: 45, id: "badge_level_45_harimau" },
];

const STREAK_BADGES = [
  { streak: 5,  id: "badge_streak_5_kepodang" },
  { streak: 10, id: "badge_streak_10_gajah" },
];

const PERFECT_BADGES = {
  easy:   "badge_perfect_easy_jalak",
  normal: "badge_perfect_normal_elang",
  hard:   "badge_perfect_hard_komodo",
};

const SPEED_BADGE_ID     = "badge_speed_normal_tarsius";
const ACCURACY_BADGE_ID  = "badge_accuracy_normal_kasuari";

const SCORE_BADGES = [
  { threshold: 100, id: "badge_score_100_belida" },
  { threshold: 150, id: "badge_score_150_kuau" },
  { threshold: 200, id: "badge_score_200_cendrawasih" },
];

//const BADGE_ICON_PATH = "./src/assets/LogoIcons/badgeIcon.png";

const BADGE_META = {
  badge_level_11_serindit: {
    label: "Burung Serindit",
    detail: "Mencapai level 11 – Burung Serindit.",
  },
  badge_level_26_pesut: {
    label: "Pesut Mahakam",
    detail: "Mencapai level 26 – Pesut Mahakam.",
  },
  badge_level_45_harimau: {
    label: "Harimau Sumatera",
    detail: "Menyelesaikan semua 45 level kuis – Harimau Sumatera.",
  },

  badge_streak_5_kepodang: {
    label: "Burung Kepodang",
    detail: "Menjawab benar 5 soal beruntun.",
  },
  badge_streak_10_gajah: {
    label: "Gajah Sumatera",
    detail: "Menjawab benar 10 soal beruntun.",
  },

  badge_perfect_easy_jalak: {
    label: "Burung Jalak Bali",
    detail: "Mode Mudah tanpa kesalahan.",
  },
  badge_perfect_normal_elang: {
    label: "Burung Elang Bondol",
    detail: "Mode Normal tanpa kesalahan.",
  },
  badge_perfect_hard_komodo: {
    label: "Komodo",
    detail: "Mode Sulit tanpa kesalahan.",
  },

  badge_speed_normal_tarsius: {
    label: "Tarsius",
    detail: "Mode Normal: waktu rata-rata < 10 detik per soal.",
  },
  badge_accuracy_normal_kasuari: {
    label: "Burung Kasuari",
    detail: "Mode Normal: akurasi ≥ 80%.",
  },

  badge_score_100_belida: {
    label: "Ikan Belida",
    detail: "Mencapai total poin 100.",
  },
  badge_score_150_kuau: {
    label: "Burung Kuau Raja",
    detail: "Mencapai total poin 150.",
  },
  badge_score_200_cendrawasih: {
    label: "Burung Cendrawasih",
    detail: "Mencapai total poin 200.",
  },
};

// =======================
//  STORAGE BADGE
// =======================

const BADGE_STORAGE_KEY = "nusantara_badges_v1";

function getEarnedBadgesFromStorage() {
  try {
    const raw = localStorage.getItem(BADGE_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error("Gagal baca badge dari localStorage:", err);
    return [];
  }
}

function saveEarnedBadgesToStorage(list) {
  try {
    localStorage.setItem(BADGE_STORAGE_KEY, JSON.stringify(list));
  } catch (err) {
    console.error("Gagal simpan badge ke localStorage:", err);
  }
}

// =======================
//  DOM ELEMENTS
// =======================

const titleBar      = document.getElementById("title-bar");
const bodyEl        = document.body;
const splashEasy    = document.getElementById("splash-easy");
const splashNormal  = document.getElementById("splash-normal");
const splashHard    = document.getElementById("splash-hard");
const quizCard      = document.getElementById("quiz-card");
const finalScreen   = document.getElementById("final-screen");
const finalScoreEl  = document.getElementById("final-score");

const timerEl       = document.getElementById("timer");
const scoreEl       = document.getElementById("score");
const levelEl       = document.getElementById("level-text");
const questionEl    = document.getElementById("question-text");

const optionButtons    = Array.from(document.querySelectorAll(".option-btn"));
const optionsContainer = document.getElementById("options-wrapper");

// kolom gambar (variasi 2)
const mediaCol  = document.getElementById("media-col");
const mediaCard = document.getElementById("media-card");

const backBtn       = document.getElementById("backBtn");
const confirmExit   = document.getElementById("confirm-exit");
const btnExitYes    = document.getElementById("btn-exit-yes");
const btnExitNo     = document.getElementById("btn-exit-no");

// Tombol final-screen
const btnFinalExit   = document.getElementById("btn-final-exit");
const btnFinalReplay = document.getElementById("btn-final-replay");


// Popup badge
const badgePopupOverlay  = document.getElementById("badge-popup-overlay");
const badgePopupIcon     = document.getElementById("badge-popup-icon");
const badgePopupName     = document.getElementById("badge-popup-name");
const badgePopupDesc     = document.getElementById("badge-popup-desc");
const badgePopupContent  = document.getElementById("badge-popup-content");

// =======================
//  STATE
// =======================

let currentModeIndex   = 0;
let questionIndex      = 0;
let currentQuestion    = null; 
// currentQuestion shape:
// { id, variation, prompt, options: [{id,label,imgSrc}], correctOptionId, baseItem, fieldKey, categoryName, ikonValue, imageSrc }

let score              = 0;
let timeLeft           = 0;
let timerId            = null;
let isLocked           = false;

let currentStreak      = 0;
let currentGlobalLevel = 0;
let questionStartTime  = null;

let modeStats          = null;
let earnedBadges       = getEarnedBadgesFromStorage();

// Badge popup state
let isBadgeShowing        = false;   // lagi ada popup badge di layar?
let pendingNextAfterBadge = false;   // habis popup ditutup, harus lanjut soal?
let nextQuestionTimeoutId = null;    // timer untuk next question


// =======================
//  POPUP BADGE
// =======================

function showBadgePopup(badgeId) {
  console.log("[badge] showBadgePopup dipanggil:", badgeId);

  const overlay = badgePopupOverlay;
  const content = badgePopupContent;

  isBadgeShowing = true;

  if (!overlay) {
    console.warn("[badge] overlay badge-popup-overlay tidak ditemukan di DOM");
    isBadgeShowing = false;
    return;
  }

  const meta   = BADGE_META[badgeId] || {};
  const label  = meta.label  || "Badge";
  const detail = meta.detail || "";

  // ⬇️ Gambar kita biarkan kosong dulu
  // if (badgePopupIcon) badgePopupIcon.src = BADGE_ICON_PATH;

  if (badgePopupName) badgePopupName.textContent = label;
  if (badgePopupDesc) badgePopupDesc.textContent = detail;

  // PAUSE timer
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }

  // restart animasi
  if (content) {
    content.classList.remove("badge-pop-animate");
    void content.offsetWidth;
    content.classList.add("badge-pop-animate");
  }

  overlay.classList.remove("hidden");
  overlay.style.display = "flex";
}


// klik overlay = tutup popup & kalau perlu lanjut soal
badgePopupOverlay.addEventListener("click", () => {
  badgePopupOverlay.classList.add("hidden");
  badgePopupOverlay.style.display = "none";
  isBadgeShowing = false;

  if (pendingNextAfterBadge) {
    pendingNextAfterBadge = false;
    loadNextQuestion();
  }
});


// =======================
//  RESET STATISTIK
// =======================

function resetAllStats() {
  currentStreak      = 0;
  currentGlobalLevel = 0;
  questionStartTime  = null;

  modeStats = {
    easy:   { correct: 0, wrong: 0, answered: 0, totalTime: 0 },
    normal: { correct: 0, wrong: 0, answered: 0, totalTime: 0 },
    hard:   { correct: 0, wrong: 0, answered: 0, totalTime: 0 },
  };
}

// =======================
//  BADGE HELPER
// =======================

function awardBadge(id) {
  if (!id) return;
  if (!earnedBadges.includes(id)) {
    earnedBadges.push(id);
    saveEarnedBadgesToStorage(earnedBadges);
    console.log("🎖️ Badge didapat:", id);
    showBadgePopup(id);
  }
}

function checkLevelBadges(level) {
  LEVEL_BADGES.forEach((b) => {
    if (level === b.level) awardBadge(b.id);
  });
}

function checkStreakBadges(streak) {
  STREAK_BADGES.forEach((b) => {
    if (streak === b.streak) awardBadge(b.id);
  });
}

function checkScoreBadges(currentScore) {
  SCORE_BADGES.forEach((b) => {
    if (currentScore >= b.threshold) awardBadge(b.id);
  });
}

function handleModeFinished(modeId) {
  if (!modeStats || !modeStats[modeId]) return;
  const stats      = modeStats[modeId];
  const modeConfig = MODE_CONFIGS.find((m) => m.id === modeId);

  if (modeConfig &&
      stats.answered === modeConfig.totalQuestions &&
      stats.wrong === 0) {
    awardBadge(PERFECT_BADGES[modeId]);
  }

  if (modeId === "normal") {
    const avgTime  = stats.answered > 0 ? stats.totalTime / stats.answered : 0;
    const accuracy = stats.answered > 0 ? (stats.correct / stats.answered) * 100 : 0;

    if (avgTime > 0 && avgTime < 10) awardBadge(SPEED_BADGE_ID);
    if (accuracy >= 80)              awardBadge(ACCURACY_BADGE_ID);

    console.log("📊 Statistik Mode Normal:", {
      answered: stats.answered,
      correct : stats.correct,
      wrong   : stats.wrong,
      avgTime,
      accuracy,
    });
  }
}

function updateStatsAfterAnswer(modeId, isCorrect, elapsedSeconds) {
  if (!modeStats || !modeStats[modeId]) return;
  const stats      = modeStats[modeId];
  const modeConfig = MODE_CONFIGS.find((m) => m.id === modeId);
  const fallback   = modeConfig ? modeConfig.timePerQuestion : 15;

  const elapsed = (typeof elapsedSeconds === "number" && elapsedSeconds > 0)
    ? elapsedSeconds
    : fallback;

  stats.answered  += 1;
  stats.totalTime += elapsed;

  if (isCorrect) {
    stats.correct += 1;
    currentStreak += 1;
    checkStreakBadges(currentStreak);
  } else {
    stats.wrong   += 1;
    currentStreak  = 0;
  }
}

// =======================
//  HELPER MODE & RANDOM
// =======================

function setBackgroundForMode(modeId) {
  if (!bodyEl) return;

  if (modeId === "easy") {
    bodyEl.style.backgroundImage    = "url('./src/assets/LogoIcons/bgModeMudah.png')";
    bodyEl.style.backgroundSize     = "cover";
    bodyEl.style.backgroundPosition = "center";
    bodyEl.style.backgroundRepeat   = "no-repeat";
    bodyEl.style.backgroundColor    = "";
  } else if (modeId === "normal") {
    bodyEl.style.backgroundImage    = "url('./src/assets/LogoIcons/bgModeNormal.png')";
    bodyEl.style.backgroundSize     = "cover";
    bodyEl.style.backgroundPosition = "center";
    bodyEl.style.backgroundRepeat   = "no-repeat";
    bodyEl.style.backgroundColor    = "";
  } else if (modeId === "hard") {
    bodyEl.style.backgroundImage    = "url('./src/assets/LogoIcons/bgModeSulit.png')";
    bodyEl.style.backgroundSize     = "cover";
    bodyEl.style.backgroundPosition = "center";
    bodyEl.style.backgroundRepeat   = "no-repeat";
    bodyEl.style.backgroundColor    = "";
  }
}

function getCurrentModeData() {
  const mode    = MODE_CONFIGS[currentModeIndex];
  const allowed = MODE_PULAU[mode.id];
  if (!allowed) return PROVINSI_DATA;
  return PROVINSI_DATA.filter((p) => allowed.includes(p.pulau));
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomItem(arr) {
  if (!arr || arr.length === 0) return null;
  return arr[getRandomInt(arr.length)];
}

function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function getImageSrcForIkon(item, fieldKey) {
  // Nanti bisa diubah: mapping ke file beneran
  // Sekarang pakai placeholder dulu
  return PLACEHOLDER_IMG;
}

// Ambil daftar kategori yang punya nilai di 1 provinsi
function getAvailableCategoriesForItem(item) {
  const keys = Object.keys(CATEGORY_META);
  return keys.filter((key) => item[key]);
}

// Pilih 1 baseItem + 1 kategori yang punya minimal 3 provinsi untuk kategori itu
function pickBaseItemAndCategory(modeData) {
  if (!modeData || modeData.length === 0) return null;

  let tries = 0;
  while (tries < 50) {
    const baseItem = getRandomItem(modeData);
    const keys = getAvailableCategoriesForItem(baseItem);
    if (!keys || keys.length === 0) {
      tries++;
      continue;
    }

    const fieldKey = getRandomItem(keys);
    const categoryName = CATEGORY_META[fieldKey] || "ikon budaya";
    const value = baseItem[fieldKey];

    const candidates = modeData.filter((p) => p[fieldKey]);
    if (candidates.length >= 3) {
      return { baseItem, fieldKey, categoryName, ikonValue: value, candidates };
    }

    tries++;
  }

  return null;
}

// helper dedup array sederhana
function uniqueArray(arr) {
  return [...new Set(arr)];
}

// =======================
//  GENERATOR VARIASI SOAL
// =======================

// Variasi 1
function generateVariationTeks(modeData) {
  const combo = pickBaseItemAndCategory(modeData);
  if (!combo) return null;

  const { baseItem, fieldKey, categoryName, ikonValue, candidates } = combo;

  const distractItems = candidates.filter((p) => p.id !== baseItem.id);
  if (distractItems.length < 2) return null;

  let prompt = "";
  let correctText = "";
  let wrongPool = [];

  const modeForm = Math.random() < 0.5 ? 1 : 2;

  if (modeForm === 1) {
    prompt = `Apa ${categoryName} dari provinsi ${baseItem.provinsi}?`;
    correctText = ikonValue;
    wrongPool = distractItems
      .map((p) => p[fieldKey])
      .filter((val) => val && val !== ikonValue);
  } else {
    prompt = `${ikonValue} merupakan ${categoryName} dari provinsi?`;
    correctText = baseItem.provinsi;
    wrongPool = distractItems
      .map((p) => p.provinsi)
      .filter((val) => val && val !== baseItem.provinsi);
  }

  wrongPool = uniqueArray(wrongPool);
  if (wrongPool.length < 2) return null;

  const shuffledWrong = shuffleArray(wrongPool);
  const optionsText = [correctText, shuffledWrong[0], shuffledWrong[1]];
  const shuffled = shuffleArray(optionsText);

  const options = shuffled.map((text, idx) => ({
    id: `v1-opt-${idx}-${Date.now()}`,
    label: text,
    imgSrc: null,
  }));

  const correctOpt = options.find((o) => o.label === correctText) || options[0];

  return {
    id: `v1-${Date.now()}`,
    variation: QUESTION_VARIATIONS.TEKS,
    prompt,
    options,
    correctOptionId: correctOpt.id,
    baseItem,
    fieldKey,
    categoryName,
    ikonValue,
    imageSrc: null,
  };
}

// Variasi 2
function generateVariationGambarKeProvinsi(modeData) {
  const combo = pickBaseItemAndCategory(modeData);
  if (!combo) return null;

  const { baseItem, fieldKey, categoryName, ikonValue, candidates } = combo;

  const distractItems = candidates.filter((p) => p.id !== baseItem.id);
  if (distractItems.length < 2) return null;

  const prompt = `${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} ini berasal dari provinsi?`;

  const correctProv = baseItem.provinsi;
  let wrongProvPool = distractItems
    .map((p) => p.provinsi)
    .filter((val) => val && val !== correctProv);

  wrongProvPool = uniqueArray(wrongProvPool);
  if (wrongProvPool.length < 2) return null;

  const shuffledWrong = shuffleArray(wrongProvPool);
  const optionsText = [correctProv, shuffledWrong[0], shuffledWrong[1]];
  const shuffled = shuffleArray(optionsText);

  const options = shuffled.map((text, idx) => ({
    id: `v2-opt-${idx}-${Date.now()}`,
    label: text,
    imgSrc: null,
  }));

  const correctOpt = options.find((o) => o.label === correctProv) || options[0];

  const imageSrc = getImageSrcForIkon(baseItem, fieldKey);

  return {
    id: `v2-${baseItem.id}-${Date.now()}`,
    variation: QUESTION_VARIATIONS.GAMBAR_KE_PROVINSI,
    prompt,
    options,
    correctOptionId: correctOpt.id,
    baseItem,
    fieldKey,
    categoryName,
    ikonValue,
    imageSrc,
  };
}

// Variasi 3
function generateVariationGambarKeGambar(modeData) {
  const combo = pickBaseItemAndCategory(modeData);
  if (!combo) return null;

  const { baseItem, fieldKey, categoryName, ikonValue, candidates } = combo;

  let distractItems = candidates.filter(
    (p) => p.id !== baseItem.id && p[fieldKey] !== ikonValue
  );
  if (distractItems.length < 2) return null;

  const prompt = `Manakah dari ${categoryName} di bawah ini yang berasal dari provinsi ${baseItem.provinsi}?`;

  distractItems = shuffleArray(distractItems);
  const chosenDistr = [];
  const usedIkon = new Set([ikonValue]);

  for (const item of distractItems) {
    const val = item[fieldKey];
    if (!val || usedIkon.has(val)) continue;
    chosenDistr.push(item);
    usedIkon.add(val);
    if (chosenDistr.length === 2) break;
  }

  if (chosenDistr.length < 2) return null;

  const allItems = shuffleArray([baseItem, ...chosenDistr]);

  const options = allItems.map((item, idx) => ({
    id: `v3-opt-${item.id}-${idx}-${Date.now()}`,
    label: item[fieldKey],
    imgSrc: getImageSrcForIkon(item, fieldKey),
  }));

  const correctOpt = options.find((o) => o.label === ikonValue) || options[0];

  return {
    id: `v3-${baseItem.id}-${Date.now()}`,
    variation: QUESTION_VARIATIONS.GAMBAR_KE_GAMBAR,
    prompt,
    options,
    correctOptionId: correctOpt.id,
    baseItem,
    fieldKey,
    categoryName,
    ikonValue,
    imageSrc: null,
  };
}

function generateQuestionForCurrentMode() {
  const modeData = getCurrentModeData();
  let tries = 0;

  while (tries < 30) {
    const variation = getRandomItem(ALL_VARIATIONS);
    let q = null;

    if (variation === QUESTION_VARIATIONS.TEKS) {
      q = generateVariationTeks(modeData);
    } else if (variation === QUESTION_VARIATIONS.GAMBAR_KE_PROVINSI) {
      q = generateVariationGambarKeProvinsi(modeData);
    } else if (variation === QUESTION_VARIATIONS.GAMBAR_KE_GAMBAR) {
      q = generateVariationGambarKeGambar(modeData);
    }

    if (q && q.options && q.options.length === 3) {
      return q;
    }
    tries++;
  }

  return generateVariationTeks(modeData);
}

// =======================
//  TIMER & STYLE OPSI
// =======================

function getBaseOptionClass(isImage) {
  if (isImage) {
    // Variasi 3: kartu gambar
    return [
      "option-btn w-full aspect-square rounded-[2rem]",
      "border-[5px] border-[#0060d0]",
      "bg-[#e1f7ff] shadow-[0_6px_0_#004a9d]",
      "overflow-hidden flex items-center justify-center",
      "transition-transform duration-100"
    ].join(" ");
  }

  // Variasi 1 & 2: tombol teks
  return [
    "option-btn w-full py-3 rounded-[2rem]",
    "border-[5px] border-[#0060d0]",
    "bg-[#cfefff] shadow-[0_6px_0_#004a9d]",
    "text-base sm:text-lg font-semibold",
    "hover:bg-[#0057c2] hover:text-white hover:shadow-[0_6px_0_#003a82]",
    "transition-transform duration-100"
  ].join(" ");
}

function resetOptionsStyle() {
  const baseTextClass = getBaseOptionClass(false);

  optionButtons.forEach((btn) => {
    btn.className = baseTextClass;
    btn.disabled = false;
    btn.dataset.optionId = "";
    btn.innerHTML = "";
  });

  if (optionsContainer) {
    optionsContainer.className = "flex flex-col gap-4";
  }

  if (mediaCol && mediaCard) {
    mediaCol.classList.add("hidden");
    mediaCol.classList.remove("flex");
    mediaCard.innerHTML = "";
  }
}


function updateTimerLabel() {
  timerEl.textContent = `00:${String(timeLeft).padStart(2, "0")}`;
}

function startTimer() {
  if (timerId) clearInterval(timerId);
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

function highlightAnswers(selectedOptionId) {
  optionButtons.forEach((btn) => {
    const optId = btn.dataset.optionId;

    // hapus status lama
    btn.classList.remove("correct", "wrong");

    if (!optId) return;

    if (optId === currentQuestion.correctOptionId) {
      // jawaban benar
      btn.classList.add("correct");
    } else if (selectedOptionId && optId === selectedOptionId) {
      // jawaban salah yang diklik
      btn.classList.add("wrong");
    }
  });
}


// =======================
//  RENDER SOAL KE UI
// =======================

function renderQuestionToUI(question) {
  if (!question) return;

  // reset tampilan tombol & media
  resetOptionsStyle();

  // ========== LAYOUT WRAPPER PILIHAN ==========
  if (optionsContainer) {
  if (question.variation === QUESTION_VARIATIONS.GAMBAR_KE_GAMBAR) {
    // Variasi 3: 3 gambar kotak sejajar, di-tengah
    optionsContainer.className =
      "grid grid-cols-3 gap-6 justify-items-center mt-4";
  } else {
    // Variasi 1 & 2: tombol vertikal
    optionsContainer.className = "flex flex-col gap-4";
  }
}

  // ========== KOLOM KIRI (GAMBAR) ==========
  if (mediaCol && mediaCard) {
    if (
      question.variation === QUESTION_VARIATIONS.GAMBAR_KE_PROVINSI &&
      question.imageSrc
    ) {
      // tampilkan kolom gambar
      mediaCol.classList.remove("hidden");
      mediaCol.classList.add("flex");

      mediaCard.innerHTML = `
  <img src="${question.imageSrc}"
       alt="${question.ikonValue || ""}"
       class="w-full h-full object-cover" />
`;
    } else {
      // variasi lain: kolom gambar disembunyikan
      mediaCol.classList.add("hidden");
      mediaCol.classList.remove("flex");
      mediaCard.innerHTML = "";
    }
  }

  // ========== TEKS PERTANYAAN (KANAN ATAS) ==========
  // SELALU teks saja — tidak ada <img> lagi di sini
  questionEl.textContent = question.prompt || "Pertanyaan";

  // ========== OPSI JAWABAN ==========
  optionButtons.forEach((btn, idx) => {
    const opt = question.options[idx];
    if (!opt) {
      btn.classList.add("hidden");
      btn.dataset.optionId = "";
      btn.innerHTML = "";
      return;
    }

    btn.classList.remove("hidden");
    btn.dataset.optionId = opt.id;

    if (question.variation === QUESTION_VARIATIONS.GAMBAR_KE_GAMBAR) {
  const baseImgClass = getBaseOptionClass(true);
  btn.className = baseImgClass;

  btn.innerHTML = `
    <img src="${opt.imgSrc}"
         alt="${opt.label || question.categoryName || ""}"
         class="w-full h-full object-cover" />
  `;
}
 else {
  // Variasi 1 & 2 → opsi = teks biasa
  btn.className = "option-btn text-base sm:text-lg font-semibold";
  btn.textContent = opt.label;
}

  });
}


// =======================
//  JADWAL NEXT QUESTION
// =======================

function scheduleNextQuestion(delayMs) {
  if (nextQuestionTimeoutId) {
    clearTimeout(nextQuestionTimeoutId);
    nextQuestionTimeoutId = null;
  }

  // Lagi ada popup badge → jangan bikin timer,
  // cukup catat bahwa setelah popup ditutup harus lanjut soal.
  if (isBadgeShowing) {
    pendingNextAfterBadge = true;
    return;
  }

  nextQuestionTimeoutId = setTimeout(() => {
    nextQuestionTimeoutId = null;
    loadNextQuestion();
  }, delayMs);
}


function hideAllPanels() {
  splashEasy.classList.add("hidden");
  splashNormal.classList.add("hidden");
  splashHard.classList.add("hidden");
  quizCard.classList.add("hidden");
  finalScreen.classList.add("hidden");
}

// =======================
//  SIKLUS MODE
// =======================

function showSplashForMode(modeIndex) {
  hideAllPanels();

  // saat splash: tombol kembali disembunyikan
  if (backBtn) backBtn.classList.add("hidden");

  titleBar.textContent = "JAWAB KUIS";

  const mode     = MODE_CONFIGS[modeIndex];
  const splashEl = document.getElementById(mode.splashId);
  splashEl.classList.remove("hidden");
  splashEl.classList.add("flex");

  // splash ±5 detik, bisa kamu ubah angkanya
  setTimeout(() => startMode(modeIndex), 5000);
}

function startMode(modeIndex) {
  currentModeIndex = modeIndex;
  questionIndex    = 0;
  isLocked         = false;

  hideAllPanels();

  const mode = MODE_CONFIGS[modeIndex];
  titleBar.textContent = mode.titleText;

  // 🔹 SET CLASS + BACKGROUND SESUAI MODE
  setModeOnBody(mode.id);

  quizCard.classList.remove("hidden");
  quizCard.classList.add("flex");

  // Munculkan tombol back saat kuis mulai
  backBtn.classList.remove("hidden");

  if (mode.id === "easy") {
    resetAllStats();
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

  if (nextQuestionTimeoutId) {
    clearTimeout(nextQuestionTimeoutId);
    nextQuestionTimeoutId = null;
  }

  if (questionIndex >= mode.totalQuestions) {
    handleModeFinished(mode.id);

    if (currentModeIndex < MODE_CONFIGS.length - 1) {
      showSplashForMode(currentModeIndex + 1);
    } else {
      showFinalScore();
    }
    return;
  }

  questionIndex += 1;

  const offset = MODE_GLOBAL_OFFSET[mode.id] || 0;
  currentGlobalLevel = offset + questionIndex;

  levelEl.textContent =
    `${mode.name} • Level ${questionIndex} / ${mode.totalQuestions}`;

  currentQuestion = generateQuestionForCurrentMode();

  renderQuestionToUI(currentQuestion);

  isLocked          = false;
  timeLeft          = mode.timePerQuestion || 15;
  questionStartTime = Date.now();
  startTimer();
}

function showFinalScore() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }

  // Sembunyikan semua panel dulu (splash & kartu kuis)
  hideAllPanels();

  // Bersihin mode & background gambar
  if (bodyEl) {
    bodyEl.classList.remove("mode-easy", "mode-normal", "mode-hard");
    bodyEl.style.backgroundImage = "none";
    bodyEl.style.backgroundColor = "#ffffff";
  }

  titleBar.textContent = "Kuis Selesai!";

  // Tampilkan skor dengan format 3 digit (005, 050, 123, dst)
  if (finalScoreEl) {
    const displayScore = String(score).padStart(3, "0");
    finalScoreEl.textContent = displayScore;
  }

  if (finalScreen) {
    finalScreen.classList.remove("hidden");
    finalScreen.classList.add("flex");
  }

  if (backBtn) {
    backBtn.classList.add("hidden"); // back arrow disembunyiin di final screen
  }

  console.log("📌 STATISTIK AKHIR:", {
    modeStats,
    earnedBadges,
    totalScore: score,
  });
}



// =======================
//  TIMEOUT
// =======================

function handleTimeout() {
  if (isLocked) return;
  isLocked = true;

  const mode = MODE_CONFIGS[currentModeIndex];
  const elapsed = mode.timePerQuestion || 15;
  questionStartTime = null;

  updateStatsAfterAnswer(mode.id, false, elapsed);
  checkScoreBadges(score);
  checkLevelBadges(currentGlobalLevel);

  highlightAnswers(null);

  // urusan popup di-handle di dalam scheduleNextQuestion
  scheduleNextQuestion(NEXT_DELAY_MS);
}

// =======================
//  EVENT JAWABAN
// =======================

optionButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (isLocked) return;
    isLocked = true;

    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }

    const mode = MODE_CONFIGS[currentModeIndex];
    const now  = Date.now();
    const elapsed = questionStartTime
      ? (now - questionStartTime) / 1000
      : mode.timePerQuestion || 15;

    questionStartTime = null;

    const selectedOptionId = btn.dataset.optionId;
    const isCorrect = selectedOptionId === currentQuestion.correctOptionId;

    if (isCorrect) {
      score += mode.scoreCorrect;
    } else {
      score = Math.max(0, score + mode.scoreWrong);
    }
    scoreEl.textContent = score;

    updateStatsAfterAnswer(mode.id, isCorrect, elapsed);
    checkScoreBadges(score);
    checkLevelBadges(currentGlobalLevel);

        highlightAnswers(selectedOptionId);

    // ⬇️ kalau barusan dapet badge (popup muncul), jangan langsung next
    if (isBadgeShowing) {
      pendingNextAfterBadge = true;   // nanti habis popup ditutup → lanjut soal
    } else {
      scheduleNextQuestion(700);
    }
  });
});


// =======================
//  TOMBOL KEMBALI
// =======================

backBtn.addEventListener("click", () => {
  // Kalau sudah di final screen → langsung balik ke HalPenyambutanReal
  if (!finalScreen.classList.contains("hidden")) {
    window.location.href = "HalPenyambutanReal.html";
    return;
  }

  // Lagi di dalam kuis → munculin popup konfirmasi keluar
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
  if (!isLocked && quizCard.classList.contains("flex")) {
    startTimer();
  }
});

// =======================
//  TOMBOL FINAL-SCREEN
// =======================

// Tombol "Keluar" di final screen
if (btnFinalExit) {
  btnFinalExit.addEventListener("click", () => {
    window.location.href = "HalPenyambutanReal.html";
  });
}

// Tombol "Main lagi" di final screen
if (btnFinalReplay) {
  btnFinalReplay.addEventListener("click", () => {
    // Reset nilai & statistik
    resetAllStats();
    score = 0;
    scoreEl.textContent = 0;
    currentModeIndex   = 0;
    questionIndex      = 0;
    currentGlobalLevel = 0;

    // Sembunyikan final screen
    if (finalScreen) {
      finalScreen.classList.add("hidden");
    }

    // Kembalikan background default (nanti diubah lagi oleh mode mudah)
    if (bodyEl) {
      bodyEl.style.backgroundImage = "none";
      bodyEl.style.backgroundColor = "#ffffff";
      bodyEl.classList.remove("mode-easy", "mode-normal", "mode-hard");
    }

    // Mulai lagi dari splash Mode Mudah
    showSplashForMode(0);
  });
}

// =======================
//  MODE CLASS DI BODY
// =======================

function setModeOnBody(modeId) {
  if (!bodyEl) return;

  // hapus kelas lama
  bodyEl.classList.remove("mode-easy", "mode-normal", "mode-hard");

  if (modeId) {
    // tambah kelas sesuai mode (dipakai CSS buat warna tombol dsb)
    bodyEl.classList.add(`mode-${modeId}`);
  }

  // ganti background gambar sesuai mode
  setBackgroundForMode(modeId);
}

// =======================
//  START
// =======================

// Script dipanggil di akhir <body>, jadi DOM sudah siap
// Mulai dari Mode Mudah (0). Nanti otomatis lanjut ke Normal → Sulit → Final screen.
showSplashForMode(0);


