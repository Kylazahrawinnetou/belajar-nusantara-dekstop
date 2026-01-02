// HalMainKuis.js (FULL - FIX PATH Live Server + BADGE SOUND + FALLBACK + LOOP)
// ============================================================================

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
  easy: ["Sumatera", "Jawa"],
  normal: ["Kalimantan", "Sulawesi"],
  hard: ["Papua", "Maluku", "Nusa Tenggara", "Bali"],
};

// Offset level global (1–45)
const MODE_GLOBAL_OFFSET = {
  easy: 0, // 1–11
  normal: 11, // 12–26
  hard: 26, // 27–45
};

const NEXT_DELAY_MS = 1200;

// =======================
//  ASSET PATH HELPER (ANTI 404 di Live Server)
// =======================
// Folder tempat HalMainKuis.html berada (base URL).
const HTML_DIR = new URL("./", window.location.href);

// Build URL asset relatif dari folder HTML.
// Contoh: asset("src/assets/...") => http://127.0.0.1:5501/src/assets/...
function asset(p) {
  return new URL(String(p || "").replace(/^\/+/, ""), HTML_DIR).toString();
}

// =======================
//  IMG FALLBACK (anti 404 / beda casing nama file di hosting Linux)
//  - Tidak mengubah alur quiz
//  - Hanya mempengaruhi pemuatan gambar (src) saat render
// =======================

function _fixCommonCasingInFilename(str) {
  // Fokus ke pola yang sering bikin 404 karena beda huruf besar/kecil di NAMA FILE.
  // Aman: kalau sudah benar, hasilnya sama.
  return String(str)
    .replace(/Pakaianadat/g, "PakaianAdat")
    .replace(/Rumahadat/g, "RumahAdat")
    .replace(/pakaianadat/g, "PakaianAdat")
    .replace(/rumahadat/g, "RumahAdat");
}

function setImgWithFallback(imgEl, url, placeholderUrl) {
  if (!imgEl) return;

  const original = String(url || "");
  const placeholder = String(placeholderUrl || "");

  if (!original) {
    imgEl.src = placeholder || "";
    return;
  }

  const fixed = _fixCommonCasingInFilename(original);
  const reversed = fixed
    .replace(/PakaianAdat/g, "Pakaianadat")
    .replace(/RumahAdat/g, "Rumahadat");

  const candidates = [...new Set([original, fixed, reversed])];

  // Jangan set src dulu -> cek dulu mana yang ada
  (async () => {
    for (const u of candidates) {
      try {
        const res = await fetch(u, { method: "GET", cache: "no-store" });
        if (res.ok) {
          imgEl.src = u;
          return;
        }
      } catch (e) {
        // ignore
      }
    }
    imgEl.src = placeholder || original;
  })();
}

// =======================
//  KONFIGURASI VARIASI SOAL & GAMBAR
// =======================

const PLACEHOLDER_IMG = asset("src/assets/LogoIcons/placeholder.png");

const QUESTION_VARIATIONS = {
  TEKS: "variasi-1", // Variasi 1: teks
  GAMBAR_KE_PROVINSI: "variasi-2", // Variasi 2: gambar di soal → pilih teks provinsi
  GAMBAR_KE_GAMBAR: "variasi-3", // Variasi 3: provinsi + kategori → pilih gambar
};

const ALL_VARIATIONS = [
  QUESTION_VARIATIONS.TEKS,
  QUESTION_VARIATIONS.GAMBAR_KE_PROVINSI,
  QUESTION_VARIATIONS.GAMBAR_KE_GAMBAR,
];

// Nama kategori (untuk kalimat)
const CATEGORY_META = {
  hewanIkonik: "hewan ikonik",
  pakaianAdat: "pakaian adat",
  rumahAdat: "rumah adat",
  tarianDaerah: "tarian daerah",
  senjataDaerah: "senjata daerah",
  alatMusik: "alat musik daerah",
  makananKhas: "makanan khas",
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
  { streak: 5, id: "badge_streak_5_kepodang" },
  { streak: 10, id: "badge_streak_10_gajah" },
];

const PERFECT_BADGES = {
  easy: "badge_perfect_easy_jalak",
  normal: "badge_perfect_normal_elang",
  hard: "badge_perfect_hard_komodo",
};

const SPEED_BADGE_ID = "badge_speed_normal_tarsius";
const ACCURACY_BADGE_ID = "badge_accuracy_normal_kasuari";

