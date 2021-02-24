// select the existing DOM element


// handle displaying the day of the week, month, and date
var today = moment()
$('#currentDay').text(today.format('dddd, MMMM Do'));


// var container = $('.container')
// // var table = $('<table>')
// var ul = $('<ul>')
// container.append(ul);


// // for loop that display's the 9-5 calendar day
// for (i = 9; i < 18; i++) {
//     var tr= $('<tr>');
//     var td=$('<td>');
//     td.text(i)
//     tr.append(td)
// ul.append(tr)
// }
// // ^Needs = moment().format('h:mm a');

