const KodePos = require("./KodePos");
const DoorMachine = require("./DoorMachine");

// Uji KodePos (Table-Driven)
const kp = new KodePos();
console.log("Kode pos Batununggal:", kp.getKodePos("Batununggal"));
console.log("Kode pos Samoja:", kp.getKodePos("Samoja"));

// Uji DoorMachine (State-Based)
const pintu = new DoorMachine();
pintu.buka();
pintu.kunci();
