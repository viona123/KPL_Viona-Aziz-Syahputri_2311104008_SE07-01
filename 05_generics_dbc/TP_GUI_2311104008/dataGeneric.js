class DataGeneric {
    constructor(data) {
        this.data = data;
    }

    printData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

// Contoh penggunaan
const dataNIM = new DataGeneric("12345678");
dataNIM.printData();

module.exports = DataGeneric;
