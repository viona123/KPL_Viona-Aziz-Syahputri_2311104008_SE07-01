const aljabar = require('./aljabarLibraries/aljabar');

try {
    const hasil = aljabar.hasilKuadrat([2, -3]);
    console.log("Hasil Kuadrat dari 2x - 3:");
    console.log(`${hasil[0]}x^2 + ${hasil[1]}x + ${hasil[2]}`);

    const akar = aljabar.akarPersamaanKuadrat([1, -3, -10]);
    console.log("\nAkar dari persamaan x^2 - 3x - 10:");
    console.log(`x1 = ${akar[0]}, x2 = ${akar[1]}`);
} catch (e) {
    console.error("Terjadi kesalahan:", e.message);
}

