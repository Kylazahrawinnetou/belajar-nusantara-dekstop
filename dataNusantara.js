const PROVINSI_DATA = [
  {
    id: "aceh",
    provinsi: "Aceh",
    ibuKota: "Banda Aceh",
    hewanIkonik: null,
    pakaianAdat: "Pakaian adat Ulee Balang",
    rumahAdat: "Rumoh Aceh",
    tarianDaerah: "Tari Saman",
    senjataDaerah: "Rencong",
    alatMusik: "Canang",
    makananKhas: "Mie Aceh"
  },
  {
    id: "sumatera-utara",
    provinsi: "Sumatera Utara",
    ibuKota: "Medan",
    hewanIkonik: "Burung Beo Nias",
    pakaianAdat: "Pakaian adat Ulos Batak",
    rumahAdat: "Rumah Bolon",
    tarianDaerah: "Tari Tor-tor",
    senjataDaerah: "Piso Surit",
    alatMusik: "Gordang Sambilan",
    makananKhas: "Bika Ambon"
  },
  {
    id: "sumatera-selatan",
    provinsi: "Sumatera Selatan",
    ibuKota: "Palembang",
    hewanIkonik: "Ikan Belida",
    pakaianAdat: "Pakaian adat Aesan Gede",
    rumahAdat: "Rumah Limas",
    tarianDaerah: "Tari Gending Sriwijaya",
    senjataDaerah: "Tombak Trisula",
    alatMusik: "Gendang Melayu",
    makananKhas: "Pempek"
  },
  {
    id: "sumatera-barat",
    provinsi: "Sumatera Barat",
    ibuKota: "Padang",
    hewanIkonik: "Burung Kuau Raja",
    pakaianAdat: "Pakaian adat Bundo Kanduang",
    rumahAdat: "Rumah Gadang",
    tarianDaerah: "Tari Piring",
    senjataDaerah: "Karih",
    alatMusik: "Saluang",
    makananKhas: "Rendang"
  },
  {
    id: "bengkulu",
    provinsi: "Bengkulu",
    ibuKota: "Bengkulu",
    hewanIkonik: null,
    pakaianAdat: "Pakaian adat Melayu Bengkulu",
    rumahAdat: "Rumah adat Bubungan Lima",
    tarianDaerah: "Tari Andun",
    senjataDaerah: null,
    alatMusik: "Serunai Bengkulu",
    makananKhas: "Pendap"
  },
  {
    id: "riau",
    provinsi: "Riau",
    ibuKota: "Pekanbaru",
    hewanIkonik: "Burung Serindit",
    pakaianAdat: "Pakaian adat Teluk Belanga",
    rumahAdat: "Rumah adat Selaso Jatuh Kembar",
    tarianDaerah: "Tari Zapin Melayu",
    senjataDaerah: "Pedang Jenawi",
    alatMusik: "Gambus",
    makananKhas: "Gulai Belacan"
  },
  {
    id: "kepulauan-riau",
    provinsi: "Kepulauan Riau",
    ibuKota: "Tanjung Pinang",
    hewanIkonik: "Ikan Kakap Merah",
    pakaianAdat: "Pakaian adat Teluk Belanga dan Kebaya Labuh",
    rumahAdat: "Rumah adat Belah Bubung",
    tarianDaerah: "Tari Joget Dangkong",
    senjataDaerah: "Badik Tumbuk Lado",
    alatMusik: "Gendang Panjang",
    makananKhas: "Otak-otak"
  },
  {
    id: "jambi",
    provinsi: "Jambi",
    ibuKota: "Jambi",
    hewanIkonik: "Harimau Sumatera",
    pakaianAdat: "Pakaian adat Melayu Jambi",
    rumahAdat: "Rumah adat Kejang Lako",
    tarianDaerah: "Tari Sekapur Sirih",
    senjataDaerah: "Keris Siginjai",
    alatMusik: "Serunai Jambi",
    makananKhas: "Gulai Ikan Patin"
  },
  {
    id: "lampung",
    provinsi: "Lampung",
    ibuKota: "Bandar Lampung",
    hewanIkonik: "Gajah Sumatera",
    pakaianAdat: "Pakaian adat Tulang Bawang",
    rumahAdat: "Rumah adat Nuwo Sesat",
    tarianDaerah: "Tari Sigeh Pengunten",
    senjataDaerah: "Terapang",
    alatMusik: "Bende",
    makananKhas: "Seruit"
  },
  {
    id: "bangka-belitung",
    provinsi: "Bangka Belitung",
    ibuKota: "Pangkal Pinang",
    hewanIkonik: null,
    pakaianAdat: "Pakaian adat Melayu Belitung",
    rumahAdat: "Rumah Rakit",
    tarianDaerah: "Tari Campak",
    senjataDaerah: "Siwar Panjang",
    alatMusik: "Gendang Melayu",
    makananKhas: "Mie Bangka"
  },
  {
    id: "kalimantan-timur",
    provinsi: "Kalimantan Timur",
    ibuKota: "Samarinda",
    hewanIkonik: "Pesut Mahakam",
    pakaianAdat: "Pakaian adat Urang Besesua",
    rumahAdat: "Rumah adat Lamin",
    tarianDaerah: "Tari Hudoq",
    senjataDaerah: "Mandau Kenyah",
    alatMusik: "Sampe",
    makananKhas: "Ayam Cincane"
  },
  {
    id: "kalimantan-barat",
    provinsi: "Kalimantan Barat",
    ibuKota: "Pontianak",
    hewanIkonik: "Burung Enggang",
    pakaianAdat: "Pakaian adat King Baba dan King Bibinge",
    rumahAdat: "Rumah Panjang",
    tarianDaerah: "Tari Monong",
    senjataDaerah: "Mandau Iban",
    alatMusik: "Sape' Dayak",
    makananKhas: "Bubur Pedas Sambas"
  },
  {
    id: "kalimantan-tengah",
    provinsi: "Kalimantan Tengah",
    ibuKota: "Palangkaraya",
    hewanIkonik: "Burung Enggang",
    pakaianAdat: "Pakaian adat Sangkarut",
    rumahAdat: "Rumah adat Betang",
    tarianDaerah: "Tari Manasai",
    senjataDaerah: "Mandau Ngaju",
    alatMusik: "Katambung",
    makananKhas: "Juhu Singkah"
  },
  {
    id: "kalimantan-selatan",
    provinsi: "Kalimantan Selatan",
    ibuKota: "Banjarbaru",
    hewanIkonik: "Bekantan",
    pakaianAdat: "Pakaian adat Bagajah Gamuling Baular Lulut",
    rumahAdat: "Rumah adat Bubungan Tinggi",
    tarianDaerah: "Tari Baksa Kembang",
    senjataDaerah: "Bujak Beliung",
    alatMusik: "Panting",
    makananKhas: "Soto Banjar"
  },
  {
    id: "kalimantan-utara",
    provinsi: "Kalimantan Utara",
    ibuKota: "Tanjung Selor",
    hewanIkonik: null,
    pakaianAdat: "Pakaian adat Ta’a dan Sapei Sapaq",
    rumahAdat: "Rumah adat Baloy",
    tarianDaerah: "Tari Jugit",
    senjataDaerah: "Mandau",
    alatMusik: "Tuma",
    makananKhas: "Kepiting Soka"
  },
  {
    id: "dki-jakarta",
    provinsi: "DKI Jakarta",
    ibuKota: "Jakarta",
    hewanIkonik: "Burung Elang Bondol",
    pakaianAdat: "Pakaian adat Abang None",
    rumahAdat: "Rumah Kebaya",
    tarianDaerah: "Tari Topeng Betawi",
    senjataDaerah: "Golok",
    alatMusik: "Tanjidor",
    makananKhas: "Kerak Telor"
  },
  {
    id: "banten",
    provinsi: "Banten",
    ibuKota: "Serang",
    hewanIkonik: "Badak Jawa",
    pakaianAdat: "Pakaian adat Pangsi dan Kebaya",
    rumahAdat: "Rumah Baduy",
    tarianDaerah: "Tari Rampak Bedug",
    senjataDaerah: "Kujang",
    alatMusik: "Gogdog Lojor",
    makananKhas: "Sate Bandeng"
  },
  {
    id: "jawa-barat",
    provinsi: "Jawa Barat",
    ibuKota: "Bandung",
    hewanIkonik: "Badak Jawa",
    pakaianAdat: "Pakaian adat Jas Beludru & Kebaya Sunda",
    rumahAdat: "Rumah adat Jolopong",
    tarianDaerah: "Tari Jaipong",
    senjataDaerah: "Kujang",
    alatMusik: "Angklung",
    makananKhas: "Serabi"
  },
  {
    id: "jawa-tengah",
    provinsi: "Jawa Tengah",
    ibuKota: "Semarang",
    hewanIkonik: "Burung Kepodang",
    pakaianAdat: "Pakaian adat Beskap & Kebaya",
    rumahAdat: "Joglo",
    tarianDaerah: "Tari Gambyong",
    senjataDaerah: "Keris",
    alatMusik: "Gamelan",
    makananKhas: "Lumpia"
  },
  {
    id: "diy-yogyakarta",
    provinsi: "DI Yogyakarta",
    ibuKota: "Yogyakarta",
    hewanIkonik: "Burung Perkutut Jawa",
    pakaianAdat: "Pakaian adat Paes Ageng",
    rumahAdat: "Joglo",
    tarianDaerah: "Tari Serimpi",
    senjataDaerah: "Keris",
    alatMusik: "Gamelan",
    makananKhas: "Gudeg"
  },
  {
    id: "jawa-timur",
    provinsi: "Jawa Timur",
    ibuKota: "Surabaya",
    hewanIkonik: "Ayam Bekisar",
    pakaianAdat: "Pakaian adat Pesa'an dan Kebaya Rancongan",
    rumahAdat: "Rumah Joglo Sinom",
    tarianDaerah: "Reog Ponorogo",
    senjataDaerah: "Celurit",
    alatMusik: "Bonang",
    makananKhas: "Rujak Cingur"
  },
  {
    id: "bali",
    provinsi: "Bali",
    ibuKota: "Denpasar",
    hewanIkonik: "Burung Jalak Bali",
    pakaianAdat: "Pakaian adat Payas Agung",
    rumahAdat: "Rumah adat Bale",
    tarianDaerah: "Tari Legong",
    senjataDaerah: "Keris",
    alatMusik: "Cengceng",
    makananKhas: "Ayam Betutu"
  },
  {
    id: "ntb",
    provinsi: "Nusa Tenggara Barat",
    ibuKota: "Mataram",
    hewanIkonik: "Rusa Timor",
    pakaianAdat: "Pakaian adat Pegon",
    rumahAdat: "Rumah adat Bale Lumbung",
    tarianDaerah: "Tari Gendang Beleq",
    senjataDaerah: "Sampari",
    alatMusik: "Gendang Beleq",
    makananKhas: "Ayam Taliwang"
  },
  {
    id: "ntt",
    provinsi: "Nusa Tenggara Timur",
    ibuKota: "Kupang",
    hewanIkonik: "Komodo",
    pakaianAdat: "Pakaian adat Amarasi",
    rumahAdat: "Rumah adat Musalaki",
    tarianDaerah: "Tari Caci",
    senjataDaerah: "Sundu",
    alatMusik: "Sasando",
    makananKhas: "Se'i Kupang"
  },
  {
    id: "sulawesi-utara",
    provinsi: "Sulawesi Utara",
    ibuKota: "Manado",
    hewanIkonik: "Tarsius",
    pakaianAdat: "Pakaian adat Laku Tepu",
    rumahAdat: "Rumah adat Walewangko",
    tarianDaerah: "Tari Kabasaran",
    senjataDaerah: "Keris",
    alatMusik: "Kolintang",
    makananKhas: "Tinutuan"
  },
  {
    id: "sulawesi-barat",
    provinsi: "Sulawesi Barat",
    ibuKota: "Mamuju",
    hewanIkonik: null,
    pakaianAdat: "Pakaian Adat Pokko’ dan Pattuqduq",
    rumahAdat: "Rumah adat Boyang",
    tarianDaerah: "Tari Pattuqduq Towaine",
    senjataDaerah: "Tombak",
    alatMusik: "Kecapi Mandar",
    makananKhas: "Bolu Paranggi"
  },
  {
    id: "sulawesi-tengah",
    provinsi: "Sulawesi Tengah",
    ibuKota: "Palu",
    hewanIkonik: "Burung Maleo",
    pakaianAdat: "Pakaian adat Nggembe",
    rumahAdat: "Rumah adat Souraja",
    tarianDaerah: "Tari Dero",
    senjataDaerah: "Pasatimpo",
    alatMusik: "Lalove",
    makananKhas: "Ikan Jantung Pisang"
  },
  {
    id: "gorontalo",
    provinsi: "Gorontalo",
    ibuKota: "Gorontalo",
    hewanIkonik: "Burung Maleo",
    pakaianAdat: "Pakaian adat Biliu dan Paluwala",
    rumahAdat: "Rumah adat Dulohupa",
    tarianDaerah: "Tari Saronde",
    senjataDaerah: "Badik",
    alatMusik: "Ganda",
    makananKhas: "Binte Biluhuta"
  },
  {
    id: "sulawesi-tenggara",
    provinsi: "Sulawesi Tenggara",
    ibuKota: "Kendari",
    hewanIkonik: "Anoa",
    pakaianAdat: "Pakaian adat Babu Nggawi",
    rumahAdat: "Rumah adat Malige",
    tarianDaerah: "Tari Lulo",
    senjataDaerah: "Keris",
    alatMusik: "Lado-lado",
    makananKhas: "Lapa-lapa"
  },
  {
    id: "sulawesi-selatan",
    provinsi: "Sulawesi Selatan",
    ibuKota: "Makassar",
    hewanIkonik: "Anoa",
    pakaianAdat: "Pakaian adat Baju Bodo",
    rumahAdat: "Rumah adat Tongkonan",
    tarianDaerah: "Tari Pakarena",
    senjataDaerah: "Badik Lompo Battang",
    alatMusik: "Keso'-keso'",
    makananKhas: "Sup Konro"
  },
  {
    id: "maluku-utara",
    provinsi: "Maluku Utara",
    ibuKota: "Sofifi",
    hewanIkonik: "Burung Bidadari Halmahera",
    pakaianAdat: "Pakaian adat Manteren Lamo",
    rumahAdat: "Rumah adat Sasadu",
    tarianDaerah: "Tari Cakalele",
    senjataDaerah: "Parang Salawaku",
    alatMusik: "Fu",
    makananKhas: "Gohu Ikan"
  },
  {
    id: "maluku",
    provinsi: "Maluku",
    ibuKota: "Ambon",
    hewanIkonik: "Burung Nuri Raja Ambon",
    pakaianAdat: "Pakaian adat Cele",
    rumahAdat: "Rumah adat Baileo",
    tarianDaerah: "Tari Lenso",
    senjataDaerah: "Parang Salawaku",
    alatMusik: "Tifa Maluku",
    makananKhas: "Ikan Asar"
  },
  {
    id: "papua-barat",
    provinsi: "Papua Barat",
    ibuKota: "Manokwari",
    hewanIkonik: "Burung Kasuari",
    pakaianAdat: "Pakaian adat Arfak",
    rumahAdat: "Rumah adat Kaki Seribu",
    tarianDaerah: "Tari Yosim Pancar",
    senjataDaerah: "Busur dan Panah",
    alatMusik: "Tifa Papua Barat",
    makananKhas: "Ikan Bakar Manokwari"
  },
  {
    id: "papua",
    provinsi: "Papua",
    ibuKota: "Jayapura",
    hewanIkonik: "Burung Cendrawasih",
    pakaianAdat: "Pakaian adat Asmat",
    rumahAdat: "Rumah adat Honai",
    tarianDaerah: "Tari Perang",
    senjataDaerah: "Belati Tulang Kasuari",
    alatMusik: "Tifa Papua",
    makananKhas: "Papeda"
  },
  {
    id: "papua-selatan",
    provinsi: "Papua Selatan",
    ibuKota: "Kabupaten Merauke",
    hewanIkonik: "Kangguru Pohon",
    pakaianAdat: "Pakaian adat Ewer",
    rumahAdat: "Rumah adat Jeuw",
    tarianDaerah: "Tari Tobe",
    senjataDaerah: "Pisuwe",
    alatMusik: null,
    makananKhas: "Sagu Sep"
  },
  {
    id: "papua-tengah",
    provinsi: "Papua Tengah",
    ibuKota: "Kabupaten Nabire",
    hewanIkonik: "Anjing Hutan Papua",
    pakaianAdat: "Pakaian adat Koteka dan Rok Rumbai",
    rumahAdat: "Rumah adat Honai",
    tarianDaerah: "Tari Musyoh",
    senjataDaerah: "Pisau Belati",
    alatMusik: null,
    makananKhas: "Bagea"
  },
  {
    id: "papua-pegunungan",
    provinsi: "Papua Pegunungan",
    ibuKota: "Kabupaten Jayawijaya",
    hewanIkonik: "Puyuh Salju",
    pakaianAdat: "Pakaian adat Koteka",
    rumahAdat: "Rumah adat Honai",
    tarianDaerah: "Tari Suanggi",
    senjataDaerah: "Parang Papua",
    alatMusik: null,
    makananKhas: "Kue Lontar"
  },
  {
    id: "papua-barat-daya",
    provinsi: "Papua Barat Daya",
    ibuKota: "Sorong",
    hewanIkonik: "Burung Cendrawasih",
    pakaianAdat: "Pakaian adat Rumbai Cendrawasih",
    rumahAdat: "Rumah adat Kaki Seribu",
    tarianDaerah: "Tari Yosim Pancar",
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
    question = `${item.pakaianAdat} berasal dari provinsi apa?`;
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
    question = `${item.rumahAdat} berasal dari provinsi apa?`;
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
    question = `${item.tarianDaerah} berasal dari provinsi apa?`;
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
    question = `${item.senjataDaerah} berasal dari provinsi apa?`;
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

