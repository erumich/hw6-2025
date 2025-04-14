
window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

let video = document.getElementById("player1")


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate = video.playbackRate - 0.1;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate = video.playbackRate + 0.1;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if (video.currentTime <= 67) {
		// video = 1 min 7 seconds
	video.currentTime = video.currentTime+10;}
	else {video.currentTime = 0}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted === false) {
        console.log("Mute");
        video.muted = true;
        document.getElementById("mute").innerText = "Unmute";
    } else {
        console.log("Unmute");
        video.muted = false;
        document.getElementById("mute").innerText = "Mute";
    }
});

let volumeControl = document.getElementById("slider");

volumeControl.addEventListener('input', function() {
	video.volume = this.value / 100;
	document.getElementById("volume").textContent = (video.volume * 100) + "%";
});
// https://stackoverflow.com/questions/31926221/video-volume-slider-in-html5-and-javascript

document.querySelector("#vintage").addEventListener("click", function() {
	document.getElementById("player1").classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	document.getElementById("player1").classList.remove("oldSchool");
});