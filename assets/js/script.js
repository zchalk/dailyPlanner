var eventContainer = $("#eventContainer");
var currentDay =$("#currentDay");
var today = moment ();
var hoursInDay = ["9 AM","10 AM", "11 AM", "12 PM", "1 PM", "2 AM", "3 AM", "4 AM", "5 AM"];
var eventObjects = [];


for (let i = 0; i < hoursInDay.length; i++) {
  
eventObjects.push( { 
    time: hoursInDay[i], // should i make a for loop for this instead? maybe this is the wrong order.. or i could create them all
    // day: today,
    plan: "",
})}


$(currentDay).text(today.format("MMM Do, YYYY"));

console.log(eventContainer);

eventObjects.forEach(function(eventObject) {
    var div = $('<div>').addClass('timeContainers')
    var timeDisplay = $('<p>').addClass('timeDisplay').text(eventObject.time)
    var planDisplay = $('<input>').addClass('planDisplay').val(eventObject.plan)
    var saveButton = $('<button>').text("save").data('hour',eventObject.time)
    div.append(timeDisplay, planDisplay, saveButton)
    eventContainer.append(div)
})

$("button").on('click',function(event) {
    var planText = $(this).siblings(".planDisplay").val()
    var planHour = $(this).data('hour')
    eventObjects.forEach(function(eventObject) {
        if (planHour == eventObject.time)
        eventObject.plan = planText
    })
    console
    console.log(planText, planHour);
    JSON.stringify(eventObjects)
})

// add function to render on page

// $(function() {
    // $("#currentDay").datepicker();
//   });