const SCORE_BADGES = [
  { threshold: 100, id: "badge_score_100_belida" },
  { threshold: 150, id: "badge_score_150_kuau" },
  { threshold: 200, id: "badge_score_200_cendrawasih" },
];

const BADGE_META = {
  badge_level_11_serindit: {
    label: "Burung Serindit",
    detail: "Mencapai level 11 – Burung Serindit.",
    icon: asset("src/assets/LogoIcons/badge_serindit.png"),
  },
  badge_level_26_pesut: {
    label: "Pesut Mahakam",
    detail: "Mencapai level 26 – Pesut Mahakam.",
    icon: asset("src/assets/LogoIcons/badge_pesut.png"),
  },
  badge_level_45_harimau: {
    label: "Harimau Sumatera",
    detail: "Menyelesaikan semua 45 level kuis – Harimau Sumatera.",
    icon: asset("src/assets/LogoIcons/badge_harimau.png"),
  },

  badge_streak_5_kepodang: {
    label: "Burung Kepodang",
    detail: "Menjawab benar 5 soal beruntun tanpa salah.",
    icon: asset("src/assets/LogoIcons/badge_kepodang.png"),
  },
  badge_streak_10_gajah: {
    label: "Gajah Sumatera",
    detail: "Menjawab benar 10 soal beruntun tanpa salah.",
    icon: asset("src/assets/LogoIcons/badge_gajah.png"),
  },

  badge_perfect_easy_jalak: {
    label: "Burung Jalak Bali",
    detail: "Mode Mudah: menyelesaikan semua soal tanpa kesalahan.",
    icon: asset("src/assets/LogoIcons/badge_jalak.png"),
  },
  badge_perfect_normal_elang: {
    label: "Burung Elang Bondol",
    detail: "Mode Normal: menyelesaikan semua soal tanpa kesalahan.",
    icon: asset("src/assets/LogoIcons/badge_elang.png"),
  },
  badge_perfect_hard_komodo: {
    label: "Komodo",
    detail: "Mode Sulit: menyelesaikan semua soal tanpa kesalahan.",
    icon: asset("src/assets/LogoIcons/badge_komodo.png"),
  },

  badge_speed_normal_tarsius: {
    label: "Tarsius",
    detail: "Mode Normal: waktu rata-rata < 15 detik per soal.",
    icon: asset("src/assets/LogoIcons/badge_tarsius.png"),
  },

  badge_accuracy_normal_kasuari: {
    label: "Burung Kasuari",
    detail: "Mode Normal: akurasi jawaban ≥ 80%.",
    icon: asset("src/assets/LogoIcons/badge_kasuari.png"),
  },

  badge_score_100_belida: {
    label: "Ikan Belida",
    detail: "Mencapai total poin 100.",
    icon: asset("src/assets/LogoIcons/badge_belida.png"),
  },
  badge_score_150_kuau: {
    label: "Burung Kuau Raja",
    detail: "Mencapai total poin 150.",
    icon: asset("src/assets/LogoIcons/badge_kuau.png"),
  },
  badge_score_200_cendrawasih: {
    label: "Burung Cendrawasih",
    detail: "Mencapai total poin 200.",
    icon: asset("src/assets/LogoIcons/badge_cendrawasih.png"),
  },
};

const BADGE_RARITY = {
  badge_level_11_serindit: 1,
  badge_score_100_belida: 1,

  badge_level_26_pesut: 2,
  badge_score_150_kuau: 2,

  badge_level_45_harimau: 3,

  badge_streak_5_kepodang: 4,
  badge_speed_normal_tarsius: 4,

  badge_streak_10_gajah: 5,
  badge_perfect_easy_jalak: 5,
  badge_perfect_normal_elang: 5,
  badge_accuracy_normal_kasuari: 5,

  badge_perfect_hard_komodo: 6,
  badge_score_200_cendrawasih: 6,
};

// =======================
//  BADGE SOUND (FIX PATH + FALLBACK + LOOP)
// =======================

const BADGE_SOUND_FOLDER = asset("src/assets/Sounds/badges/");

