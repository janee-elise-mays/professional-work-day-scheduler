// select the existing DOM element
$('.container');

// handle displaying the day of the week, month, and date
    var today = moment()
    $('#currentDay').text(today.format('dddd, MMMM Do'));


