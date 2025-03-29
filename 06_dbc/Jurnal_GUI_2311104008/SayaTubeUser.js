const SayaTubeVideo = require('./SayaTubeVideo');

class SayaTubeUser {
    constructor(username) {
        if (username === null || username.length > 100) {
            throw new Error("Username tidak boleh kosong dan maksimal 100 karakter");
        }
        this.username = username;
        this.uploadedVideos = [];
    }

    addVideo(video) {
        if (!(video instanceof SayaTubeVideo)) {
            throw new Error("Objek yang ditambahkan harus instance dari SayaTubeVideo");
        }
        this.uploadedVideos.push(video);
    }

    getTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((sum, video) => sum + video.playCount, 0);
    }

    printAllVideoPlaycount() {
        console.log(`User: ${this.username}`);
        this.uploadedVideos.slice(0, 8).forEach((video, index) => {
            console.log(`Video ${index + 1} judul: ${video.title}`);
        });
    }
}

module.exports = SayaTubeUser;
