const readline = require('readline');
const CovidConfig = require('./convidConfig.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const config = new CovidConfig();

rl.question(`Berapa suhu badan anda saat ini? Dalam nilai ${config.satuan_suhu}: `, (suhuInput) => {
    const suhu = parseFloat(suhuInput);

    rl.question('Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala demam? ', (hariInput) => {
        const hariDemam = parseInt(hariInput);

        let suhuNormal = false;

        if (config.satuan_suhu.toLowerCase() === "celcius") {
            suhuNormal = suhu >= 36.5 && suhu <= 37.5;
        } else if (config.satuan_suhu.toLowerCase() === "fahrenheit") {
            suhuNormal = suhu >= 97.7 && suhu <= 99.5;
        }

        const hariAman = hariDemam < config.batas_hari_deman;

        if (suhuNormal && hariAman) {
            console.log(config.pesan_diterima);
        } else {
            console.log(config.pesan_ditolak);
        }

        console.log('\nMengubah satuan suhu...');
        config.ubahSatuan();
        console.log(`Satuan suhu sekarang: ${config.satuan_suhu}`);

        rl.close();
    });
});
