var eventContainer = $("#eventContainer");
var currentDay = $("#currentDay");
var today = moment ();
var hoursInDay = ["9 AM","10 AM", "11 AM", "12 PM", "1 PM", "2 AM", "3 AM", "4 AM", "5 AM"];
var eventObjects = [];


for (let i = 0; i < hoursInDay.length; i++) {
  
eventObjects.push( { 
    time: hoursInDay[i],
    plan: "",
})}


$(currentDay).text(today.format("MMM Do, YYYY, h:mm"));

console.log(eventContainer);

eventObjects.forEach(function(eventObject) {
    var div = $('<div>').addClass('timeContainers')
    var timeDisplay = $('<p>').addClass('timeDisplay').text(eventObject.time)
    var planDisplay = $('<input>').addClass('planDisplay').val(eventObject.plan)
    var saveButton = $('<button>').text("save").data('hour',eventObject.time)
    div.append(timeDisplay, planDisplay, saveButton)
    eventContainer.append(div)
})

var refreshButton = $('<button>').text("refresh time").data('time',today);
eventContainer.append(refreshButton)


$("button").on('click', function(event) {
    var planText = $(this).siblings(".planDisplay").val()
    var planHour = $(this).data('hour')
    eventObjects.forEach(function(eventObject) {
        if (planHour == eventObject.time)
        eventObject.plan = planText
        window.localStorage.setItem("eventObjects", JSON.stringify(eventObjects))
    })
})

$("document").on('click',refreshButton, function(event) {
    today = moment();
    $(currentDay).text(today.format("MMM Do, YYYY, h:mm"));

})

function pastEvents() {
    for (let i = 0; i < iterable.length; i++) {
      if ()
    }
}
