// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

//display today's day and date
var todayDate = dayjs().format('dddd, MMM d');
$("#currentDay").text(todayDate);

  // "on() is the jQuery version of event listener"
  $('.saveBtn').on('click', function () {
    // "this" refers to whatever we clicked on
    console.log(this);
    var ourId = $(this).parent().attr('id');
    var textareaValue = $(this).siblings('.description').val();
    console.log(
      ourId + " line 18 " + textareaValue);
    // EX: div with id = 'hour-9': divId = hour-9

    //save text in local storage
    localStorage.setItem(ourId, textareaValue);
    
    
  });


// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
$(function () {

  //loop over time blocks
  $('time-block').each(function () {
    var id = $(this).attr('id');
    var parseInt = id.split('-')[1];
    console.log(parseInt);
    currentHour = dayjs().hour();
    console.log(currentHour)
    //$( this).children('.type') .val(id);
    if (parseInt < currentHour) {
      $(this).children('.type').addClass('past');
    }
    else if (parseInt == currentHour) {
      $(this).children('.type').addClass('present');
    } else {
      $(this).children('.type').addClass('future');
    }
  })
 
  // Grab the ids of all of the divs and parseInt() to get only the number
  // Grab the current hour using Day.js
  // use conditional statements to compare each div hour to the current hour (IF/ELSE IF/ELSE)
  // jQuery addClass() .past .present .future
  // TIP: if the div hour is less than the current hour, it is in the past, if it is equal to current hour, it is present, if its greater than current hour, it is future

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


 //display current date is  on the top//
  // TODO: Add code to display the current date in the header of the page
  // use jQuery to get the p tag with the id of currentDay
  // use the .text() method to set the textContent to the current day
  // Use day.js
  
  
})



