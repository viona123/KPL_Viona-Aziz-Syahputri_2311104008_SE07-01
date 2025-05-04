// matematika.js

function fpb(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function kpk(a, b) {
    return (a * b) / fpb(a, b);
}

function turunan(koef) {
    let hasil = '';
    const pangkat = koef.length - 1;

    for (let i = 0; i < pangkat; i++) {
        const k = koef[i];
        const p = pangkat - i;
        const newK = k * p;

        if (newK === 0) continue;

        if (hasil !== '' && newK > 0) hasil += ' + ';
        if (newK < 0) hasil += ' - ';

        hasil += `${Math.abs(newK)}x`;
        if (p - 1 > 1) hasil += `^${p - 1}`;
    }

    return hasil;
}

function integral(koef) {
    let hasil = '';
    const pangkat = koef.length - 1;

    for (let i = 0; i < koef.length; i++) {
        const k = koef[i];
        const p = pangkat - i + 1;
        const newK = k / p;

        if (newK === 0) continue;

        if (hasil !== '' && newK > 0) hasil += ' + ';
        if (newK < 0) hasil += ' - ';

        hasil += `${Math.abs(newK.toFixed(2))}x`;
        if (p > 1) hasil += `^${p}`;
    }

    return hasil + ' + C';
}

module.exports = { fpb, kpk, turunan, integral };
