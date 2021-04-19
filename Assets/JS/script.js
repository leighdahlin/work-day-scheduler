dateDisplayEl = $('#currentDay');

function displayDate() {
    var rightNow = moment().format('dddd, MMMM Do');
    dateDisplayEl.text(rightNow);
};

function init() {
    displayDate();
};

init();