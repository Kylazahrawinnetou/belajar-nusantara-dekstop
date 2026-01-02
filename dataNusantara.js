// Mode Mudah   : pulau "Sumatera", "Jawa"
// Mode Normal  : pulau "Kalimantan", "Sulawesi"
// Mode Sulit   : pulau "Papua", "Maluku", "Nusa Tenggara", "Bali"

const PROVINSI_DATA = [
  {
    id: "aceh",
    provinsi: "Aceh",
    ibuKota: "Banda Aceh",
    pulau: "Sumatera",
    hewanIkonik: null,
    pakaianAdat: "Ulee Balang",
    rumahAdat: "Aceh",
    tarianDaerah: "Saman",
    senjataDaerah: "Rencong",
    alatMusik: "Canang",
    makananKhas: "Mie Aceh"
  },
  {
    id: "sumatera-utara",
    provinsi: "Sumatera Utara",
    ibuKota: "Medan",
    pulau: "Sumatera",
    hewanIkonik: "Burung Beo Nias",
    pakaianAdat: "Ulos Batak",
    rumahAdat: "Bolon",
    tarianDaerah: "Tor-tor",
    senjataDaerah: "Piso Surit",
    alatMusik: "Gordang Sambilan",
    makananKhas: "Bika Ambon"
  },
  {
    id: "sumatera-selatan",
    provinsi: "Sumatera Selatan",
    ibuKota: "Palembang",
    pulau: "Sumatera",
    hewanIkonik: "Ikan Belida",
    pakaianAdat: "Aesan Gede",
    rumahAdat: "Limas",
    tarianDaerah: "Gending Sriwijaya",
    senjataDaerah: "Tombak Trisula",
    alatMusik: "Gendang Melayu",
    makananKhas: "Pempek"
  },
  {
    id: "sumatera-barat",
    provinsi: "Sumatera Barat",
    ibuKota: "Padang",
    pulau: "Sumatera",
    hewanIkonik: "Burung Kuau Raja",
    pakaianAdat: "Bundo Kanduang",
    rumahAdat: "Gadang",
    tarianDaerah: "Piring",
    senjataDaerah: "Karih",
    alatMusik: "Saluang",
    makananKhas: "Rendang"
  },
  {
    id: "bengkulu",
    provinsi: "Bengkulu",
    ibuKota: "Bengkulu",
    pulau: "Sumatera",
    hewanIkonik: null,
    pakaianAdat: "Melayu Bengkulu",
    rumahAdat: "Bubungan Lima",
    tarianDaerah: "Andun",
    senjataDaerah: null,
    alatMusik: "Serunai Bengkulu",
    makananKhas: "Pendap"
  },
  {
    id: "riau",
    provinsi: "Riau",
    ibuKota: "Pekanbaru",
    pulau: "Sumatera",
    hewanIkonik: "Burung Serindit",
    pakaianAdat: "Teluk Belanga",
    rumahAdat: "Selaso Jatuh Kembar",
    tarianDaerah: "Zapin Melayu",
    senjataDaerah: "Pedang Jenawi",
    alatMusik: "Gambus",
    makananKhas: "Gulai Belacan"
  },
  {
    id: "kepulauan-riau",
    provinsi: "Kepulauan Riau",
    ibuKota: "Tanjung Pinang",
    pulau: "Sumatera",
    hewanIkonik: "Ikan Kakap Merah",
    pakaianAdat: "Teluk Belanga dan Kebaya Labuh",
    rumahAdat: "Belah Bubung",
    tarianDaerah: "Joget Dangkong",
    senjataDaerah: "Badik Tumbuk Lado",
    alatMusik: "Gendang Panjang",
    makananKhas: "Otak-otak"
  },
  {
    id: "jambi",
    provinsi: "Jambi",
    ibuKota: "Jambi",
    pulau: "Sumatera",
    hewanIkonik: "Harimau Sumatera",
    pakaianAdat: "Melayu Jambi",
    rumahAdat: "Kejang Lako",
    tarianDaerah: "Sekapur Sirih",
    senjataDaerah: "Keris Siginjai",
    alatMusik: "Serunai Jambi",
    makananKhas: "Gulai Ikan Patin"
  },
  {
    id: "lampung",
    provinsi: "Lampung",
    ibuKota: "Bandar Lampung",
    pulau: "Sumatera",
    hewanIkonik: "Gajah Sumatera",
    pakaianAdat: "Tulang Bawang",
    rumahAdat: "Nuwo Sesat",
    tarianDaerah: "Sigeh Pengunten",
    senjataDaerah: "Terapang",
    alatMusik: "Bende",
    makananKhas: "Seruit"
  },
  {
    id: "bangka-belitung",
    provinsi: "Bangka Belitung",
    ibuKota: "Pangkal Pinang",
    pulau: "Sumatera",
    hewanIkonik: null,
    pakaianAdat: "Melayu Belitung",
    rumahAdat: "Rakit",
    tarianDaerah: "Campak",
    senjataDaerah: "Siwar Panjang",
    alatMusik: "Gendang Melayu",
    makananKhas: "Mie Bangka"
  },
  {
    id: "kalimantan-timur",
    provinsi: "Kalimantan Timur",
    ibuKota: "Samarinda",
    pulau: "Kalimantan",
    hewanIkonik: "Pesut Mahakam",
    pakaianAdat: "Urang Besesua",
    rumahAdat: "Lamin",
    tarianDaerah: "Hudoq",
    senjataDaerah: "Mandau Kenyah",
    alatMusik: "Sampe",
    makananKhas: "Ayam Cincane"
  },
  {
    id: "kalimantan-barat",
    provinsi: "Kalimantan Barat",
    ibuKota: "Pontianak",
    pulau: "Kalimantan",
    hewanIkonik: "Burung Enggang",
    pakaianAdat: "King Baba dan King Bibinge",
    rumahAdat: "Panjang",
    tarianDaerah: "Monong",
    senjataDaerah: "Mandau Iban",
    alatMusik: "Sape Dayak",
    makananKhas: "Bubur Pedas Sambas"
  },
  {
    id: "kalimantan-tengah",
    provinsi: "Kalimantan Tengah",
    ibuKota: "Palangkaraya",
    pulau: "Kalimantan",
    hewanIkonik: "Burung Enggang",
    pakaianAdat: "Sangkarut",
    rumahAdat: "Betang",
    tarianDaerah: "Manasai",
    senjataDaerah: "Mandau Ngaju",
    alatMusik: "Katambung",
    makananKhas: "Juhu Singkah"
  },
  {
    id: "kalimantan-selatan",
    provinsi: "Kalimantan Selatan",
    ibuKota: "Banjarbaru",
    pulau: "Kalimantan",
    hewanIkonik: "Bekantan",
    pakaianAdat: "Bagajah Gamuling Baular Lulut",
    rumahAdat: "Bubungan Tinggi",
    tarianDaerah: "Baksa Kembang",
    senjataDaerah: "Bujak Beliung",
    alatMusik: "Panting",
    makananKhas: "Soto Banjar"
  },
  {
    id: "kalimantan-utara",
    provinsi: "Kalimantan Utara",
    ibuKota: "Tanjung Selor",
    pulau: "Kalimantan",
    hewanIkonik: null,
    pakaianAdat: "Taa dan Sapei Sapaq",
    rumahAdat: "Baloy",
    tarianDaerah: "Jugit",
    senjataDaerah: "Mandau",
    alatMusik: "Sampeq",
    makananKhas: "Kepiting Soka"
  },
  {
    id: "dki-jakarta",
    provinsi: "DKI Jakarta",
    ibuKota: "Jakarta",
    pulau: "Jawa",
    hewanIkonik: "Burung Elang Bondol",
    pakaianAdat: "Abang None",
    rumahAdat: "Kebaya",
    tarianDaerah: "Topeng Betawi",
    senjataDaerah: "Golok",
    alatMusik: "Tanjidor",
    makananKhas: "Kerak Telor"
  },
  {
    id: "banten",
    provinsi: "Banten",
    ibuKota: "Serang",
    pulau: "Jawa",
    hewanIkonik: "Badak Jawa",
    pakaianAdat: "Pangsi dan Kebaya",
    rumahAdat: "Baduy",
    tarianDaerah: "Rampak Bedug",
    senjataDaerah: "Kujang",
    alatMusik: "Gogdog Lojor",
    makananKhas: "Sate Bandeng"
  },
  {
    id: "jawa-barat",
    provinsi: "Jawa Barat",
    ibuKota: "Bandung",
    pulau: "Jawa",
    hewanIkonik: "Badak Jawa",
    pakaianAdat: "Jas Beludru dan Kebaya Sunda",
    rumahAdat: "Jolopong",
    tarianDaerah: "Jaipong",
    senjataDaerah: "Kujang",
    alatMusik: "Angklung",
    makananKhas: "Serabi"
  },
  {
    id: "jawa-tengah",
    provinsi: "Jawa Tengah",
    ibuKota: "Semarang",
    pulau: "Jawa",
    hewanIkonik: "Burung Kepodang",
    pakaianAdat: "Beskap dan Kebaya",
    rumahAdat: "Joglo",
    tarianDaerah: "Gambyong",
    senjataDaerah: "Keris",
    alatMusik: "Gamelan",
    makananKhas: "Lumpia"
  },
  {
    id: "diy-yogyakarta",
    provinsi: "DI Yogyakarta",
    ibuKota: "Yogyakarta",
    pulau: "Jawa",
    hewanIkonik: "Burung Perkutut Jawa",
    pakaianAdat: "Paes Ageng",
    rumahAdat: "Joglo",
    tarianDaerah: "Serimpi",
    senjataDaerah: "Keris",
    alatMusik: "Gamelan",
    makananKhas: "Gudeg"
  },
  {
    id: "jawa-timur",
    provinsi: "Jawa Timur",
    ibuKota: "Surabaya",
    pulau: "Jawa",
    hewanIkonik: "Ayam Bekisar",
    pakaianAdat: "Pesaan dan Kebaya Rancongan",
    rumahAdat: "Joglo Sinom",
    tarianDaerah: "Reog Ponorogo",
    senjataDaerah: "Celurit",
    alatMusik: "Bonang",
    makananKhas: "Rujak Cingur"
  },
  {
    id: "bali",
    provinsi: "Bali",
    ibuKota: "Denpasar",
    pulau: "Bali",
    hewanIkonik: "Burung Jalak Bali",
    pakaianAdat: "Payas Agung",
    rumahAdat: "Bale",
    tarianDaerah: "Legong",
    senjataDaerah: "Keris",
    alatMusik: "Cengceng",
    makananKhas: "Ayam Betutu"
  },
  {
    id: "ntb",
    provinsi: "Nusa Tenggara Barat",
    ibuKota: "Mataram",
    pulau: "Nusa Tenggara",
    hewanIkonik: "Rusa Timor",
    pakaianAdat: "Pegon",
    rumahAdat: "Bale Lumbung",
    tarianDaerah: "Gendang Beleq",
    senjataDaerah: "Sampari",
    alatMusik: "Gendang Beleq",
    makananKhas: "Ayam Taliwang"
  },
  {
    id: "ntt",
    provinsi: "Nusa Tenggara Timur",
    ibuKota: "Kupang",
    pulau: "Nusa Tenggara",
    hewanIkonik: "Komodo",
    pakaianAdat: "Amarasi",
    rumahAdat: "Musalaki",
    tarianDaerah: "Caci",
    senjataDaerah: "Sundu",
    alatMusik: "Sasando",
    makananKhas: "Sei Kupang"
  },
  {
    id: "sulawesi-utara",
    provinsi: "Sulawesi Utara",
    ibuKota: "Manado",
    pulau: "Sulawesi",
    hewanIkonik: "Tarsius",
    pakaianAdat: "Laku Tepu",
    rumahAdat: "Walewangko",
    tarianDaerah: "Kabasaran",
    senjataDaerah: "Keris",
    alatMusik: "Kolintang",
    makananKhas: "Tinutuan"
  },
  {
    id: "sulawesi-barat",
    provinsi: "Sulawesi Barat",
    ibuKota: "Mamuju",
    pulau: "Sulawesi",
    hewanIkonik: null,
    pakaianAdat: "Pokko dan Pattuqduq",
    rumahAdat: "Boyang",
    tarianDaerah: "Pattuqduq Towaine",
    senjataDaerah: "Tombak",
    alatMusik: "Kecapi Mandar",
    makananKhas: "Bolu Paranggi"
  },
  {
    id: "sulawesi-tengah",
    provinsi: "Sulawesi Tengah",
    ibuKota: "Palu",
    pulau: "Sulawesi",
    hewanIkonik: "Burung Maleo",
    pakaianAdat: "Nggembe",
    rumahAdat: "Souraja",
    tarianDaerah: "Dero",
    senjataDaerah: "Pasatimpo",
    alatMusik: "Lalove",
    makananKhas: "Ikan Jantung Pisang"
  },
  {
    id: "gorontalo",
    provinsi: "Gorontalo",
    ibuKota: "Gorontalo",
    pulau: "Sulawesi",
    hewanIkonik: "Burung Maleo",
    pakaianAdat: "Biliu dan Paluwala",
    rumahAdat: "Dulohupa",
    tarianDaerah: "Saronde",
    senjataDaerah: "Badik",
    alatMusik: "Ganda",
    makananKhas: "Binte Biluhuta"
  },
  {
    id: "sulawesi-tenggara",
    provinsi: "Sulawesi Tenggara",
    ibuKota: "Kendari",
    pulau: "Sulawesi",
    hewanIkonik: "Anoa",
    pakaianAdat: "Babu Nggawi",
    rumahAdat: "Malige",
    tarianDaerah: "Lulo",
    senjataDaerah: "Keris",
    alatMusik: "Lado-lado",
    makananKhas: "Lapa-lapa"
  },
  {
    id: "sulawesi-selatan",
    provinsi: "Sulawesi Selatan",
    ibuKota: "Makassar",
    pulau: "Sulawesi",
    hewanIkonik: "Anoa",
    pakaianAdat: "Baju Bodo",
    rumahAdat: "Tongkonan",
    tarianDaerah: "Pakarena",
    senjataDaerah: "Badik Lompo Battang",
    alatMusik: "Kesokeso",
    makananKhas: "Sup Konro"
  },
  {
    id: "maluku-utara",
    provinsi: "Maluku Utara",
    ibuKota: "Sofifi",
    pulau: "Maluku",
    hewanIkonik: "Burung Bidadari Halmahera",
    pakaianAdat: "Manteren Lamo",
    rumahAdat: "Sasadu",
    tarianDaerah: "Cakalele",
    senjataDaerah: "Parang Salawaku",
    alatMusik: "Fu",
    makananKhas: "Gohu Ikan"
  },
  {
    id: "maluku",
    provinsi: "Maluku",
    ibuKota: "Ambon",
    pulau: "Maluku",
    hewanIkonik: "Burung Nuri Raja Ambon",
    pakaianAdat: "Cele",
    rumahAdat: "Baileo",
    tarianDaerah: "Lenso",
    senjataDaerah: "Parang Salawaku",
    alatMusik: "Tifa Maluku",
    makananKhas: "Ikan Asar"
  },
  {
    id: "papua-barat",
    provinsi: "Papua Barat",
    ibuKota: "Manokwari",
    pulau: "Papua",
    hewanIkonik: "Burung Kasuari",
    pakaianAdat: "Arfak",
    rumahAdat: "Kaki Seribu",
    tarianDaerah: "Yosim Pancar",
    senjataDaerah: "Busur Panah",
    alatMusik: "Tifa Papua Barat",
    makananKhas: "Ikan Bakar Manokwari"
  },
  {
    id: "papua",
    provinsi: "Papua",
    ibuKota: "Jayapura",
    pulau: "Papua",
    hewanIkonik: "Burung Cendrawasih",
    pakaianAdat: "Asmat",
    rumahAdat: "Honai",
    tarianDaerah: "Perang",
    senjataDaerah: "Belati Tulang Kasuari",
    alatMusik: "Tifa Papua",
    makananKhas: "Papeda"
  },
  {
    id: "papua-selatan",
    provinsi: "Papua Selatan",
    ibuKota: "Kabupaten Merauke",
    pulau: "Papua",
    hewanIkonik: "Kangguru Pohon",
    pakaianAdat: "Ewer",
    rumahAdat: "Jeuw",
    tarianDaerah: "Tobe",
    senjataDaerah: "Pisuwe",
    alatMusik: null,
    makananKhas: "Sagu Sep"
  },
  {
    id: "papua-tengah",
    provinsi: "Papua Tengah",
    ibuKota: "Kabupaten Nabire",
    pulau: "Papua",
    hewanIkonik: "Anjing Hutan Papua",
    pakaianAdat: "Koteka dan Rok Rumbai",
    rumahAdat: "Honai",
    tarianDaerah: "Musyoh",
    senjataDaerah: "Pisau Belati",
    alatMusik: null,
    makananKhas: "Bagea"
  },
  {
    id: "papua-pegunungan",
    provinsi: "Papua Pegunungan",
    ibuKota: "Kabupaten Jayawijaya",
    pulau: "Papua",
    hewanIkonik: "Burung Puyuh Salju",
    pakaianAdat: "Koteka",
    rumahAdat: "Honai",
    tarianDaerah: "Suanggi",
    senjataDaerah: "Parang Papua",
    alatMusik: null,
    makananKhas: "Kue Lontar"
  },
  {
    id: "papua-barat-daya",
    provinsi: "Papua Barat Daya",
    ibuKota: "Sorong",
    pulau: "Papua",
    hewanIkonik: "Burung Cendrawasih",
    pakaianAdat: "Rumbai Cendrawasih",
    rumahAdat: "Kaki Seribu",
    tarianDaerah: "Yosim Pancar",
    senjataDaerah: "Kapak Papua",
    alatMusik: "Tifa Papua Barat Daya",
    makananKhas: "Udang Selingkuh"
  }
];


