class PusatDataSingleton {
  constructor() {
    if (PusatDataSingleton._instance) {
      throw new Error("Gunakan PusatDataSingleton.getDataSingleton()");
    }
    this.DataTersimpan = [];
  }

  static getDataSingleton() {
    if (!PusatDataSingleton._instance) {
      PusatDataSingleton._instance = new PusatDataSingleton();
    }
    return PusatDataSingleton._instance;
  }

  getSemuaData() {
    return this.DataTersimpan;
  }

  printSemuaData() {
    console.log("Isi Data:");
    this.DataTersimpan.forEach((data, index) => {
      console.log(`${index + 1}. ${data}`);
    });
  }

  addSebuahData(input) {
    this.DataTersimpan.push(input);
  }

  hapusSebuahData(index) {
    if (index >= 0 && index < this.DataTersimpan.length) {
      this.DataTersimpan.splice(index, 1);
    } else {
      console.log("Index tidak valid.");
    }
  }
}

module.exports = PusatDataSingleton;

