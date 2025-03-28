const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan nama Anda: ", (nama) => {
  console.log(`Selamat datang, ${nama}!`);

  // Panggil fungsi berikutnya untuk menampilkan array
  cetakArray();
});

function cetakArray() {
    let arr = Array.from({ length: 50 }, (_, i) => i);
  
    arr.forEach((num) => {
      let output = num;
      if (num % 2 === 0 && num % 3 === 0) output += " #$#$";
      else if (num % 2 === 0) output += " ##";
      else if (num % 3 === 0) output += " $$";
      console.log(output);
    });
  
    // Panggil fungsi berikutnya untuk meminta input angka
    inputAngka();
  }

  function inputAngka() {
    rl.question("Masukkan angka (1-10000): ", (nilaiString) => {
      let nilaiInt = parseInt(nilaiString, 10);
      
      if (isNaN(nilaiInt) || nilaiInt < 1 || nilaiInt > 10000) {
        console.log("Input tidak valid! Masukkan angka antara 1 - 10000.");
        return inputAngka();
      }
  
      if (cekPrima(nilaiInt)) {
        console.log(`Angka ${nilaiInt} merupakan bilangan prima`);
      } else {
        console.log(`Angka ${nilaiInt} bukan merupakan bilangan prima`);
      }
  
      rl.close();
    });
  }
  
  // Fungsi untuk mengecek apakah bilangan prima
  function cekPrima(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  