// set the date we're counting down to
var countDownDate = new Date("October 2, 2024 06:30:00").getTime();

// update the count down every 1 second
var x = setInterval(function() {

  // get the date & time NOW
  var now = new Date().getTime();

  // the difference between the future time and the NOW time
  var distance = countDownDate - now;

  // time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // display the result
  document.getElementById("satTime").innerHTML = "Days until (doomsday): " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // basically if countdown is finished
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("satTime").innerHTML = "nmsqt countdown has ended";
  }
}, 1000);

let count = 0;

function whatsMyName() { // picks a random name each second
    var name = document.getElementById("myName");

    // name.style.fontSize = "56px"; 

    let names = ["Enemi.", "Tobi.", "Eminem?", "idk....", "melon :>", "silly :3"];
    count++;

    document.getElementById("myName").innerHTML = "Hi, I'm " + names[count % (names.length)];

    if (count > 100) {
      count = 0;
    }

    
    name.style.fontSize = "64px"; 
}

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

let ageCounter = document.getElementById("age");

ageCounter.innerHTML = getAge("2008/08/15") + " years old (unc)";

setInterval(whatsMyName, 1000); // change name every second