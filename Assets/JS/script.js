//Assign variables
var dateDisplayEl = $('#currentDay');
var containerEl = $('.container');
var timesArray = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5]; //Array with each hour I want to display on the page
var timeNowHH = moment().format("HH");
var alertEl = $('.alert');
var sundayEl = $('#sunday');
var mondayEl = $('#monday');
var tuesdayEl = $('#tuesday');
var wednesdayEl = $('#wednesday');
var thursdayEl = $('#thursday');
var fridayEl = $('#friday');
var saturdayEl = $('#saturday');
var today = moment().format('dddd').toLowerCase();
var todayMMDD = moment().format('MM/DD');
var highlightedDay = moment().format('MM/DD');


//Displays the date at the top of the page using moment
function displayDate() {
    var rightNow = moment().format('dddd, MMMM Do');
    dateDisplayEl.text(rightNow);

};

function highlightToday() {
    switch (today) {
        case "sunday":
            sundayEl.parent().parent().addClass('highlight');
            break;
        case "monday":
            mondayEl.parent().parent().addClass('highlight');
            break;
        case "tuesday":
            tuesdayEl.parent().parent().addClass('highlight');
            break;
        case "wednesday":
            wednesdayEl.parent().parent().addClass('highlight');
            break;
        case "thursday":
            thursdayEl.parent().parent().addClass('highlight');
            break;
        case "friday":
            fridayEl.parent().parent().addClass('highlight');
            break;  
        case "saturday":
            saturdayEl.parent().parent().addClass('highlight');
            break;
    }

}

//display the date in the calendar at the top of the html in MM/DD format for each block
function calendarDates() {
    var date = moment().format('MM/DD')
    if(today === "sunday") {
        sundayEl.text(date);
        mondayEl.text(moment().add(1,'days').format('MM/DD'))
        tuesdayEl.text(moment().add(2,'days').format('MM/DD'))
        wednesdayEl.text(moment().add(3,'days').format('MM/DD'))
        thursdayEl.text(moment().add(4,'days').format('MM/DD'))
        fridayEl.text(moment().add(5,'days').format('MM/DD'))
        saturdayEl.text(moment().add(6,'days').format('MM/DD'))
    } else if(today === "monday") {
        sundayEl.text(moment().subtract(1,'days').format('MM/DD'))
        mondayEl.text(date)
        tuesdayEl.text(moment().add(1,'days').format('MM/DD'))
        wednesdayEl.text(moment().add(2,'days').format('MM/DD'))
        thursdayEl.text(moment().add(3,'days').format('MM/DD'))
        fridayEl.text(moment().add(4,'days').format('MM/DD'))
        saturdayEl.text(moment().add(5,'days').format('MM/DD'))
    }
    else if (today === "tuesday") {
        sundayEl.text(moment().subtract(2,'days').format('MM/DD'))
        mondayEl.text(moment().subtract(1,'days').format('MM/DD'))
        tuesdayEl.text(date)
        wednesdayEl.text(moment().add(1,'days').format('MM/DD'))
        thursdayEl.text(moment().add(2,'days').format('MM/DD'))
        fridayEl.text(moment().add(3,'days').format('MM/DD'))
        saturdayEl.text(moment().add(4,'days').format('MM/DD'))
    } else if (today === "wednesday") {
        sundayEl.text(moment().subtract(3,'days').format('MM/DD'))
        mondayEl.text(moment().subtract(2,'days').format('MM/DD'))
        tuesdayEl.text(moment().subtract(1,'days').format('MM/DD'))
        wednesdayEl.text(date)
        thursdayEl.text(moment().add(1,'days').format('MM/DD'))
        fridayEl.text(moment().add(2,'days').format('MM/DD'))
        saturdayEl.text(moment().add(3,'days').format('MM/DD'))
    } else if (today === "thursday") {
        sundayEl.text(moment().subtract(4,'days').format('MM/DD'))
        mondayEl.text(moment().subtract(3,'days').format('MM/DD'))
        tuesdayEl.text(moment().subtract(2,'days').format('MM/DD'))
        wednesdayEl.text(moment().subtract(1,'days').format('MM/DD'))
        thursdayEl.text(date)
        fridayEl.text(moment().add(1,'days').format('MM/DD'))
        saturdayEl.text(moment().add(2,'days').format('MM/DD'))
    } else if (today === "friday") {
        sundayEl.text(moment().subtract(5,'days').format('MM/DD'))
        mondayEl.text(moment().subtract(4,'days').format('MM/DD'))
        tuesdayEl.text(moment().subtract(3,'days').format('MM/DD'))
        wednesdayEl.text(moment().subtract(2,'days').format('MM/DD'))
        thursdayEl.text(moment().subtract(1,'days').format('MM/DD'))
        fridayEl.text(date)
        saturdayEl.text(moment().add(1,'days').format('MM/DD'))
    } else if (today === "saturday") {
        sun.text(moment().subtract(6,'days').format('MM/DD'))
        mondayEl.text(moment().subtract(5,'days').format('MM/DD'))
        tuesdayEl.text(moment().subtract(4,'days').format('MM/DD'))
        wednesdayEl.text(moment().subtract(3,'days').format('MM/DD'))
        thursdayEl.text(moment().subtract(2,'days').format('MM/DD'))
        fridayEl.text(moment().subtract(1,'days').format('MM/DD'))
        saturdayEl.text(date)
    } 

}

