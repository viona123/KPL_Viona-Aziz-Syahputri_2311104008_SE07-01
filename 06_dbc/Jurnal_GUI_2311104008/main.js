const SayaTubeUser = require('./SayaTubeUser');
const SayaTubeVideo = require('./SayaTubeVideo');

const user = new SayaTubeUser("Viona Aziz Syahputri");

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

videos.forEach(title => {
    let video = new SayaTubeVideo(title);
    video.increasePlayCount(Math.floor(Math.random() * 25000000)); 
    user.addVideo(video);
});

user.printAllVideoPlaycount();