// Kamu punya file ini:
// eagle.mp3, elephant.mp3, fish.mp3, komodo.mp3, pesut.mp3, tiger.mp3
// Badge yang belum ada mp3 → pinjam dulu biar tetap bunyi.
const BADGE_SOUND_MAP = {
  badge_level_11_serindit: `${BADGE_SOUND_FOLDER}burungkecil.mp3`, // sementara
  badge_level_26_pesut: `${BADGE_SOUND_FOLDER}pesut.mp3`,
  badge_level_45_harimau: `${BADGE_SOUND_FOLDER}harimau.mp3`, // sementara

  badge_streak_5_kepodang: `${BADGE_SOUND_FOLDER}burungkecil.mp3`, // sementara
  badge_streak_10_gajah: `${BADGE_SOUND_FOLDER}gajah.mp3`,

  badge_perfect_easy_jalak: `${BADGE_SOUND_FOLDER}jalak.mp3`, // sementara
  badge_perfect_normal_elang: `${BADGE_SOUND_FOLDER}elang.mp3`,
  badge_perfect_hard_komodo: `${BADGE_SOUND_FOLDER}komodo.mp3`,

  badge_speed_normal_tarsius: `${BADGE_SOUND_FOLDER}tarsius.mp3`, // sementara
  badge_accuracy_normal_kasuari: `${BADGE_SOUND_FOLDER}kasuari.mp3`, // sementara

  badge_score_100_belida: `${BADGE_SOUND_FOLDER}ikan.mp3`, // sementara
  badge_score_150_kuau: `${BADGE_SOUND_FOLDER}kuau.mp3`, // sementara
  badge_score_200_cendrawasih: `${BADGE_SOUND_FOLDER}cendrawasih.mp3`, // sementara
};

const BADGE_SOUND_FALLBACK = `${BADGE_SOUND_FOLDER}cadanganbadges.mp3`;

let badgeAudio = null;
let audioUnlocked = false;

function unlockAudioOnce() {
  if (audioUnlocked) return;
  audioUnlocked = true;

  // warm-up audio: biar browser izinkan play berikutnya (setelah gesture user)
  const a = new Audio(BADGE_SOUND_FALLBACK);
  a.volume = 0.001;

  a.play()
    .then(() => {
      a.pause();
      a.currentTime = 0;
    })
    .catch(() => {
      // kalau masih keblok, nanti kebuka setelah gesture berikutnya
    });
}

function stopBadgeSound() {
  if (!badgeAudio) return;
  try {
    badgeAudio.pause();
    badgeAudio.currentTime = 0;
  } catch (e) {}
  badgeAudio = null;
}

function playBadgeSound(badgeId) {
  stopBadgeSound();

  const src = BADGE_SOUND_MAP[badgeId] || BADGE_SOUND_FALLBACK;
  console.log("[badge-sound] trying:", badgeId, "->", src);

  badgeAudio = new Audio(src);
  badgeAudio.loop = true;
  badgeAudio.volume = 1;

  badgeAudio.onerror = () => {
    console.warn("[badge-sound] error load:", src, "fallback:", BADGE_SOUND_FALLBACK);
    try {
      badgeAudio.src = BADGE_SOUND_FALLBACK;
      badgeAudio.loop = true;
      badgeAudio.play().catch(() => {});
    } catch (e) {}
  };

  badgeAudio.play().catch((err) => {
    console.warn("[badge-sound] play blocked / failed:", err);
  });
}

// Tes dari console
window.__TEST_BADGE_SOUND__ = (badgeId) => {
  unlockAudioOnce();
  playBadgeSound(badgeId);
};

// Buka akses audio dari interaksi pertama user
document.addEventListener("pointerdown", unlockAudioOnce, { once: true });
document.addEventListener("keydown", unlockAudioOnce, { once: true });

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

const titleBar = document.getElementById("title-bar");
const bodyEl = document.body;
const splashEasy = document.getElementById("splash-easy");
const splashNormal = document.getElementById("splash-normal");
const splashHard = document.getElementById("splash-hard");
const quizCard = document.getElementById("quiz-card");
const finalScreen = document.getElementById("final-screen");
const finalScoreEl = document.getElementById("final-score");

const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");
const levelEl = document.getElementById("level-text");
const questionEl = document.getElementById("question-text");

const optionButtons = Array.from(document.querySelectorAll(".option-btn"));
const optionsContainer = document.getElementById("options-wrapper");

const mediaCol = document.getElementById("media-col");
const mediaCard = document.getElementById("media-card");

