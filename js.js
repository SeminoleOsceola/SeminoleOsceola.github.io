
//  <button onclick="settime1()" type="button"> <ul> Audio time: 7:05-10:48 </ul> </button>

var video = document.getElementById("audio_Fix");

function settime1() {
  video.currentTime = 2;
  video.play();
  setInterval(function () { if (video.currentTime > 315) { video.pause(); } });
}
function settime2() {
  video.currentTime = 310;
  video.play();
  setInterval(function () { if (video.currentTime > 1589) { video.pause(); } });
}
function settime3() {
  video.currentTime = 1588;
  video.play();
  setInterval(function () { if (video.currentTime > 2195) { video.pause(); } });
}
function settime4() {
  video.currentTime = 2187;
  video.play();
  setInterval(function () { if (video.currentTime > 2528) { video.pause(); } });
}


/* <ul id="ul_Audio">audio-time: 3:17 </ul> */

// <!-- <button onclick="setCurTime()" type="button"> Set current time: x:xxx </button> -->
// <!-- <button style="border-radius: 15px;" onclick="settime1()"><ul id="ul_Audio">Audio time: 7:05-10:48</ul></button> -->

// var vid0 = document.getElementById("audio_Fix");
// var vid1 = document.getElementById("audio_Fix");
// var vid2 = document.getElementById("audio_Fix");
// var vid3 = document.getElementById("audio_Fix");


// function setCurTime() {
//   vid0.currentTime = 197;
// }
// function setCurTime() {
//   vid1.currentTime = 425;
// }
// function setCurTime() {
//   vid2.currentTime = 646;
// }
// function setCurTime() {
//   vid3.currentTime = 885;
// }
