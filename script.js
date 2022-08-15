const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const days = document.querySelector('#days')


const countDownDate = new Date("September 01, 2022 12:00:00").getTime()

var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now




    var daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);


    days.innerHTML = daysLeft
    hours.innerHTML = hoursLeft
    minutes.innerHTML = minutesLeft
    seconds.innerHTML = secondsLeft

}, 1000)