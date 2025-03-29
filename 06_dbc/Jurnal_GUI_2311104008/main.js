const SayaTubeUser = require('./SayaTubeUser');
const SayaTubeVideo = require('./SayaTubeVideo');

console.log("=== TESTING SAYA TUBE PLATFORM ===\n");

try {
    // Membuat user baru
    const user = new SayaTubeUser("Viona Aziz Syahputri");

    // Membuat beberapa video dan menambahkannya ke user
    const videos = [
        "Review Film Interstellar oleh Viona Aziz Syahputri",
        "Review Film Inception oleh Viona Aziz Syahputri",
        "Review Film The Matrix oleh Viona Aziz Syahputri",
        "Review Film Tenet oleh Viona Aziz Syahputri",
        "Review Film The Dark Knight oleh Viona Aziz Syahputri",
        "Review Film Avengers Endgame oleh Viona Aziz Syahputri",
        "Review Film Spider-Man: No Way Home oleh Viona Aziz Syahputri",
        "Review Film Parasite oleh Viona Aziz Syahputri",
        "Review Film The Godfather oleh Viona Aziz Syahputri",
        "Review Film Joker oleh Viona Aziz Syahputri"
    ];

    // Menambahkan video ke akun user
    videos.forEach(title => {
        let video = new SayaTubeVideo(title);
        video.increasePlayCount(Math.floor(Math.random() * 25000000)); // Random play count
        user.addVideo(video);
    });

    // Menampilkan semua video yang dimiliki user
    user.printAllVideoPlaycount();

    // Menguji exception: Judul kosong
    try {
        let invalidVideo = new SayaTubeVideo(null);
    } catch (error) {
        console.log("\nError:", error.message);
    }

    // Menguji exception: Judul lebih dari 200 karakter
    try {
        let longTitle = "A".repeat(201);
        let invalidVideo2 = new SayaTubeVideo(longTitle);
    } catch (error) {
        console.log("\nError:", error.message);
    }

    // Menguji exception: Play count terlalu besar
    try {
        let videoTest = new SayaTubeVideo("Review Film Test");
        videoTest.increasePlayCount(30000000); // Melebihi batas 25.000.000
    } catch (error) {
        console.log("\nError:", error.message);
    }

} catch (error) {
    console.log("\nTerjadi Kesalahan Besar:", error.message);
}

console.log("\n=== TEST SELESAI ===");
