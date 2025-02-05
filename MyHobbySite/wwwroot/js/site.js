// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
$(document).ready(function() {
    $("#calculate").click(function() {
        let hours = parseFloat($("#hours").val());
        let rate = parseFloat($("#rate").val()) // Fixed hourly rate from the html page

        if (hours < 0 || isNaN(hours)) {
            alert("Please enter a valid positive number of hours.");
            return;
        }

        let total = hours * rate;
        $("#total").val("$" + total.toFixed(2));
    });
});