//Creates each time block and populates it with the time for each hour
function createTimeBlocks() {
    
    for(i = 0; i < timesArray.length; i++) { //for each time in the timesArray, a time block is created
        var createUl = $('<ul>');
        createUl.addClass('list-group list-group-horizontal') //Bootstrap classes for formatting

        var createLi = $('<li>');
        createLi.addClass('list-group-item hour');
        

        var createLabel = $('<label>')
        createLabel.attr('for', 'planner' + i);
        if(timesArray[i] > 7 && timesArray[i] < 12) { //if statement to determine if am or pm
            createLabel.text(timesArray[i] + "am");
            createLi.attr('id',timesArray[i] + "am");
        } else {
            createLabel.text(timesArray[i] + "pm");
            createLi.attr('id',timesArray[i] + "pm");
        }

        createLi.append(createLabel);

        var createInput = $('<textarea>');
        createInput.addClass('form-control md-textara');
        createInput.attr('type', 'test');
        createInput.attr('rows','3')
        createInput.attr('id', 'planner' + i);
        createInput.attr('aria-describedby', 'button-addon2');
        

        var createButton = $('<button>');
        createButton.addClass('btn btn-info save-btn fa');
        createButton.attr('type', 'button');
        createButton.attr('id', 'buttonS' + i);

        var createI = $('<i>'); //creating the save icon
        createI.addClass('fa fa-save');
        createButton.append(createI);

        var buttonDiv = $('<div>')
        buttonDiv.addClass('btn-group-vertical');

        var deleteButton = $('<button>');
        deleteButton.addClass('btn btn-info delete-btn fa');
        deleteButton.attr('type', 'button');
        deleteButton.attr('aria-label', 'Close');
        deleteButton.attr('id', 'buttonD' + i);
        deleteButton.html("&#10006"); //unicode for X

        buttonDiv.append(createButton);
        buttonDiv.append(deleteButton);

        createUl.append(createLi);
        createUl.append(createInput);
        createUl.append(buttonDiv);

        containerEl.append(createUl);
    }
    
}

//determines past, present and future for coloring of time blocks
function colorCode() {
    
   for (i = 0; i < timesArray.length; i++) { 
    var inputId = 'planner' + i;
    var inputSelector = $('#'+ inputId);
        //resets the classes for each time block before color coding them in the if statement below
        inputSelector.attr('class','form-control md-textara');
        //if the highlighted day is today, color codes the time blocks accordingly
        if(todayMMDD === highlightedDay && timesArray[i] > 7 && timesArray[i] <= 12) { //for the am times
            console.log("Accessing this code!")
            if (timeNowHH == timesArray[i]) { //compares the time to moment in HH format
                inputSelector.addClass('present');
            } else if(timeNowHH > timesArray[i]){
                inputSelector.addClass('past');
            } else if(timeNowHH < timesArray[i]) {
                inputSelector.addClass('future');
            }
        } else if (todayMMDD === highlightedDay){
            var newTime = timesArray[i] + 12; //for the pm times
            if (timeNowHH == newTime) { //compares the time to moment in HH format
                inputSelector.addClass('present');
            } else if(timeNowHH > newTime) {
                inputSelector.addClass('past');
            } else if(timeNowHH < newTime) {
                inputSelector.addClass('future');
            }
        //if the highlighted day is before today, color code time blocks as 'past'
        } else if (highlightedDay < todayMMDD){
            inputSelector.addClass('past');
        //if the highlighted day is after today, color code time blocks as 'future'
        } else if (highlightedDay > todayMMDD) {
            console.log("Future")
            inputSelector.addClass('future');
        }
    }
}


