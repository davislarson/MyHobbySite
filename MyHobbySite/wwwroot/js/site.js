// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
// Ensure the script runs only after the document (HTML) is fully loaded
$(document).ready(function() {
    
    // This runs once the calculate button is clicked
    $("#calculate").click(function() {

        // Get the value from the input field with ID "hours", convert it to a float
        let hours = parseFloat($("#hours").val());

        // Get the value from the input field with ID "rate", convert it to a float
        // This represents the fixed hourly rate
        let rate = parseFloat($("#rate").val());

        // Validate input: Check if hours is a positive number and not NaN
        if (hours < 0 || isNaN(hours)) {
            alert("Please enter a valid positive number of hours."); // Show an alert if invalid
            return;
        }

        // Calculate the total cost
        let total = hours * rate;

        // Display the total
        $("#total").val("$" + total.toFixed(2)); 
    });
});


