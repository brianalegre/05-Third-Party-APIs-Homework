// variables
var btnEl = document.querySelectorAll(".btn")

// Array of times
var timeSlots = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];


// Function for making each time block
function makeTimeblocks(hour, existingTodo = ""){
    // Get the current time
    var currentHour = new Date().getHours();
    
    var presentPastOrFuture = "future";

    // Check current time vs time blocks
    if(currentHour > hour) presentPastOrFuture = "past";
    if(currentHour === hour) presentPastOrFuture = "present";

    // Creating the time block
    // Using bootstap classes
    $(".container").append($(`
    <div class="row time-block">
        <div class="hour col-1">${hour}:00</div>
        <textarea name="" id="" cols="30" rows="3" class="description col-9 ${presentPastOrFuture}">${existingTodo}</textarea>
        <button class="btn saveBtn col-2">Save</button>
    </div>`));
}


// Create time block for each hour
for(var i = 0; i <24; i++){
    makeTimeblocks(i);
}


// Cycle thru save buttons
for (var i = 0; i < btnEl.length; i++ ) {
    console.log(btnEl[i]);
    // add callback function for click
    btnEl[i].addEventListener('click', saveClicked);
}


// Function for saving to local storage
function saveClicked(event){
    // Setting the Key Value pair
    var todoValue = event.target.parentNode.children[1].todoValue;
    var todoKey = event.target.parentNode.children[1].children.id;

    // local storage
    localStorage.setItem(todoKey, todoValue);
}
