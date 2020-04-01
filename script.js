// Setting variables

var today = moment().format("dddd, MMMM Do");
console.log(today)

var now = moment().format("H");
console.log(now)

var plannerDayHours = {"BusinessHours": [
{number: 9, hour: "9 AM", event: "-"},
{number: 10, hour: "10 AM", event: "-"},
{number: 11, hour: "11 AM", event: "-"},
{number: 12, hour: "12 PM", event: "-"},
{number: 13, hour: "1 PM", event: "-"},
{number: 14, hour: "2 PM", event: "-"},
{number: 15, hour: "3 PM", event: "-"},
{number: 16, hour: "4 PM", event: "-"},
{number: 17, hour: "5 PM", event: "-"}

]}; 
    

// Check local storage for previously saved planner acitivites, if yes then fill current
var checkPrevious = JSON.parse(localStorage.getItem("plannerDayHours"));

if (checkPrevious !== null) {
    plannerDayHours = checkPrevious;
};

$("#currentDay").text(today)

for (var i = 0; i < plannerDayHours.BusinessHours.length; i++) {
    var newTR = $("<tr>newTR</tr>");
    newTR.addClass("row");
    $(".container").append(newTR);

    var hourDisplay = $("<td>" + plannerDayHours.BusinessHours[i].hour + "</td>");
    var eventDisplay = $('<td><textarea id="test">' + plannerDayHours.BusinessHours[i].event + '</textarea></td>');
    var saveDisplay = $("<td>Save</td>");

    hourDisplay.addClass("hour");
    eventDisplay.addClass("event");
    saveDisplay.addClass("saveBtn");
    saveDisplay.attr("id", "li" + i);

    if (plannerDayHours.BusinessHours[i].number == now) {
        eventDisplay.addClass("present");
    }

    if (plannerDayHours.BusinessHours[i].number > now) {
        eventDisplay.addClass("future");
    }

    else if (plannerDayHours.BusinessHours[i].number < now) {
        eventDisplay.addClass("past");
    }

    $(newTR).append(hourDisplay, eventDisplay, saveDisplay);

};

$(document).on("click", ".saveBtn", function () {
    var dataID = $(this).attr("id");
    console.log(dataID)

    var index = dataID.split("li")[1];
    console.log(index)

    newEvent = $("#test").val();
    console.log(newEvent)

    plannerDayHours.BusinessHours[index].event = newEvent;
    console.log(plannerDayHours.BusinessHours[index].event)
    console.log(newEvent)

    localStorage.setItem("plannerDayHours", JSON.stringify(plannerDayHours));
    console.log(localStorage)

});  

