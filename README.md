# professional-work-day-scheduler
A simple calendar application that allows a user to save events for each hour of the day by modifying starter code

# Description

The first element I noticed was missing was the date in the header. I used a variable and an id to generate the date with moment.js. After formatting the date to match the supplied animation I moved on to the hour blocks. 

Initially I thought the best way to organize the scheduler was a table in javascript with a for loop. I ultimately abandoned this idea after understanding that the scheduler would be static. Instead, I built the application within HTML. After building the time-blocks within HTML I looked up grid layouts in bootstrap. I found col-m-# which works with a 12 layout grid. I combined the layout with the classes supplied in the css file to create the schedule view.