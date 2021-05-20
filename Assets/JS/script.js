//Assign variables
var dateDisplayEl = $('#currentDay');
var containerEl = $('.container');
var timesArray = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5]; //Array with each hour I want to display on the page
var timeNowHH = moment().format("HH");
var alertEl = $('.alert');
var mondayEl = $('#monday');
var tuesdayEl = $('#tuesday');
var wednesdayEl = $('#wednesday');
var thursdayEl = $('#thursday');
var fridayEl = $('#friday');


//Displays the date at the top of the page using moment
function displayDate() {
    var rightNow = moment().format('dddd, MMMM Do');
    dateDisplayEl.text(rightNow);

};

function highlightToday() {
    var today = moment().format('dddd').toLowerCase();
    var date = moment().format('MM/DD')
    console.log(today==="thursday")
    // console.log(mondayEl.attr('id')===today)
    console.log(mondayEl.parent().parent())

    // mondayEl.text()

    switch (today) {
        case "monday":
            mondayEl.parent().parent().css('background-color','gray');

            break;
        case "tuesday":
            tuesdayEl.parent().parent().css('background-color','gray');

            break;
        case "wednesday":
            wednesdayEl.parent().parent().css('background-color','gray');

            break;
        case "thursday":
            thursdayEl.parent().parent().css('background','gray');

            break;
        case "friday":
            fridayEl.parent().parent().css('background-color','gray');

            break;  
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
        } else {
            createLabel.text(timesArray[i] + "pm");
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

        if(timesArray[i] > 7 && timesArray[i] <= 12) { //for the am times

            if (timeNowHH == timesArray[i]) { //compares the time to moment in HH format
                inputSelector.addClass('present');
            } else if(timeNowHH > timesArray[i]){
                inputSelector.addClass('past');
            } else if(timeNowHH < timesArray[i]) {
                inputSelector.addClass('future');
            }
        } else {
            var newTime = timesArray[i] + 12; //for the pm times
            if (timeNowHH == newTime) { //compares the time to moment in HH format
                inputSelector.addClass('present');
            } else if(timeNowHH > newTime) {
                inputSelector.addClass('past');
            } else if(timeNowHH < newTime) {
                inputSelector.addClass('future');
            }
            
        } 
    }
}


//adds event listener for each save button to save the time block entry to local storage and display it at the top of the page for 3.5 seconds
function saveData() {

    $('.save-btn').on("click", function(event){
        indexVal = event.currentTarget.id.charAt(event.currentTarget.id.length - 1)
        console.log(indexVal)
        
        var calendarEntry = $('#planner'+indexVal).val();
        console.log(calendarEntry)

        localStorage.setItem('#planner'+indexVal, calendarEntry);
        if (calendarEntry !== "") {
            alertEl.text('You added "' + calendarEntry + '" to your schedule at ' + timesArray[indexVal] + "am.");
            setTimeout(function(){
                alertEl.text("")
            }, 3500);
        }

    });

};

//adds event listener for each delete button to remove the time block entry from local storage
function deleteData() {

    $('.delete-btn').on("click", function(event){
        indexVal = event.currentTarget.id.charAt(event.currentTarget.id.length - 1)
        console.log(indexVal)
        
        var calendarEntry = $('#planner'+indexVal)

        localStorage.removeItem('#planner'+indexVal);
        calendarEntry.val("");

    });

};

//for each time block, gets information saved to local storage to display
function getData() {

    for(i = 0; i < 10; i++) {
       var inputEl = '#planner' + i;
       var selectInput = $(inputEl)
       var localStorageItem = localStorage.getItem(inputEl);
       if(localStorageItem){
           selectInput.val(localStorageItem);
       } 
    }
}

//At midnight, the calendar is cleared
function clearDay() {
    if (timeNowHH == 24) {
        localStorage.clear();
    }
}

//function to initialize all functions to run
function init() {
    displayDate();
    highlightToday();
    createTimeBlocks();
    colorCode();
    saveData();
    deleteData();
    getData();
    clearDay();
};

//Updates the date every second so that the functions are keeping everything up to date
setInterval(displayDate, 1000);
setInterval(colorCode, 1000);
setInterval(getData,10);
setInterval(clearDay, 1000);


init();

