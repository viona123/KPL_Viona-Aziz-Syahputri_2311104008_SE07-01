class SayaTubeVideo {
    constructor(title) {
        if (!title || title.length > 100) {
            throw new Error("Judul tidak boleh kosong dan maksimal 100 karakter.");
        }
        this.id = Math.floor(10000 + Math.random() * 90000); // Generate ID 5 digit random
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        if (count > 10000000) {
            throw new Error("Penambahan play count maksimal 10.000.000 per panggilan.");
        }
        if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
            throw new Error("Overflow: play count terlalu besar.");
        }
        this.playCount += count;
    }

    printVideoDetails() {
        console.log(`ID Video: ${this.id}`);
        console.log(`Judul Video: ${this.title}`);
        console.log(`Jumlah Play: ${this.playCount}`);
    }
}

module.exports = SayaTubeVideo;
