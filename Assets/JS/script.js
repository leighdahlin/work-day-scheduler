dateDisplayEl = $('#currentDay');
containerEl = $('.container')
timesArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]


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
        createLi.text(timesArray[i]);
        

        var createLabel = $('<label>')
        createLabel.attr('for', 'planner' + i);

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

function init() {
    displayDate();
    createTimeBlocks();
};

init();

//Use below to populate input field when saved
//NineAmEl.val("Hello");