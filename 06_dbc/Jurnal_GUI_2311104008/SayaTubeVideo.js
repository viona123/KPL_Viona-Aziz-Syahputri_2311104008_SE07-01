class SayaTubeVideo {
    constructor(title) {
        if (title === null || title.length > 200) {
            throw new Error("Judul video tidak boleh kosong dan maksimal 200 karakter");
        }
        this.id = Math.floor(10000 + Math.random() * 90000); // ID acak 5 digit
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        if (count < 0 || count > 25000000) {
            throw new Error("Jumlah play count tidak valid, harus antara 0 - 25.000.000");
        }
        this.playCount += count;
    }

    printVideoDetails() {
        console.log(`Video ID: ${this.id}`);
        console.log(`Judul: ${this.title}`);
        console.log(`Jumlah Play: ${this.playCount}`);
    }
}

module.exports = SayaTubeVideo;
