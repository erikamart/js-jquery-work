// Load the navbar with .find() method
window.onload = function () {
    $.get("/common/navbar.html", function (data) {
        $("#common-navbar").html(data);
        $("#navbar").find(".nav-item3")
            .addClass('disabled')
            .find('a').append('<span class="sr-only">(current)</span>');
    });
}

// Load the footer with the .load() method
// $(function () {
//     $("#footer").load("/common/footer.html");
// });


// Exercise 3 Objectives:
//Create an array of at least 3 trivia questions.
var questions = ["Which is the only American state to begin with the letter 'p'?", "Who played Neo in The Matrix?", "Name the chess piece that can only be moved diagonally?"];

//Create a second array that contains the answers to the trivia questions in the same position as the questions.
var answers = ["Pennsylvania", "Keanu Reeves", "Bishop"];

//Initialize a score variable to 0
var score = 0;

//Call the quiz function passing the loop counter as a parameter.
//Initialize a guesses variable to 3.
function quiz(counter) {
    var guesses = 3;            //Create a while loop to run as long as guesses > 0. Inside the while loop:
    while (guesses > 0) {
        var inputAns = prompt(questions[counter]);      //prompt the user to answer the trivia question using the counter parameter as the array index.
        inputAns = inputAns.toLowerCase();

        if (inputAns == answers[counter].toLowerCase()) {    //compare the answer entered by the user to the corresponding answer in the answers array
            score += guesses;
            alert("correct");
            break;
        } else {
            alert("Incorrect.  Please Try again.");
        }
        guesses -= 1;
    }
    return "<div class='body-content'>You earned " + guesses + " points: &nbsp;" + questions[counter] + "&nbsp; &#8225; &nbsp;" + answers[counter] + "</div>";
}

for (i = 0; i < questions.length; i++) {
    document.write(quiz(i));
}
//After the for loop is complete, write out the score to the page.
document.write("<div class='body-content'> Your total score is " + score + "!</div>");

// var grade = document.getElementById("scored");
// grade.innerHTML = "<br> Your total score is " + score + "!";