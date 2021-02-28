
// handle displaying the day of the week, month, and date
var today = moment();
$(document).ready(function() {
    $('#currentDay').text(today.format('dddd, MMMM Do'));

    $('.saveBtn').click(function() {
        var hour = $(this).parent().attr('data-hour');
        var task = $(this).prev().val();
        localStorage.setItem(hour, task);

        
    })
    var timeBlocks = $('.time-block')
    for(let i=0; i < timeBlocks.length; i++){
        let hourlyTimeElement = timeBlocks[i]
        console.log(hourlyTimeElement)
        let perHour = hourlyTimeElement.dataset.hour
        let perText = localStorage.getItem(perHour)
        let perRow = hourlyTimeElement.children[1]
        perRow.textContent = perText
        console.log(parseInt(perHour) < parseInt(moment().format('H')), perHour < moment().format('H'));
        // compare with if statements to determine block colors
        if(parseInt(perHour) < parseInt(today.format('H'))) {
            $(perRow).attr("class", "col-md-10 description past")
            
        }
        else if(parseInt(perHour) === parseInt(today.format('H'))) {
            $(perRow).attr("class", "col-md-10 description present")
            
        }
        else {
            $(perRow).attr("class", "col-md-10 description future")
            
        }

    }
    setInterval(function(){
        console.log(moment().format('H'))
        today = moment()
    },1000)
});

