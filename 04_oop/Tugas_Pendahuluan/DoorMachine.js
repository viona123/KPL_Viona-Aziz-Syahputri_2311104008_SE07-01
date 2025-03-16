class DoorMachine {
    constructor() {
        this.state = "Terkunci";
        this.printState();
    }

    kunci() {
        this.state = "Terkunci";
        this.printState();
    }

    buka() {
        this.state = "Terbuka";
        this.printState();
    }

    printState() {
        if (this.state === "Terkunci") {
            console.log("Pintu terkunci");
        } else {
            console.log("Pintu tidak terkunci");
        }
    }
}

module.exports = DoorMachine;
