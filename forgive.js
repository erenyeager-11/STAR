function playMusic() {
  const music = document.getElementById("apology-song");
  music.play();
  document.getElementById("musicModal").style.display = "none"; // Hide modal after choosing
}

function playForgiveMusic() {
  const forgiveMusic = document.getElementById("forgive-song");
  forgiveMusic.play();
  document.getElementById("forgiveMusicModal").style.display = "none"; // Hide modal after choosing
}

function openForgivePage() {
  window.open("forgive.html", "_blank");
}

window.onload = () => {
  document.getElementById("musicModal").style.display = "flex"; // Show modal on load for index
};