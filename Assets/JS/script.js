//Assign variables
var dateDisplayEl = $('#currentDay');
var containerEl = $('.container');
var timesArray = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5]; //Array with each hour I want to display on the page
var timeNowHH = moment().format("HH");
var alertEl = $('.alert')

//Displays the date at the top of the page using moment
function displayDate() {
    var rightNow = moment().format('dddd, MMMM Do');
    dateDisplayEl.text(rightNow);

};

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
        deleteButton.html("&#10006");

        // var spanX = $('<span>');
        // spanX.attr('aria-hidden','true')
        // spanX.text("#10006");
        // deleteButton.append(spanX);

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

//for each time block, gets information saved to local storage to display
function getData() {

var EightAmInput = $('#planner0');
var calendarItem = localStorage.getItem('#planner0');
EightAmInput.val(calendarItem);

var NineAmInput = $('#planner1');
var calendarItem = localStorage.getItem('#planner1');
NineAmInput.val(calendarItem);

var TenAmInput = $('#planner2');
var calendarItem = localStorage.getItem('#planner2');
TenAmInput.val(calendarItem);

var ElevenAmInput = $('#planner3');
var calendarItem = localStorage.getItem('#planner3');
ElevenAmInput.val(calendarItem);

var TwelvePmInput = $('#planner4');
var calendarItem = localStorage.getItem('#planner4');
TwelvePmInput.val(calendarItem);

var OnePmInput = $('#planner5');
var calendarItem = localStorage.getItem('#planner5');
OnePmInput.val(calendarItem);

var TwoPmInput = $('#planner6');
var calendarItem = localStorage.getItem('#planner6');
TwoPmInput.val(calendarItem);

var ThreePmInput = $('#planner7');
var calendarItem = localStorage.getItem('#planner7');
ThreePmInput.val(calendarItem);

var FourPmInput = $('#planner8');
var calendarItem = localStorage.getItem('#planner8');
FourPmInput.val(calendarItem);

var FivePmInput = $('#planner9');
var calendarItem = localStorage.getItem('#planner9');
FivePmInput.val(calendarItem);

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
    createTimeBlocks();
    colorCode();
    saveData();
    getData();
    clearDay();
};

//Updates the date every second so that the functions are keeping everything up to date
setInterval(displayDate, 1000);
setInterval(colorCode, 1000);
setInterval(clearDay, 1000);


init();

