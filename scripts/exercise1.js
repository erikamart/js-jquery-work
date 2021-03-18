// Javascript to link navbar and footer elements across multiple pages.
// Load the navbar with .get() method and reflect on selected page link using .find() method.
window.onload = function () {
    $.get("/common/navbar.html", function (data) {
        $("#common-navbar").html(data);
        $("#navbar").find(".nav-item1")
            .addClass('disabled')
            .find('a').append('<span class="sr-only">(current)</span>');
    });
}

// Load the footer using .load() method.
$(function () {
    $("#footer").load("/common/footer.html");
});




// Exercise 1 Objectives:
// 1. Create a basic webpage that will link to all individual objectives and describe them.
//    Files used: index.html, /css/styles.css, /common/navbar.html, /common/footer.html

// 2. Create an alert upon entering the webpage to display some text.
alert('Welcome to my Javascript & jQuery World!');
