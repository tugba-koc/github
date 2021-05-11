let userName = prompt("lütfen adınızı girin");

let userNameEnter = document.getElementById("myName");

userNameEnter.innerHTML = userName;

function showTime() {
  let timeNow = new Date();
  let hours = timeNow.getHours();
  let minutes = timeNow.getMinutes();
  let seconds = timeNow.getSeconds();
  let day;
  switch (timeNow.getDay()) {
    case 0:
      day = "Pazar";
      break;

    case 1:
      day = "Pazartesi";
      break;

    case 2:
      day = "Salı";
      break;

    case 3:
      day = "Çarşamba";
      break;

    case 4:
      day = "Perşembe";
      break;

    case 5:
      day = "Cuma";
      break;

    case 6:
      day = "Cumartesi";
      break;
  }
  let timeString = hours;
  timeString += (minutes < 10 ? ":0" : ":") + minutes;
  timeString += (seconds < 10 ? ":0" : ":") + seconds;
  document.getElementById("myClock").innerHTML = timeString + " " + day;
  timerID = setTimeout("showTime()", 1000);
}
