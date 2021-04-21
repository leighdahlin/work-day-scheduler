var dateDisplayEl = $('#currentDay');
var containerEl = $('.container');
var timesArray = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5];
var timeNowHH = moment().format("HH");

function displayDate() {
    var rightNow = moment().format('dddd, MMMM Do');
    dateDisplayEl.text(rightNow);

};

function createTimeBlocks() {
    
    for(i = 0; i < timesArray.length; i++) {
        var createUl = $('<ul>');
        createUl.addClass('list-group list-group-horizontal')

        var createLi = $('<li>');
        createLi.addClass('list-group-item hour');
        

        var createLabel = $('<label>')
        createLabel.attr('for', 'planner' + i);
        if(timesArray[i] > 7 && timesArray[i] < 12) {
            createLabel.text(timesArray[i] + "am");
        } else {
            createLabel.text(timesArray[i] + "pm");
        }

        createLi.append(createLabel);

        var createInput = $('<input>');
        createInput.addClass('form-control');
        createInput.attr('type', 'text');
        createInput.attr('id', 'planner' + i);
        createInput.attr('aria-describedby', 'button-addon2');
        

        var createButton = $('<button>');
        createButton.addClass('btn btn-info save-btn fa');
        createButton.attr('type', 'button');
        createButton.attr('id', 'button' + i);

        var createI = $('<i>');
        createI.addClass('fa fa-save');

        createButton.append(createI);

        createUl.append(createLi);
        createUl.append(createInput);
        createUl.append(createButton);

        containerEl.append(createUl);
    }
    
}

function colorCode() {
    
   for (i = 0; i < timesArray.length; i++) { 
    var inputId = 'planner' + i;
    var inputSelector = $('#'+ inputId);

        if(timesArray[i] > 7 && timesArray[i] <= 12) {

            if (timeNowHH == timesArray[i]) {
                inputSelector.addClass('present');
            } else if(timeNowHH > timesArray[i]){
                inputSelector.addClass('past');
            } else if(timeNowHH < timesArray[i]) {
                inputSelector.addClass('future');
            }
        } else {
            var newTime = timesArray[i] + 12;
            if (timeNowHH == newTime) {
                inputSelector.addClass('present');
            } else if(timeNowHH > newTime) {
                inputSelector.addClass('past');
            } else if(timeNowHH < newTime) {
                inputSelector.addClass('future');
            }
            
        } 
    }
}


function saveData() {

        $('#button0').on("click", function() {
            var calendarEntry = $('#planner0').val();
            console.log(calendarEntry);
            localStorage.setItem('#planner0', calendarEntry)
        });

        $('#button1').on("click", function() {
            var calendarEntry = $('#planner1').val();
            localStorage.setItem('#planner1', calendarEntry)
        });

        $('#button2').on("click", function() {
            var calendarEntry = $('#planner2').val();
            localStorage.setItem('#planner2', calendarEntry)
        });

        $('#button3').on("click", function() {
            var calendarEntry = $('#planner3').val();
            localStorage.setItem('#planner3', calendarEntry)
        });

        $('#button4').on("click", function() {
            var calendarEntry = $('#planner4').val();
            localStorage.setItem('#planner4', calendarEntry)
        });

        $('#button5').on("click", function() {
            var calendarEntry = $('#planner5').val();
            localStorage.setItem('#planner5', calendarEntry)
        });

        $('#button6').on("click", function() {
            var calendarEntry = $('#planner6').val();
            localStorage.setItem('#planner6', calendarEntry)
        });

        $('#button7').on("click", function() {
            var calendarEntry = $('#planner7').val();
            localStorage.setItem('#planner7', calendarEntry)
        });

        $('#button8').on("click", function() {
            var calendarEntry = $('#planner8').val();
            console.log(calendarEntry);
            console.log("You clicked a button!");
            localStorage.setItem('#planner8', calendarEntry)
        });

        $('#button9').on("click", function() {
            var calendarEntry = $('#planner9').val();
            console.log(calendarEntry);
            console.log("You clicked a button!");
            localStorage.setItem('#planner9', calendarEntry)
        });

    
    // }
};

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


function init() {
    displayDate();
    createTimeBlocks();
    colorCode();
    saveData();
    getData();
};

init();

