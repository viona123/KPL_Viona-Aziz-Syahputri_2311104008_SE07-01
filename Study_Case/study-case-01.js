// Nama: Viona Aziz Syahputri
// NIM: 2311104008

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let totalHarga = 0;
let items = [];

rl.question("Masukkan jumlah barang yang dibeli: ", (totalItems) => {
    totalItems = parseInt(totalItems);
    let count = 0;

    function inputHarga() {
        if (count < totalItems) {
            rl.question(`Masukkan harga barang ke-${count + 1}: `, (harga) => {
                harga = parseFloat(harga);
                items.push(harga);
                totalHarga += harga;
                count++;
                inputHarga(); // Rekursi untuk meminta input harga berikutnya
            });
        } else {
            // Menentukan kategori diskon
            let kategoriDiskon = "";
            if (totalHarga > 100000) {
                kategoriDiskon = "Diskon Besar";
            } else if (totalHarga >= 50000 && totalHarga <= 100000) {
                kategoriDiskon = "Diskon Sedang";
            } else {
                kategoriDiskon = "Tidak Ada Diskon";
            }

            // Menampilkan hasil
            console.log(`\nTotal harga: Rp${totalHarga}`);
            console.log(`Jumlah barang: ${totalItems}`);
            console.log(`Kategori diskon: ${kategoriDiskon}`);

            // Menampilkan informasi tambahan
            items.forEach((harga, index) => {
                console.log(`Barang ke-${index + 1}: Rp${harga}`);
            });

            rl.close();
        }
    }

    inputHarga();
});
