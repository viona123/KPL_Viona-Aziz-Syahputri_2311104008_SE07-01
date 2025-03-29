class SayaTubeVideo {
    constructor(title) {
        this.id = Math.floor(10000 + Math.random() * 90000); // Generate ID 5 digit random
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        this.playCount += count;
    }

    printVideoDetails() {
        console.log(`ID Video: ${this.id}`);
        console.log(`Judul Video: ${this.title}`);
        console.log(`Jumlah Play: ${this.playCount}`);
    }
}

module.exports = SayaTubeVideo;
