// Javascript to link navbar and footer elements across multiple pages.
// Load the navbar with .get() method and reflect on selected page link using .find() method.
window.onload = function () {
    $.get("/common/navbar.html", function (data) {
        $("#common-navbar").html(data);
        $("#navbar").find(".nav-item6")
            .addClass('disabled')
            .find('a').append('<span class="sr-only">(current)</span>');
    });
}

// Load the footer using .load() method.
$(function () {
    $("#footer").load("/common/footer.html");
});


$(document).ready(function () {
    // hide all specifics names here so they will be hidden before page loads
    $('.specifics').hide();
    // hide all .imgdiv classes here so they will be hidden until the hover event shows them
    $('.imgdiv').hide();

    //mouseover event to change the color of the heading tags h1 and h2 to gold
    $('h1, h2').mouseover(function () {
        $('h1, h2').css('color', 'lightblue');
    });

    //mouseout event to change the color of the heading tags h1 and h2 back
    $('h1, h2').mouseout(function () {
        $('h1, h2').css('color', '#011892');
    });

    $('.beanies').click(function () {
        $('.specifics').hide();
        //only select children of the current class and pass it the specifics class and then use show() method to display it
        $(this).children('.specifics').show();
    }); //end click event

    $('.pic').hover(
        //function1 event of hover that is like mouseover
        function (evt) {
            var beaniesId = "#" + $(this).attr('title');
            var posX = evt.pageX + 150;
            var posY = evt.pageY;
            var newHTML = $(beaniesId).html();

            $('#spaceHold').html(newHTML);
            $('#spaceHold').css({
                'display': 'block',
                'left': posX + 'px',
                'top': posY + 'px'
            });
        }, //end function1 event
        //function2 event of hover that is like mouseout
        function () {
            $('#spaceHold').css('display', 'none');
        }  //end function2 event 

    ); //end entire hover event

    $(document).keypress(function (evt) {
        var keyPressed = String.fromCharCode(evt.which).toLowerCase();
        //javaScript property to assign a value of # + the letter entered to jump to that location in the page 
        window.location = "#" + keyPressed;
    }); //end keypress event

}); //end the document.ready function