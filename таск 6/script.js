const tracks = [
    { name: "Diva", artist: "Beyonce", file: "diva.mp3", cover: "diva.jpg" },
    { name: "Sad girl", artist: "Lana Del Rey", file: "sad girl.mp3", cover: "sad girl.jpg" },
    { name: "Highest in the room", artist: "Travis Scott", file: "HIGHEST IN THE ROOM.mp3", cover: "highest in the room.jpg" }
];

let currentTrackIndex = 0;
let isPlaying = false;
const audio = new Audio();

function loadTrack(index) {
    const track = tracks[index];
    document.getElementById("track-name").textContent = track.name;
    document.getElementById("artist-name").textContent = track.artist;
    document.getElementById("cover").src = track.cover;
    audio.src = track.file;
    audio.load();
}

function previousTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    isPlaying = true;
    document.getElementById("play-pause").textContent = "❚❚"; 
}


document.getElementById("previous").addEventListener("click", previousTrack);


function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        document.getElementById("play-pause").textContent = "►";
    } else {
        audio.play();
        document.getElementById("play-pause").textContent = "❚❚";
    }
    isPlaying = !isPlaying;
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    isPlaying = true;
    document.getElementById("play-pause").textContent = "❚❚";
}

function selectTrack(index) {
    currentTrackIndex = index;
    loadTrack(currentTrackIndex);
    audio.play();
    isPlaying = true;
    document.getElementById("play-pause").textContent = "❚❚";
}

function populateTrackList() {
    const trackList = document.getElementById("track-list");
    tracks.forEach((track, index) => {
        const li = document.createElement("li");
        li.textContent = track.name;
        li.addEventListener("click", () => selectTrack(index));
        trackList.appendChild(li);
    });
}

audio.addEventListener("ended", nextTrack);
window.addEventListener("load", () => {
    loadTrack(currentTrackIndex);
    populateTrackList();
});
