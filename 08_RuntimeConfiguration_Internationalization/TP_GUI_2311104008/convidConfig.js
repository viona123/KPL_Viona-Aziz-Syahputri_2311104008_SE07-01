const fs = require('fs');

class CovidConfig {
    constructor() {
        this.filePath = 'covid_config.json';
        if (fs.existsSync(this.filePath)) {
            const data = fs.readFileSync(this.filePath);
            const config = JSON.parse(data);
            this.satuan_suhu = config.satuan_suhu;
            this.batas_hari_deman = config.batas_hari_deman;
            this.pesan_ditolak = config.pesan_ditolak;
            this.pesan_diterima = config.pesan_diterima;
        } else {
            this.satuan_suhu = "celcius";
            this.batas_hari_deman = 14;
            this.pesan_ditolak = "Anda tidak diperbolehkan masuk ke dalam gedung ini";
            this.pesan_diterima = "Anda dipersilahkan untuk masuk ke dalam gedung ini";
            this.saveConfig();
        }
    }

    saveConfig() {
        const config = {
            satuan_suhu: this.satuan_suhu,
            batas_hari_deman: this.batas_hari_deman,
            pesan_ditolak: this.pesan_ditolak,
            pesan_diterima: this.pesan_diterima
        };
        fs.writeFileSync(this.filePath, JSON.stringify(config, null, 4));
    }

    ubahSatuan() {
        if (this.satuan_suhu.toLowerCase() === "celcius") {
            this.satuan_suhu = "fahrenheit";
        } else {
            this.satuan_suhu = "celcius";
        }
        this.saveConfig();
    }
}

module.exports = CovidConfig;
