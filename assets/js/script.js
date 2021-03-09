var eventContainer = $("#eventContainer");
var currentDay = $("#currentDay");
var today = moment ();
var now = moment().hours();
var hoursInDay = [ "9", "10", "11", "12", "13", "14", "15", "16", "17"];
var eventObjects = [];

$(currentDay).text(today.format("MMM Do, YYYY, h:mm"));

for (let i = 0; i < hoursInDay.length; i++) {
    eventObjects.push( { 
        time: hoursInDay[i],
        plan: "",
})}

eventObjects.forEach(function(eventObject) {
    var div = $('<div>').addClass('timeContainers').data('hour',eventObject.time)
    var timeDisplay = $('<p>').addClass('timeDisplay').text(eventObject.time);
    var planDisplay = $('<input>').addClass('planDisplay').val(eventObject.plan);
    var saveButton = $('<button>').addClass('saveButton').data('hour',eventObject.time);

    div.append(timeDisplay, planDisplay, saveButton)
    eventContainer.append(div)

})

var refreshButton = $('<button>').text("refresh time").addClass('refreshButton').data('time',today);
eventContainer.prepend(refreshButton)


$("button.saveButton").on('click', function(event) {
    var planText = $(this).siblings(".planDisplay").val()
    var planHour = $(this).data('hour')
    eventObjects.forEach(function(eventObject) {
        if (planHour == eventObject.time) {
        eventObject.plan = planText
        window.localStorage.setItem("eventObjects", JSON.stringify(eventObjects))
        }
    })
})

refreshButton.on('click', function(event) {
    today = moment();
    $(currentDay).text(today.format("MMM Do, YYYY, HH:mm"));

})

$("div.timeContainers").each(function() {
    var planHour = $(this)
    if (planHour.data('hour') == now) {
        planHour.addClass('present');
      }
      else if (planHour.data('hour') < now) {
        planHour.addClass('past');
      }
      else {
          planHour.addClass('future');
      }
})