//adds event listener for each save button to save the time block entry to local storage and display it at the top of the page for 3.5 seconds
function saveData() {


    $('.save-btn').on("click", function(event){
        console.log(highlightedDay)
        
        indexVal = event.currentTarget.id.charAt(event.currentTarget.id.length - 1)
        
        var calendarEntry = $('#planner'+indexVal).val();
        console.log(calendarEntry)

        entryTime = $(event.currentTarget).parent().parent().children()[0].id;

        // localStorage.setItem(moment().format('MM/DD') + '#planner'+indexVal, calendarEntry);

        localStorage.setItem(highlightedDay+'#planner'+indexVal, calendarEntry);
        if (calendarEntry !== "") {
            if(highlightedDay === todayMMDD) {
            alertEl.text('You added "' + calendarEntry + '" to your schedule at ' + entryTime + " today." );
            setTimeout(function(){
                alertEl.text("")
            }, 3500);
            } else {
            alertEl.text('You added "' + calendarEntry + '" to your schedule at ' + entryTime + " on " + highlightedDay + "." );
            setTimeout(function(){
                alertEl.text("")
            }, 3500);
            }
        }

    });

};

//adds event listener for each delete button to remove the time block entry from local storage
function deleteData() {

    $('.delete-btn').on("click", function(event){
        indexVal = event.currentTarget.id.charAt(event.currentTarget.id.length - 1)
        console.log(indexVal)
        
        var calendarEntry = $('#planner'+indexVal)

        localStorage.removeItem(highlightedDay+'#planner'+indexVal);
        calendarEntry.val("");

        getData();

    });

};

//for each time block, gets information saved to local storage to display
function getData() {

    for(i = 0; i < 10; i++) {
        
       var inputEl = '#planner' + i;
       var selectInput = $(inputEl)
       selectInput.val("")
       var storageItem = highlightedDay + inputEl;
       var localStorageItem = localStorage.getItem(storageItem);
       if(localStorageItem){
           selectInput.val(localStorageItem);
       } 
    }
}

//At midnight, the calendar is cleared
// function clearDay() {
//     if (timeNowHH == 24) {
//         localStorage.clear();
//     }
// }

//when one of the calendar blocks at the top is clicked, it un-highlights all of them and highlights the one clicked
//also it re-assigns the global varible highlightedDay to be the date clicked which feeds into the save data, delete data and get data functions
function clickCalendar() {
$('.week').click(function(event){
    dateClicked = event.currentTarget;
    idText = dateClicked.children[1].children[0].id
    calendarDate = $('#'+ idText).text()

    sundayEl.parent().parent().attr('class','card text-center week');
    mondayEl.parent().parent().attr('class','card text-center week');
    tuesdayEl.parent().parent().attr('class','card text-center week');
    wednesdayEl.parent().parent().attr('class','card text-center week');
    thursdayEl.parent().parent().attr('class','card text-center week');
    fridayEl.parent().parent().attr('class','card text-center week');
    saturdayEl.parent().parent().attr('class','card text-center week');

    var cardId = event.currentTarget.id;
    $('#'+cardId).addClass('highlight');

    
    highlightedDay = calendarDate;
    
    getData();
    colorCode();
    // console.log(event.currentTarget.children[1].children[0].TEXT_NODE)
})



}

//function to initialize all functions to run
function init() {
    displayDate();
    highlightToday();
    calendarDates();
    createTimeBlocks();
    colorCode();
    saveData();
    deleteData();
    getData();
    clickCalendar();
};

//Updates the date every second so that the functions are keeping everything up to date
setInterval(displayDate, 1000);
//Updates the color coding on the time blocks every half hour
setInterval(colorCode, 50000);


init();