// ===============================
//  QUESTION GENERATOR SYSTEM
// ===============================

// helper acak
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// helper ambil random elemen
function randomPick(arr, n) {
  return shuffle([...arr]).slice(0, n);
}

// ===== TEMPLATE SOAL PER KATEGORI =====

// 1. Hewan Ikonik
function buildQuestionHewan(data) {
  const valid = data.filter(p => p.hewanIkonik);
  if (valid.length < 3) return null;

  const item = shuffle(valid)[0];

  const mode = Math.random() < 0.5 ? 1 : 2;
  let question, correct;

  if (mode === 1) {
    question = `Apa hewan ikonik dari provinsi ${item.provinsi}?`;
    correct = item.hewanIkonik;
  } else {
    question = `${item.hewanIkonik} merupakan hewan ikonik dari provinsi apa?`;
    correct = item.provinsi;
  }

  const options = buildOptions(valid, item, "hewanIkonik", correct, mode);
  return { question, correct, options };
}

// 2. Pakaian Adat
function buildQuestionPakaian(data) {
  const valid = data.filter(p => p.pakaianAdat);
  if (valid.length < 3) return null;

  const item = shuffle(valid)[0];
  const mode = Math.random() < 0.5 ? 1 : 2;

  let question, correct;

  if (mode === 1) {
    question = `Apa pakaian adat dari provinsi ${item.provinsi}?`;
    correct = item.pakaianAdat;
  } else {
    question = `Pakaian adat ${item.pakaianAdat} berasal dari provinsi apa?`;
    correct = item.provinsi;
  }

  const options = buildOptions(valid, item, "pakaianAdat", correct, mode);
  return { question, correct, options };
}

