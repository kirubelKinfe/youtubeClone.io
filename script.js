let menuIcon = document.querySelector('.menu-icon');
let sidebar = document.querySelector('.sidebar');
let vid = document.querySelector('#vid');

let vid1 = document.getElementById('vd1');
let vid2 = document.getElementById('vd2');
let vid3 = document.getElementById('vd3');
let vid4 = document.getElementById('vd4');
let vid5 = document.getElementById('vd5');
let vid6 = document.getElementById('vd6');
let vid7 = document.getElementById('vd7');

menuIcon.onclick = function() {
  sidebar.classList.toggle("small-sidebar");
}

vid1.addEventListener('click', () => {
   window.location = "http://127.0.0.1:5500/YoutubeClone/videoView.html";
});