const backBtn = document.getElementById("backBtn");
const confirmExit = document.getElementById("confirm-exit");
const btnExitYes = document.getElementById("btn-exit-yes");
const btnExitNo = document.getElementById("btn-exit-no");

const btnFinalExit = document.getElementById("btn-final-exit");
const btnFinalReplay = document.getElementById("btn-final-replay");

const badgePopupOverlay = document.getElementById("badge-popup-overlay");
const badgePopupIcon = document.getElementById("badge-popup-icon");
const badgePopupName = document.getElementById("badge-popup-name");
const badgePopupDesc = document.getElementById("badge-popup-desc");
const badgeRarityGlow = document.getElementById("badge-rarity-glow");

// =======================
//  STATE
// =======================

let currentModeIndex = 0;
let questionIndex = 0;
let currentQuestion = null;

let score = 0;
let timeLeft = 0;
let timerId = null;
let isLocked = false;

let currentStreak = 0;
let currentGlobalLevel = 0;
let questionStartTime = null;

let modeStats = null;
let earnedBadges = getEarnedBadgesFromStorage();

let badgeQueue = [];
let isBadgeShowing = false;
let pendingNextAfterBadge = false;
let pendingModeTransitionAfterBadges = null;
let nextQuestionTimeoutId = null;

// =======================
//  BACK BUTTON VISIBILITY helper
// =======================

function hideBackBtnForBadge() {
  if (!backBtn) return;
  backBtn.classList.add("opacity-0", "pointer-events-none");
}

function restoreBackBtnAfterBadge() {
  if (!backBtn) return;
  backBtn.classList.remove("opacity-0", "pointer-events-none");
}

// =======================
//  POPUP BADGE
// =======================

function showBadgePopup(badgeId) {
  console.log("[badge] showBadgePopup:", badgeId);

  // mainkan sound saat popup muncul
  unlockAudioOnce();
  playBadgeSound(badgeId);

  const meta = BADGE_META[badgeId] || {};
  const label = meta.label || "Badge";
  const detail = meta.detail || "";
  const icon = meta.icon || "";

  isBadgeShowing = true;

  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  if (nextQuestionTimeoutId) {
    clearTimeout(nextQuestionTimeoutId);
    nextQuestionTimeoutId = null;
  }

  hideBackBtnForBadge();

  if (badgePopupIcon) {
    if (icon) {
      badgePopupIcon.src = icon;
      badgePopupIcon.classList.remove("hidden");
    } else {
      badgePopupIcon.removeAttribute("src");
      badgePopupIcon.classList.add("hidden");
    }
  }

  if (badgePopupName) badgePopupName.textContent = label;
  if (badgePopupDesc) badgePopupDesc.textContent = detail;

  if (badgeRarityGlow) {
    badgeRarityGlow.classList.remove(
      "rarity-glow-base",
      "rarity-tier-1",
      "rarity-tier-2",
      "rarity-tier-3",
      "rarity-tier-4",
      "rarity-tier-5",
      "rarity-tier-6",
      "hidden"
    );

    const rarity = BADGE_RARITY[badgeId];
    if (rarity) badgeRarityGlow.classList.add("rarity-glow-base", `rarity-tier-${rarity}`);
    else badgeRarityGlow.classList.add("hidden");
  }

  if (!badgePopupOverlay) return;

  badgePopupOverlay.classList.remove("hidden");
  badgePopupOverlay.style.display = "flex";
  badgePopupOverlay.style.opacity = "1";
  badgePopupOverlay.style.visibility = "visible";
  badgePopupOverlay.style.pointerEvents = "auto";
}

function showNextBadgeInQueue() {
  if (badgeQueue.length === 0) return;
  const nextId = badgeQueue.shift();
  showBadgePopup(nextId);
}

if (badgePopupOverlay) {
  badgePopupOverlay.addEventListener("click", () => {
    stopBadgeSound();

    badgePopupOverlay.classList.add("hidden");
    badgePopupOverlay.style.display = "none";
    badgePopupOverlay.style.opacity = "0";
    badgePopupOverlay.style.visibility = "hidden";
    badgePopupOverlay.style.pointerEvents = "none";

    isBadgeShowing = false;
    restoreBackBtnAfterBadge();

    if (badgeQueue.length > 0) {
      showNextBadgeInQueue();
      return;
    }

    if (pendingModeTransitionAfterBadges) {
      const action = pendingModeTransitionAfterBadges;
      pendingModeTransitionAfterBadges = null;

      if (action === "next-mode") showSplashForMode(currentModeIndex + 1);
      else if (action === "final") showFinalScore();
      return;
    }

    if (pendingNextAfterBadge) {
      pendingNextAfterBadge = false;
      loadNextQuestion();
    }
  });
}

