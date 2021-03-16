// Exercise 1 Objective
alert('Welcome to my Javascripting & jQuery World!');

// Load the navbar with .find() method
window.onload = function () {
    $.get("common/navbar.html", function (data) {
        $("#common-navbar").html(data);
        $("#navbar").find(".nav-item1")
            .addClass('disabled')
            .find('a').append('<span class="sr-only">(current)</span>');
    });
}

// Load the footer
$(function () {
    $("#footer").load("common/footer.html");
});