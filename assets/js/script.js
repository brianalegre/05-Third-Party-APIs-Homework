// Variables
var timeSlots = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

// Function for making each time block
function makeTimeblocks(hour, existingTodo = "") {
    // Get the current time
    var currentHour = new Date().getHours();
    
    // Check if current time vs time block
    var presentPastOrFuture = "future";
    if (currentHour > hour) presentPastOrFuture = "past";
    if (currentHour === hour) presentPastOrFuture = "present";
    var hourName = timeSlots[hour];

    // Get items from localStorage to display on the page
    var existingTodo = localStorage.getItem(hourName);

    // Creating the time block
    // Using bootstap classes
    $(".container").append(
    $(`
    <div class="row time-block">
        <div class="hour col-1">${hourName}</div>
        <textarea name="" id="${hourName}" cols="30" rows="3" class="description col-9 ${presentPastOrFuture}">${existingTodo || ""}</textarea>
        <button class="btn saveBtn col-2">Save</button>
    </div>`)
    );
}

// Create time block for each hour
for (var i = 0; i < 9; i++) {
    makeTimeblocks(i);
}


// Variables
var btnEl = document.querySelectorAll(".saveBtn");

// Cycle thru save buttons
for (var i = 0; i < btnEl.length; i++) {
    btnEl[i].addEventListener("click", functionForSaving);
}


// Function For Saving Key Value Pairs
function functionForSaving(event) {
    // Checking able to get text area content
    var todoValue = event.target.parentNode.children[1].value;
    var todoKey = event.target.parentNode.children[1].id;

    // Store to localStorage
    localStorage.setItem(todoKey, todoValue);
}


// Display current day
$('#currentDay').text(moment().format('dddd, MMMM Do'));