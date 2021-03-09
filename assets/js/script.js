var eventContainer = $("#eventContainer");
var currentDay = $("#currentDay");
var today = moment ();
var now = new Date().getHours();
var hoursInDay = ["9 AM","10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
var eventObjects = [];


for (let i = 0; i < hoursInDay.length; i++) {
  
eventObjects.push( { 
    time: hoursInDay[i],
    plan: "",
})}


$(currentDay).text(today.format("MMM Do, YYYY, h:mm"));

console.log(eventContainer);

eventObjects.forEach(function(eventObject) {
    var div = $('<div>').addClass('timeContainers').data('time', eventObject.time);
    var timeDisplay = $('<p>').addClass('timeDisplay').text(eventObject.time);
    var planDisplay = $('<input>').addClass('planDisplay').val(eventObject.plan);
    var saveButton = $('<button>').text("save").addClass('saveButton').data('hour',eventObject.time);
    
    div.append(timeDisplay, planDisplay, saveButton)
    eventContainer.append(div)
})

var refreshButton = $('<button>').text("refresh time").data('time',today);
eventContainer.append(refreshButton)


$("button.saveButton").on('click', function(event) {
    console.warn('asd;lfkj;asldkjf');
    var planText = $(this).siblings(".planDisplay").val()
    var planHour = $(this).data('hour')
    eventObjects.forEach(function(eventObject) {
        if (planHour == eventObject.time) {
        eventObject.plan = planText
        window.localStorage.setItem("eventObjects", JSON.stringify(eventObjects))
    }
    //     if (planHour > now ) {
    //         $('#timeContainers').css("background-color", "red")
    //     }
    //     if (planHour < now ) {
    //         $('#timeContainers').css("background-color", "green")
    //     }
})
})
// div.css("background-color", "red")

refreshButton.on('click', function(event) {
    console.warn('I WORKED!');
    today = moment();
    $(currentDay).text(today.format("MMM Do, YYYY, h:mm"));

})
console.log(eventObjects[1].time.match(/\d+/g))
// console.log(eventObjects[1].data('time'))

function pastEvents() {
    for (let i = 0; i < eventObjects.length; i++) {
        var whichObject = eventObjects[i].time.match(/\d+/g);
      if (whichObject > now) {
          $('div.div').css("background-color", "red")
      } else if (now > whichObject) {
        $('div.div').css("background-color", "green")
    }
    }
}
pastEvents();
