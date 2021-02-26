// select the existing DOM element
var saveBtn = $('#saveBtn');
var textInput = $('.description');

// handle displaying the day of the week, month, and date
var today = moment()
$('#currentDay').text(today.format('dddd, MMMM Do'));

// function textInput(){
    console.log(localStorage)
// }

// saveBtn.on('click', function() { textInput() });