// =======================
//  RESET STATISTIK
// =======================

function resetAllStats() {
  currentStreak = 0;
  currentGlobalLevel = 0;
  questionStartTime = null;

  modeStats = {
    easy: { correct: 0, wrong: 0, answered: 0, totalTime: 0 },
    normal: { correct: 0, wrong: 0, answered: 0, totalTime: 0 },
    hard: { correct: 0, wrong: 0, answered: 0, totalTime: 0 },
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

    badgeQueue.push(id);

    if (!isBadgeShowing) showNextBadgeInQueue();
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
  const stats = modeStats[modeId];
  const modeConfig = MODE_CONFIGS.find((m) => m.id === modeId);

  if (modeConfig && stats.answered === modeConfig.totalQuestions && stats.wrong === 0) {
    awardBadge(PERFECT_BADGES[modeId]);
  }

  if (modeId === "normal") {
    const avgTime = stats.answered > 0 ? stats.totalTime / stats.answered : 0;
    const accuracy = stats.answered > 0 ? (stats.correct / stats.answered) * 100 : 0;

    if (avgTime > 0 && avgTime < 15) awardBadge(SPEED_BADGE_ID);
    if (accuracy >= 80) awardBadge(ACCURACY_BADGE_ID);

    console.log("📊 Statistik Mode Normal:", {
      answered: stats.answered,
      correct: stats.correct,
      wrong: stats.wrong,
      avgTime,
      accuracy,
    });
  }
}

function updateStatsAfterAnswer(modeId, isCorrect, elapsedSeconds) {
  if (!modeStats || !modeStats[modeId]) return;
  const stats = modeStats[modeId];
  const modeConfig = MODE_CONFIGS.find((m) => m.id === modeId);
  const fallback = modeConfig ? modeConfig.timePerQuestion : 15;

  const elapsed = typeof elapsedSeconds === "number" && elapsedSeconds > 0 ? elapsedSeconds : fallback;

  stats.answered += 1;
  stats.totalTime += elapsed;

  if (isCorrect) {
    stats.correct += 1;
    currentStreak += 1;
    checkStreakBadges(currentStreak);
  } else {
    stats.wrong += 1;
    currentStreak = 0;
  }
}

// =======================
//  HELPER MODE & RANDOM
// =======================

function setBackgroundForMode(modeId) {
  if (!bodyEl) return;

  if (modeId === "easy") {
    bodyEl.style.backgroundImage = `url('${asset("src/assets/LogoIcons/bgModeMudah.png")}')`;
  } else if (modeId === "normal") {
    bodyEl.style.backgroundImage = `url('${asset("src/assets/LogoIcons/bgModeNormal.png")}')`;
  } else if (modeId === "hard") {
    bodyEl.style.backgroundImage = `url('${asset("src/assets/LogoIcons/bgModeSulit.png")}')`;
  }

  bodyEl.style.backgroundSize = "cover";
  bodyEl.style.backgroundPosition = "center";
  bodyEl.style.backgroundRepeat = "no-repeat";
  bodyEl.style.backgroundColor = "";
}

function getCurrentModeData() {
  const mode = MODE_CONFIGS[currentModeIndex];
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

function sanitizeForFilename(text) {
  if (!text && text !== 0) return "";
  return String(text)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "")
    .replace(/[^0-9A-Za-z]/g, "");
}

const CATEGORY_IMAGE_FOLDER = {
  hewanIkonik: "GambarASLI-HewanIkonik",
  pakaianAdat: "GambarASLI-PakaianAdat",
  rumahAdat: "GambarASLI-RumahAdat",
  tarianDaerah: "GambarASLI-TarianDaerah",
  senjataDaerah: "GambarASLI-SenjataDaerah",
  alatMusik: "GambarASLI-AlatMusik",
  makananKhas: "GambarASLI-MakananKhas",
};

function getImageSrcForIkon(item, fieldKey) {
  try {
    if (!item || !fieldKey) return PLACEHOLDER_IMG;
    const folder = CATEGORY_IMAGE_FOLDER[fieldKey];
    if (!folder) return PLACEHOLDER_IMG;

    const prov = sanitizeForFilename(item.provinsi || "");
    const val = sanitizeForFilename(item[fieldKey] || "");
    if (!prov || !val) return PLACEHOLDER_IMG;

    return asset(`src/assets/${folder}/ASLI${prov}-${val}.png`);
  } catch (err) {
    console.error("getImageSrcForIkon error", err);
    return PLACEHOLDER_IMG;
  }
}

function getAvailableCategoriesForItem(item) {
  const keys = Object.keys(CATEGORY_META);
  return keys.filter((key) => item && item[key]);
}

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

function uniqueArray(arr) {
  return [...new Set(arr)];
}

// =======================
//  GENERATOR VARIASI SOAL
// =======================

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
    wrongPool = distractItems.map((p) => p[fieldKey]).filter((val) => val && val !== ikonValue);
  } else {
    prompt = `${ikonValue} merupakan ${categoryName} dari provinsi?`;
    correctText = baseItem.provinsi;
    wrongPool = distractItems.map((p) => p.provinsi).filter((val) => val && val !== baseItem.provinsi);
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

function generateVariationGambarKeProvinsi(modeData) {
  const combo = pickBaseItemAndCategory(modeData);
  if (!combo) return null;

  const { baseItem, fieldKey, categoryName, candidates } = combo;

  const distractItems = candidates.filter((p) => p.id !== baseItem.id);
  if (distractItems.length < 2) return null;

  const prompt = `${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} ini berasal dari provinsi?`;

  const correctProv = baseItem.provinsi;
  let wrongProvPool = distractItems.map((p) => p.provinsi).filter((val) => val && val !== correctProv);

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
    ikonValue: baseItem[fieldKey],
    imageSrc,
  };
}

