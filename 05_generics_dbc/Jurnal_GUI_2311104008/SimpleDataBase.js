class SimpleDataBase {
    constructor() {
        this.storedData = [];
        this.inputDates = [];
    }

    addNewData(data) {
        this.storedData.push(data);
        this.inputDates.push(new Date().toISOString());
    }

    printAllData() {
        this.storedData.forEach((data, index) => {
            console.log(`Data ${index + 1} berisi: ${data}, disimpan pada waktu: ${this.inputDates[index]}`);
        });
    }
}

// Contoh pemakaian
const db = new SimpleDataBase();
db.addNewData(10);
db.addNewData(28);
db.addNewData(56);
db.printAllData();
