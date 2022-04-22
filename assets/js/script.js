// variables
var btnEl = document.querySelectorAll(".btn")
// Check each button
// console.log(btnEl)

// Array of times
var timeSlots = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
// Check timeSlots
// console.log(timeSlots)

// Function for making each time block
function makeTimeblocks(hour, existingTodo = ""){
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
for(var i = 0; i < 9 ; i++){
    makeTimeblocks(i);
}


// Cycle thru save buttons
for (var i = 0; btnEl.length; i++) {
    btnEl[i].addEventListener("click", functionForSaving)
}     
        // Verify each click works
        // alert("clicked me")


function functionForSaving (event) {
    // Checking able to get text area content
    // console.log("target", event.target.parentNode.children[1].value)
    var todoValue = event.target.parentNode.children[1].value
    var todoKey = event.target.parentNode.children[1].id

    // check values
    console.log("key values" + todoKey, todoValue)

    // Store to localStorage
    localStorage.setItem(todoKey, todoValue);
}