function generateVariationGambarKeGambar(modeData) {
  const combo = pickBaseItemAndCategory(modeData);
  if (!combo) return null;

  const { baseItem, fieldKey, categoryName, ikonValue, candidates } = combo;

  let distractItems = candidates.filter((p) => p.id !== baseItem.id && p[fieldKey] !== ikonValue);
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

    if (variation === QUESTION_VARIATIONS.TEKS) q = generateVariationTeks(modeData);
    else if (variation === QUESTION_VARIATIONS.GAMBAR_KE_PROVINSI) q = generateVariationGambarKeProvinsi(modeData);
    else if (variation === QUESTION_VARIATIONS.GAMBAR_KE_GAMBAR) q = generateVariationGambarKeGambar(modeData);

    if (q && q.options && q.options.length === 3) return q;
    tries++;
  }

  return generateVariationTeks(modeData);
}

// =======================
//  TIMER & STYLE OPSI
// =======================

function getBaseOptionClass(isImage) {
  if (isImage) {
    return [
      "option-btn option-img w-full aspect-square rounded-[2rem]",
      "border-[5px] border-[#0060d0]",
      "bg-[#e1f7ff] shadow-[0_6px_0_#004a9d]",
      "overflow-hidden flex items-center justify-center",
      "transition-transform duration-100",
    ].join(" ");
  }

  return [
    "option-btn w-full py-3 rounded-[2rem]",
    "border-[5px] border-[#0060d0]",
    "bg-[#cfefff] shadow-[0_6px_0_#004a9d]",
    "text-base sm:text-lg font-semibold",
    "hover:bg-[#0057c2] hover:text-white hover:shadow-[0_6px_0_#003a82]",
    "transition-transform duration-100",
  ].join(" ");
}

function resetOptionsStyle() {
  const baseTextClass = getBaseOptionClass(false);

  optionButtons.forEach((btn) => {
    btn.className = baseTextClass;
    btn.disabled = false;
    btn.dataset.optionId = "";
    btn.innerHTML = "";
    btn.classList.remove("hidden");
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
  if (!timerEl) return;
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
    btn.classList.remove("correct", "wrong");
    if (!optId) return;

    if (optId === currentQuestion.correctOptionId) btn.classList.add("correct");
    else if (selectedOptionId && optId === selectedOptionId) btn.classList.add("wrong");
  });
}

// =======================
//  RENDER SOAL KE UI
// =======================

