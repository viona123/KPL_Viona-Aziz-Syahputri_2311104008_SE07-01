const PusatDataSingleton = require('./PusatDataSingleton');

// Membuat dua variabel singleton
const data1 = PusatDataSingleton.getDataSingleton();
const data2 = PusatDataSingleton.getDataSingleton();

// Menambahkan data ke data1
data1.addSebuahData("Alice (Anggota)");
data1.addSebuahData("Bob (Anggota)");
data1.addSebuahData("Charlie (Asisten Praktikum)");

// Menampilkan data dari data2
console.log("== Data dari data2 ==");
data2.printSemuaData();

// Menghapus asisten praktikum dari data2
data2.hapusSebuahData(2); // index 2 untuk "Charlie"

// Menampilkan data dari data1 setelah penghapusan
console.log("\n== Data dari data1 setelah penghapusan ==");
data1.printSemuaData();

// Menampilkan jumlah data
console.log("\nJumlah data di data1:", data1.getSemuaData().length);
console.log("Jumlah data di data2:", data2.getSemuaData().length);

