// Set the date we're counting down to
var countDownDate = new Date("Oct 8, 2017 15:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    if (days < 10) {
        days = "0" + days;
    }

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) {
        hours = "0" + hours;
    }

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var openingTag = "<td class=\"countdown-element\">"
    var closingTag = "</td>";

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = openingTag + days + closingTag + openingTag + hours + closingTag
    + openingTag + minutes + closingTag + openingTag + seconds + closingTag;

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "End of Current Phase";
    }
}, 1000);