function renderQuestionToUI(question) {
  if (!question) return;

  resetOptionsStyle();

  if (optionsContainer) {
    if (question.variation === QUESTION_VARIATIONS.GAMBAR_KE_GAMBAR) {
      optionsContainer.className = "grid grid-cols-3 gap-6 justify-items-center mt-4";
    } else {
      optionsContainer.className = "flex flex-col gap-4";
    }
  }

  if (mediaCol && mediaCard) {
  if (question.variation === QUESTION_VARIATIONS.GAMBAR_KE_PROVINSI && question.imageSrc) {
    mediaCol.classList.remove("hidden");
    mediaCol.classList.add("flex");

    mediaCard.innerHTML = "";

    const qImg = document.createElement("img");
qImg.alt = question.ikonValue || "";
qImg.className = "w-full h-full object-cover";
mediaCard.appendChild(qImg);
setImgWithFallback(qImg, question.imageSrc, PLACEHOLDER_IMG);
  } else {
    mediaCol.classList.add("hidden");
    mediaCol.classList.remove("flex");
    mediaCard.innerHTML = "";
  }
}


  if (questionEl) questionEl.textContent = question.prompt || "Pertanyaan";

  const baseTextClass = getBaseOptionClass(false);
  const baseImgClass = getBaseOptionClass(true);

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
      btn.className = baseImgClass;

      btn.innerHTML = "";

const oImg = document.createElement("img");
oImg.alt = opt.label || question.categoryName || "";
oImg.className = "w-full h-full object-cover";
btn.appendChild(oImg);
setImgWithFallback(oImg, opt.imgSrc || PLACEHOLDER_IMG, PLACEHOLDER_IMG);
    } else {
      btn.className = baseTextClass;
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

  nextQuestionTimeoutId = setTimeout(() => {
    nextQuestionTimeoutId = null;
    loadNextQuestion();
  }, delayMs);
}

function hideAllPanels() {
  if (splashEasy) splashEasy.classList.add("hidden");
  if (splashNormal) splashNormal.classList.add("hidden");
  if (splashHard) splashHard.classList.add("hidden");
  if (quizCard) quizCard.classList.add("hidden");
  if (finalScreen) finalScreen.classList.add("hidden");
}

// =======================
//  SIKLUS MODE
// =======================

function showSplashForMode(modeIndex) {
  hideAllPanels();

  if (backBtn) backBtn.classList.add("hidden");
  if (titleBar) titleBar.textContent = "JAWAB KUIS";

  const mode = MODE_CONFIGS[modeIndex];
  const splashEl = document.getElementById(mode.splashId);
  if (splashEl) {
    splashEl.classList.remove("hidden");
    splashEl.classList.add("flex");
  }

  setTimeout(() => startMode(modeIndex), 5000);
}

function startMode(modeIndex) {
  currentModeIndex = modeIndex;
  questionIndex = 0;
  isLocked = false;

  hideAllPanels();

  const mode = MODE_CONFIGS[modeIndex];
  if (titleBar) titleBar.textContent = mode.titleText;

  setModeOnBody(mode.id);

 // Musik sudah di-handle saat splash muncul (di HalMainKuis.html)

  if (quizCard) {
    quizCard.classList.remove("hidden");
    quizCard.classList.add("flex");
  }

  if (backBtn) {
    backBtn.classList.remove("hidden");
    backBtn.classList.remove("opacity-0", "pointer-events-none");
  }

  if (mode.id === "easy") {
    resetAllStats();
    score = 0;
    if (scoreEl) scoreEl.textContent = score;
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

  pendingNextAfterBadge = false;

  if (questionIndex >= mode.totalQuestions) {
    handleModeFinished(mode.id);

    pendingModeTransitionAfterBadges =
      currentModeIndex < MODE_CONFIGS.length - 1 ? "next-mode" : "final";

    if (!isBadgeShowing && badgeQueue.length === 0) {
      const action = pendingModeTransitionAfterBadges;
      pendingModeTransitionAfterBadges = null;

      if (action === "next-mode") showSplashForMode(currentModeIndex + 1);
      else if (action === "final") showFinalScore();
    }
    return;
  }

  questionIndex += 1;

  const offset = MODE_GLOBAL_OFFSET[mode.id] || 0;
  currentGlobalLevel = offset + questionIndex;

  if (levelEl) {
    levelEl.textContent = `${mode.name} • Level ${questionIndex} / ${mode.totalQuestions}`;
  }

  currentQuestion = generateQuestionForCurrentMode();
  renderQuestionToUI(currentQuestion);

  isLocked = false;
  timeLeft = mode.timePerQuestion || 15;
  questionStartTime = Date.now();
  startTimer();
}

function showFinalScore() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }

  hideAllPanels();

  if (backBtn) backBtn.classList.add("hidden");

  if (bodyEl) {
    bodyEl.classList.remove("mode-easy", "mode-normal", "mode-hard");
    bodyEl.style.backgroundImage = "none";
    bodyEl.style.backgroundColor = "#ffffff";
  }

  if (titleBar) titleBar.textContent = "Kuis Selesai!";

  if (finalScoreEl) {
    const displayScore = String(score).padStart(3, "0");
    finalScoreEl.textContent = displayScore;
  }

  if (finalScreen) {
    finalScreen.classList.remove("hidden");
    finalScreen.classList.add("flex");
  }

  console.log("📌 STATISTIK AKHIR:", { modeStats, earnedBadges, totalScore: score });
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

  if (isBadgeShowing || badgeQueue.length > 0) pendingNextAfterBadge = true;
  else scheduleNextQuestion(NEXT_DELAY_MS);
}

