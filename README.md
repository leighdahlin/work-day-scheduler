# Day Scheduler

## Summary

This day scheduler is designed to assist you with your daily schedule for the week. It will display the current day's date and a time slot for each hour of the work day. When you press the save button, it saves your entry. 

## Key Features

Key features of the calendar include:

* Dynamic date at the top of the page that will update depending on the day
* Calendar showing the dates for the week, the user can click on a date and the time blocks will pull the data for that day
    * The current day is the default selected day
    * When the user clicks on a different day, that day will become highlighted
    * The time blocks are color coded for past or future, if before or after the current day of the week
* Each time block is created dynamically using a jQuery for loop
    * This makes it easy to change the time blocks all at once for customization
* Dynamic coloring for each input, depending on the time of day
    * Gray for hours past
    * Peach/red for currrent hour
    * Green for future hours
* When you click the save button, an event listener saves your entry to local storage and alerts you that you saved the entry
* When you want to update the entry, it will write over the previous data and store your new entry to local storage
* Bootstap card, input and button components, modified for the calendar entries
* Third-Party APIs:
    * Bootstrap
    * jQuery
    * Google Fonts
* Appealing design
* Media queries allow my page to be responsive on smaller screens

## Link to Deploy

[Workday Calendar](https://leighdahlin.github.io/work-day-scheduler/)

## Screenshots

![Screenshot of Calendar](Assets/Images/calendar-screenshot.png)

##  License & Copyright

(c) Leigh Dahlin, UC Davis Coding Bootcamp

Licensed under the [MIT License](License.md)