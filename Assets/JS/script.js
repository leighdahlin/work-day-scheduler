dateDisplayEl = $('#currentDay');
NineAmEl = $('.NineAm');
TimeEl = $('#time')

function displayDate() {
    var rightNow = moment().format('dddd, MMMM Do');
    dateDisplayEl.text(rightNow);

    var timeRightNow = moment().format('hh:mm')
    console.log(timeRightNow);
    TimeEl.text("09:00 am");
};

function init() {
    displayDate();
};

init();

//Use below to populate input field when saved
//NineAmEl.val("Hello");