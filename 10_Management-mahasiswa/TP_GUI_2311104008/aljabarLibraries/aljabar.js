// aljabar.js
function akarPersamaanKuadrat(persamaan) {
    const [a, b, c] = persamaan;
    const diskriminan = b * b - 4 * a * c;

    if (diskriminan < 0) {
        throw new Error("Diskriminan negatif, akar imajiner.");
    }

    const akar1 = (-b + Math.sqrt(diskriminan)) / (2 * a);
    const akar2 = (-b - Math.sqrt(diskriminan)) / (2 * a);
    return [akar1, akar2];
}

function hasilKuadrat(persamaan) {
    const [a, b] = persamaan;
    const hasilA = a * a;
    const hasilB = 2 * a * b;
    const hasilC = b * b;
    return [hasilA, hasilB, hasilC];
}

module.exports = {
    akarPersamaanKuadrat,
    hasilKuadrat
};