// 3. Rumah Adat
function buildQuestionRumah(data) {
  const valid = data.filter(p => p.rumahAdat);
  if (valid.length < 3) return null;

  const item = shuffle(valid)[0];
  const mode = Math.random() < 0.5 ? 1 : 2;

  let question, correct;

  if (mode === 1) {
    question = `Apa rumah adat dari provinsi ${item.provinsi}?`;
    correct = item.rumahAdat;
  } else {
    question = `Rumah adat ${item.rumahAdat} berasal dari provinsi apa?`;
    correct = item.provinsi;
  }

  const options = buildOptions(valid, item, "rumahAdat", correct, mode);
  return { question, correct, options };
}

// 4. Tarian Daerah
function buildQuestionTari(data) {
  const valid = data.filter(p => p.tarianDaerah);
  if (valid.length < 3) return null;

  const item = shuffle(valid)[0];
  const mode = Math.random() < 0.5 ? 1 : 2;

  let question, correct;

  if (mode === 1) {
    question = `Apa tarian daerah dari provinsi ${item.provinsi}?`;
    correct = item.tarianDaerah;
  } else {
    question = `Tari ${item.tarianDaerah} berasal dari provinsi apa?`;
    correct = item.provinsi;
  }

  const options = buildOptions(valid, item, "tarianDaerah", correct, mode);
  return { question, correct, options };
}

