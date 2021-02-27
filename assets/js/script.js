

var task9 = localStorage.getItem('9')
// set the 9 textarea to task9


setInterval(function(){
    console.log(moment().format('H'))
},1000)

const currentTime = moment();
const hourAhead = moment().add(1, 'hour');
const hourBehind = moment().add(-1,'hour');

if (hourAhead.hour() > currentTime.hour()) {
    // add the future class
   hour =  $('.future');
}
else if (hourAhead.hour() < currentTime.hour()) {
    hour = $('.past');
}
else {
   hour = $('.present');
}
// handle displaying the day of the week, month, and date
$(document).ready(function() {
    var today = moment();
    $('#currentDay').text(today.format('dddd, MMMM Do'));

    var saveBtn = $('.saveBtn');
    var textInput = $('.description');

    $('.saveBtn').each(function() {
        var hour = $(this).parent().attr('data-hour');
        // grab the localstorage
        // set the texarea
        // grab the current time
        // grab the hour time
        // compare them with if statements
    })

    saveBtn.click(function(e) {
        localStorage.setItem('user-input', textInput.value)
        e.preventDefault()
        localStorage.getItem(textInput.value)
    })
        var hour = $(this).parent().attr('hour');
        var task = $(this).prev().val();
        console.log(hour, task)
        localStorage.setItem(hour, task);
    });


});

