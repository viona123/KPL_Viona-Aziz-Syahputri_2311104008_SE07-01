const KodeBuah = require("./KodeBuah");
const PosisiKarakterGame = require("./PosisiKarakterGame");

// Uji KodeBuah (Table-Driven)
const kb = new KodeBuah();
console.log("Kode buah Apel:", kb.getKodeBuah("Apel"));
console.log("Kode buah Semangka:", kb.getKodeBuah("Semangka"));

// Uji PosisiKarakterGame (State-Based)
const karakter = new PosisiKarakterGame();
karakter.printState();
karakter.tombolW();
karakter.printState();
karakter.tombolS(); 
karakter.printState();