// 5. Senjata Daerah
function buildQuestionSenjata(data) {
  const valid = data.filter(p => p.senjataDaerah);
  if (valid.length < 3) return null;

  const item = shuffle(valid)[0];
  const mode = Math.random() < 0.5 ? 1 : 2;

  let question, correct;

  if (mode === 1) {
    question = `Apa senjata daerah dari provinsi ${item.provinsi}?`;
    correct = item.senjataDaerah;
  } else {
    question = `Senjata daerah ${item.senjataDaerah} berasal dari provinsi apa?`;
    correct = item.provinsi;
  }

  const options = buildOptions(valid, item, "senjataDaerah", correct, mode);
  return { question, correct, options };
}

// 6. Makanan Khas
function buildQuestionMakanan(data) {
  const valid = data.filter(p => p.makananKhas);
  if (valid.length < 3) return null;

  const item = shuffle(valid)[0];
  const mode = Math.random() < 0.5 ? 1 : 2;

  let question, correct;

  if (mode === 1) {
    question = `Apa makanan khas dari provinsi ${item.provinsi}?`;
    correct = item.makananKhas;
  } else {
    question = `${item.makananKhas} berasal dari provinsi apa?`;
    correct = item.provinsi;
  }

  const options = buildOptions(valid, item, "makananKhas", correct, mode);
  return { question, correct, options };
}

// 7. Alat Musik
function buildQuestionAlatMusik(data) {
  const valid = data.filter(p => p.alatMusik);
  if (valid.length < 3) return null;

  const item = shuffle(valid)[0];
  const mode = Math.random() < 0.5 ? 1 : 2;

  let question, correct;

  if (mode === 1) {
    question = `Apa alat musik daerah dari provinsi ${item.provinsi}?`;
    correct = item.alatMusik;
  } else {
    question = `${item.alatMusik} adalah alat musik yang berasal dari provinsi?`;
    correct = item.provinsi;
  }

  const options = buildOptions(valid, item, "alatMusik", correct, mode);
  return { question, correct, options };
}

function buildOptions(valid, item, field, correct, mode) {
  let wrongPool;

  if (mode === 1) {
    // mode tanya "Apa … dari provinsi X?"
    wrongPool = valid
      .filter(p => p[field] && p[field] !== item[field])
      .map(p => p[field]);
  } else {
    // mode tanya "… berasal dari provinsi apa?"
    wrongPool = valid
      .filter(p => p.provinsi !== item.provinsi)
      .map(p => p.provinsi);
  }

  const wrongTwo = randomPick(wrongPool, 2);
  return shuffle([correct, ...wrongTwo]);
}
