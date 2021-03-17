// Load the navbar with .find() method
window.onload = function () {
    $.get("/common/navbar.html", function (data) {
        $("#common-navbar").html(data);
        $("#navbar").find(".nav-item3")
            .addClass('disabled')
            .find('a').append('<span class="sr-only">(current)</span>');
    });
}

// Load the footer with the.load() method
$(function () {
    $("#footer").load("/common/footer.html");
});


// Exercise 3 Objectives:
// 1. Create an array of at least 3 trivia questions.
let questions = ["Which is the only American state to begin with the letter 'p'?", "Who played Neo in The Matrix?", "Name the chess piece that can only be moved diagonally?"];

// 2. Create a second array that contains the answers to the trivia questions in the same position as the questions.
let answers = ["Pennsylvania", "Keanu Reeves", "Bishop"];

// 3. Initialize a score variable to 0.
let score = 0;

// 4. Call the quiz function passing the loop counter as a parameter.
// 5. Initialize a guesses variable to 3.
function quiz(counter) {
    let guesses = 3;            // 6. Create a while loop to run as long as guesses > 0. Inside the while loop:
    while (guesses > 0) {
        let inputAns = prompt(questions[counter]);      // 7. Prompt the user to answer the trivia question using the counter parameter as the array index.
        inputAns = inputAns.toLowerCase();

        if (inputAns == answers[counter].toLowerCase()) {    //8. Compare the answer entered by the user to the corresponding answer in the answers array.
            score += guesses;
            // alert("correct");
            break;
        } else {
            alert("Incorrect.  Please Try again.");
        }
        guesses -= 1;
    }
    return "You earned " + guesses + " points: &nbsp;" + questions[counter] + "&nbsp; &#8225; &nbsp;" + answers[counter] + "<br>";
}

// 9. Write out the return of the quiz function to show the points earned per question and the answer.
for (i = 0; i < questions.length; i++) {
    $("#status").append(quiz(i));   // This will link the HTML id="status" to format the text properly
    // document.write(quiz(i));    // This works but doesn't incorporate the text into the HTML & CSS
}

// 10. Write out the total score earned.
let grade = document.getElementById("scored");
grade.innerHTML = "Your total score is " + score + "!";