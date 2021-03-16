// Load the navbar with .find() method
window.onload = function () {
    $.get("/common/navbar.html", function (data) {
        $("#common-navbar").html(data);
        $("#navbar").find(".nav-item2")
            .addClass('disabled')
            .find('a').append('<span class="sr-only">(current)</span>');
    });
}

// Load the footer with the .load() method
$(function () {
    $("#footer").load("/common/footer.html");
});


// Exercise 2 Objectives:
// Create an array with 5 quotes of the day.
var quotes = ["'We are all here on earth to help others; what on earth the others are here for I don't know.' --W. H. Auden",
    "'I love deadlines. I like the whooshing sound they make as they fly by.' --Douglas Adams",
    "'I'm sorry, if you were right, I'd agree with you.' --Robin Williams",
    "'When you are courting a nice girl an hour seems like a second. When you sit on a red-hot cinder a second seems like an hour. That's relativity.' --Albert Einstein",
    "'I never said most of the things I said.' --Yogi Berra"];

// Prompt the user to enter a number. 
var favNumber = prompt("What is your favorite number?");

//Divide the number by 5 and get the remainder (modulus). 
var quoteIndex = favNumber % 5;

//Use the remainder as the array index and write that quote to the page.
var quoting2 = document.getElementById("quoting");
quoting2.innerHTML = '<p>Quote of the Day: ' + quotes[quoteIndex] + '</p>';

// Create an array of 3 favorite website urls.
var websiteUrls = ["https://www.amazon.com/",
    "http://www.huffingtonpost.com/",
    "https://www.buzzfeed.com/"];

// loop through initial url list and construct unordered list and write them out on the web page as working links.
var initialList2 = document.getElementById("initialList");
for (i in websiteUrls) {
    initialList2.innerHTML += '<ul><li><a target="_blank" href = "' + websiteUrls[i] + '">' + websiteUrls[i] + '</ul></li></a>';
}

// Prompt the user to enter their favorite website. 
var newUrls = websiteUrls;
var favWeb = prompt("What is your favorite website?");
newUrls.shift();
newUrls.push(favWeb);
for (i in newUrls) {
    webList.innerHTML += '<ul><li><a target="_blank" href = "' + newUrls[i] + '">' + newUrls[i] + '</ul></li></a>';
}
