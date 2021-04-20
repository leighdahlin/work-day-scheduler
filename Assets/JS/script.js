dateDisplayEl = $('#currentDay');
containerEl = $('.container');
timesArray = [9, 10, 11, 12, 1, 2, 3, 4, 5];
timeNowHH = moment().format("HH");
timeNowHHmm = moment().format("HHmm");
timeNowHH00 = moment().format("HH00");

console.log(timeNowHH);
console.log(timeNowHHmm);
console.log(timeNowHH00);


function displayDate() {
    var rightNow = moment().format('dddd, MMMM Do');
    dateDisplayEl.text(rightNow);

    // var timeRightNow = moment().format('hh:mm')
    // console.log(timeRightNow);
    // TimeEl.text("09:00 am");
};

function createTimeBlocks() {
    
    for(i = 0; i < timesArray.length; i++) {
        var createUl = $('<ul>');
        createUl.addClass('list-group list-group-horizontal')

        var createLi = $('<li>');
        createLi.addClass('list-group-item hour');
        

        var createLabel = $('<label>')
        createLabel.attr('for', 'planner' + i);
        if(timesArray[i] > 8 && timesArray[i] < 12) {
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

        if(timesArray[i] > 8 && timesArray[i] <= 12) {

            if (timeNowHH == timesArray[i]) {
                inputSelector.addClass('present');
            } else if(timeNowHH > timesArray[i]){
                inputSelector.addClass('past');
            } else if(timesNowHH < timesArray[i]) {
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

function init() {
    displayDate();
    createTimeBlocks();
    colorCode();
};

init();

//Use below to populate input field when saved
//NineAmEl.val("Hello");