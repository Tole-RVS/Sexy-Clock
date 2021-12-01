function time() {
  let current = new Date();
  let hour = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    hour12: false
  });

  let minute = current.toLocaleTimeString("en-US", {
    minute: "2-digit",
  });

  let second = current.toLocaleTimeString("en-US", {
    second: "2-digit",
  });

  hour = hour*30  //because every hour has 30 degrees
  hour += 90 //because elements are placed horizontaly, so this makes them vertical
  hour += minute/2 // an hour has 30 degrees, so 30 minutes will have 15 degrees; 30/15=2

  minute = minute*6
  minute +=90;
  minute += second/10 //one minute has 6 degrees, so 30 seconds will have 3 degrees; 30/3=10

  second = second*6
  second +=90;
  document.getElementById("sekunde").style.transform = "rotate(" + second + "deg)";
  document.getElementById("minute").style.transform = "rotate(" + minute + "deg)";
  document.getElementById("sati").style.transform = "rotate(" + hour + "deg)";

  setTimeout(time, 1000); //every 1000ms this function will be called
}
time()
