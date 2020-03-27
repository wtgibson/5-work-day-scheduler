// Setting variables

var today = moment().format("dddd, MMMM Do");

var now = moment().format("H A");

var planDay = [
    {time: "9am", event: ""}
    {time: "10am", event: ""}
    {time: "11am", event: ""}
    {time: "12pm", event: ""}
    {time: "1pm", event: ""}
    {time: "2pm", event: ""}
    {time: "3pm", event: ""}
    {time: "4pm", event: ""}
    {time: "5pm", event: ""}
];

// Check local storage for previously saved planner acitivites, if yes then fill current
var chceckPrevious = JSON.parse(localStorage.getItem("dayPlanner"));

if (checkPrevious !== null) {
    planDay = checkPrevious;
}

$("#currentDay").text(today)