// =======================
//  EVENT JAWABAN
// =======================

optionButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // gesture user -> unlock audio
    unlockAudioOnce();

    if (isLocked) return;
    isLocked = true;

    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }

    const mode = MODE_CONFIGS[currentModeIndex];
    const now = Date.now();
    const elapsed = questionStartTime ? (now - questionStartTime) / 1000 : mode.timePerQuestion || 15;

    questionStartTime = null;

    const selectedOptionId = btn.dataset.optionId;
    const isCorrect = selectedOptionId === currentQuestion.correctOptionId;

    if (isCorrect) score += mode.scoreCorrect;
    else score = Math.max(0, score + mode.scoreWrong);

    if (scoreEl) scoreEl.textContent = score;

    updateStatsAfterAnswer(mode.id, isCorrect, elapsed);
    checkScoreBadges(score);
    checkLevelBadges(currentGlobalLevel);

    highlightAnswers(selectedOptionId);

    if (isBadgeShowing || badgeQueue.length > 0) pendingNextAfterBadge = true;
    else scheduleNextQuestion(700);
  });
});

// =======================
//  TOMBOL KEMBALI
// =======================

if (backBtn) {
  backBtn.addEventListener("click", () => {
    if (isBadgeShowing) return;

    if (finalScreen && !finalScreen.classList.contains("hidden")) {
      window.location.href = "HalPenyambutanReal.html";
      return;
    }

    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
    if (confirmExit) confirmExit.classList.remove("hidden");
  });
}

if (btnExitYes) {
  btnExitYes.addEventListener("click", () => {
    window.location.href = "HalPenyambutanReal.html";
  });
}

if (btnExitNo) {
  btnExitNo.addEventListener("click", () => {
    if (confirmExit) confirmExit.classList.add("hidden");
    if (!isLocked && quizCard && quizCard.classList.contains("flex")) startTimer();
  });
}

// =======================
//  TOMBOL FINAL-SCREEN
// =======================

if (btnFinalExit) {
  btnFinalExit.addEventListener("click", () => {
    window.location.href = "HalPenyambutanReal.html";
  });
}

if (btnFinalReplay) {
  btnFinalReplay.addEventListener("click", () => {
    resetAllStats();
    score = 0;
    if (scoreEl) scoreEl.textContent = 0;

    currentModeIndex = 0;
    questionIndex = 0;
    currentGlobalLevel = 0;

    if (finalScreen) finalScreen.classList.add("hidden");

    if (bodyEl) {
      bodyEl.style.backgroundImage = "none";
      bodyEl.style.backgroundColor = "#ffffff";
      bodyEl.classList.remove("mode-easy", "mode-normal", "mode-hard");
    }

    hintFixOptionPaddingIfNeeded();
    showSplashForMode(0);
  });
}

// =======================
//  MODE CLASS DI BODY
// =======================

function setModeOnBody(modeId) {
  if (!bodyEl) return;

  bodyEl.classList.remove("mode-easy", "mode-normal", "mode-hard");
  if (modeId) bodyEl.classList.add(`mode-${modeId}`);

  setBackgroundForMode(modeId);
}

// helper no-op (biar aman kalau dipanggil)
function hintFixOptionPaddingIfNeeded() {}

// =======================
//  START
// =======================

showSplashForMode(0);
