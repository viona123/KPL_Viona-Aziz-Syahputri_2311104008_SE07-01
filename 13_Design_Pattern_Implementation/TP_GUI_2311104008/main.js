// Subject (Publisher)
class Subject {
    constructor() {
        this.observers = [];
    }

    // Menambahkan observer
    attach(observer) {
        this.observers.push(observer);
    }

    // Menghapus observer
    detach(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Memberitahu semua observer
    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

// Observer
class Observer {
    constructor(name) {
        this.name = name;
    }

    update(data) {
        console.log(`${this.name} menerima update: ${data}`);
    }
}

// Main
const main = () => {
    const subject = new Subject();

    const observer1 = new Observer("Observer 1");
    const observer2 = new Observer("Observer 2");

    subject.attach(observer1);
    subject.attach(observer2);

    console.log("Update pertama:");
    subject.notify("Harga naik 10%");

    console.log("\nObserver 2 keluar...");
    subject.detach(observer2);

    console.log("Update kedua:");
    subject.notify("Harga turun 5%");
};

main();

