const SayaTubeVideo = require("./SayaTubeVideo");

try {
    let video = new SayaTubeVideo("Tutorial Design By Contract – [NAMA_PRAKTIKAN]");
    video.printVideoDetails();

    video.increasePlayCount(5000);
    video.printVideoDetails();

    // Uji error: Play count lebih dari 10.000.000
    try {
        video.increasePlayCount(20000000);
    } catch (err) {
        console.error(`Error: ${err.message}`);
    }

    // Uji overflow
    for (let i = 0; i < 3; i++) {
        try {
            video.increasePlayCount(10000000);
        } catch (err) {
            console.error(`Error: ${err.message}`);
        }
    }
} catch (err) {
    console.error(`Error: ${err.message}`);
}
