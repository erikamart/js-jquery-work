// Javascript to link navbar and footer elements across multiple pages.
// Load the navbar with .get() method and reflect on selected page link using .find() method.
window.onload = function () {
    $.get("/common/navbar.html", function (data) {
        $("#common-navbar").html(data);
        $("#navbar").find(".nav-item4")
            .addClass('disabled')
            .find('a').append('<span class="sr-only">(current)</span>');
    });
}

// Load the footer using .load() method.
$(function () {
    $("#footer").load("/common/footer.html");
});


// Exercise 4 Objectives
// 1. Create a months array for the year
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// 2. Create a tips array
let tips = ["<p><strong>Winter </strong>is a time when our beanies really shine! </p><p>Our suggestions for this month:</p><ul><li>Use a fabric that is as warm as can be. Wool lined with fleece is best.<li>Go nuts with all the colors. It's beanie season...ANYTHING goes!</li><li>Use the best style ever made, the top pom pom!</li></ul>",
    "<p><strong>Spring </strong>is a time to celebrate the awakening of nature. </p><p>Our suggestions for this month:</p><ul><li>Use a fabric that is still warm, but not too warm, like an acrylic blend.</li><li>Use bright shades from the green spectrum; pay tribute to incoming lawns!</li><li>Use a not-so-serious style like slouchy. It's fun and relaxed so you can stop and smell the flowers.</li></ul>",
    "<p><strong>Summer </strong>is a time to celebrate all things outdoors. </p><p>Our suggestions for this month:</p><ul><li>Use a fabric that is lightweight and breathable like cotton.</li><li>Use very light and bright colors to deter heat absorbption from the sun.</li><li>Use a classic or slouchy style for that &quot;fun in the sun&quot; look.</li></ul>",
    "<p><strong>Fall</strong> is a time to amp up your beanie supply. </p><p>Our suggestions for this month:</p><ul><li>Use a fabric that is warm but not overdoing it, like wool or double cotton.</li><li>Use richer colors that can reflect the falling leaves.</li><li>Use all the styles you want. This is a transitional period of time.</li></ul>"];

// 3. Create a specials array
let specials = ["<p>Don't forget our furry friends!</p><p>All dog and cat beanies are 20% off this month.</p>", "<p>Match your sweetheart!</p><p>2 for 1 this month on any pair of same style and color hats.</p>", "<p>Add some luck to your life!</p><p>All beanies of any style with green in them are $15.</p>", "<p>Time to try pastels!</p><p>All pastel colored beanies are 10% off.</p>", "<p>Celebrate Cinco de Mayo!</p><p>$5 off all beanies, all month!</p>", "<p>Beat the heat!</p><p>50% off classic cotton beanies. (excluding slouchy styles)</p>", "<p><strong>BOGO America!</strong></p><p>All red, white, and blue color beanies, buy one, get one.</p>", "<p>Heat Wave!</p><p>25% off all cotton & lightweight beanies.</p>", "<p>It's Fall Y'all!</p><p>All fall leaf color beanies get $3 off.</p>", "<p>Pumpkin Patch Time!</p><p>10% off all beanies</p>", "<p>Hey Pilgrims!</p><p>All fleece lined beanies get $3 off</p>", "<p>It's Snow Time!</p><p>Find the perfect fit for the whole family! Custom order a child size for no extra charge. </p>"];

// 4. Create a function that will popluate data based on the current date.
$(document).ready(function () {
    let now = new Date();    // Test Date() manually by inserting a date formated as "YYYY-MM-DD"
    let month = months[now.getMonth()];
    let year = now.getFullYear();

    if (month == 'December') {
        $("#slogan").after("<h3>Happy Holidays!</h3>");
    }
    $("#month").text("Tips for " + month);
    $("#copy").append(" " + year);

    $("#specials > p").remove();
    $(specials[now.getMonth()]).insertAfter("#specials > h3");

    switch (now.getMonth()) {
        case 11:
        case 0:
        case 1:
            season = "Winter";
            backgroundImage = "/img/winterbg.jpg";
            seasonColor = "#00f";
            seasonIndex = 0;
            break;

        case 2:
        case 3:
        case 4:
            season = "Spring";
            backgroundImage = "/img/springbg.jpg";
            seasonColor = "#d7d";
            seasonIndex = 1;
            break;

        case 5:
        case 6:
        case 7:
            season = "Summer";
            backgroundImage = "/img/summerbg.jpg";
            seasonColor = "#006400";
            seasonIndex = 2;
            break;
        case 8:
        case 9:
        case 10:
            season = "Fall";
            backgroundImage = "/img/fallbg.jpg";
            seasonColor = "#930";
            seasonIndex = 3;
            break;
    }
    // 5. Change the HTML elements to the appropriate season and special.
    $("body").css('background-image', 'url(' + backgroundImage + ')');

    $("#seasontips").replaceWith(tips[seasonIndex]);

    $("strong, h1, h2, h3").css('color', seasonColor);

    $("#specials").addClass(season);

});