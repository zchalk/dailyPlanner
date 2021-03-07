var eventContainer = document.getElementById("container");
var currentDay = document.getElementById("currentDay");
var today = moment ();
var hoursInDay = ["9 AM","10 AM", "11 AM", "12 PM", "1 PM", "2 AM", "3 AM", "4 AM", "5 AM"];


var eventObjects = [{ 
    time: hoursInDay[i], // should i make a for loop for this instead? maybe this is the wrong order.. or i could create them all
    day: today,
    plan: textcontent.eventObjects[i].event,
}]


$(currentDay).text(today.format("MMM Do, YYYY"));


eventObjects.forEach(function(eventObjects) {
    $(eventContainer).add('div').addClass('timeContainers')
    for (time in eventObjects) {
        $('timeContainers').add('p').addClass('timeDisplay')
    }
    for (plan in eventObjects) { 
        $('timeContainers').add('p').addClass('planDisplay')  
    }
})

// add save button 

saveButton.addEventListener("click", function(event) {
    JSON.stringify(eventObjects)
})

// add function to render on page

// $(function() {
    // $("#currentDay").datepicker();
//   });





