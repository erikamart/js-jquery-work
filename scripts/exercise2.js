// Javascript to link navbar and footer elements across multiple pages.
// Load the navbar with .get() method and reflect on selected page link using .find() method.
window.onload = function () {
    $.get("/common/navbar.html", function (data) {
        $("#common-navbar").html(data);
        $("#navbar").find(".nav-item2")
            .addClass('disabled')
            .find('a').append('<span class="sr-only">(current)</span>');
    });
}

// Load the footer using .load() method.
$(function () {
    $("#footer").load("/common/footer.html");
});


// Exercise 2 Objectives:
// 1. Create an array with 5 quotes of the day.
let quotes = ["'We are all here on earth to help others; what on earth the others are here for I don't know.' --W. H. Auden",
    "'I love deadlines. I like the whooshing sound they make as they fly by.' --Douglas Adams",
    "'I'm sorry, if you were right, I'd agree with you.' --Robin Williams",
    "'If there's anything on this ship more important than my ego I want it caught and shot right now.' -- Zaphod Beeblebrox",
    "'I never said most of the things I said.' --Yogi Berra"];

// 2. Prompt the user to enter a number. Restrict input box to allow only numbers & decimals.
let favNumber = prompt("What is your favorite number?");

// 3. Divide the number by 5 and get the remainder (modulus). 
let quoteIndex = favNumber % 5;

// 4. Use the remainder as the array index and write that quote to the page.
let quoting2 = document.getElementById("quoting");
quoting2.innerHTML = '<p>Quote of the Day: ' + quotes[quoteIndex] + '</p>';

// 5. Create an array of 3 favorite website urls.
let websiteUrls = ["https://www.w3schools.com",
    "https://www.youtube.com",
    "https://www.pennymonkey.com"];

// 6. Loop through initial url list and construct unordered list and write them out on the web page as working links.
let initialList2 = document.getElementById("initialList");
for (i in websiteUrls) {
    initialList2.innerHTML += '<ul><li><a target="_blank" href = "' + websiteUrls[i] + '">' + websiteUrls[i] + '</ul></li></a>';
}

// 7. Prompt the user to enter their favorite website and store the input in a variable. 
let favWeb = prompt("What is your favorite website? Ex: www.google.com");

// 8. Use a loop to take the users input, replace the last list item in your initial url list with it, make it a working link too, and redisplay the updated list.
let newUrls = websiteUrls;
newUrls.shift();
newUrls.push('http://' + favWeb);
for (i in newUrls) {
    webList.innerHTML += '<ul><li><a target="_blank" href = "' + newUrls[i] + '">' + newUrls[i] + '</ul></li></a>';
}
