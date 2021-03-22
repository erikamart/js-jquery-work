// Javascript to link navbar and footer elements across multiple pages.
// Load the navbar with .get() method and reflect on selected page link using .find() method.
window.onload = function () {
    $.get("/common/navbar.html", function (data) {
        $("#common-navbar").html(data);
        $("#navbar").find(".nav-item5")
            .addClass('disabled')
            .find('a').append('<span class="sr-only">(current)</span>');
    });
}

// Load the footer using .load() method.
$(function () {
    $("#footer").load("/common/footer.html");
});



// Exercise 5 Objectives
$(document).ready(function () {

    // place cursor in the name field
    $('#name').focus();

    // validate & require name
    $('#name').blur(function () {
        if ($(this).val() == "") {
            $('#nameerr').text('Name is required');
            valid = false;  // set valid flag to false if error found
        } else {
            // set error to blank in case a prior error message was displayed.
            $('#nameerr').text(' ');
        }
    });  // end name validate

    // set regexpression to a variable
    var emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/;

    // require & validate email fields
    $('#email').blur(function () {
        if ($(this).val() == "") {
            $('#emailerr').text('Email is required');
            valid = false;  // set valid flag to false if error found
            // validate email format with regex
        } else if (!$(this).val().match(emailregex)) {
            $('#emailerr').text('Proper email format is required');
            valid = false;  // set valid flag to false if error found
            // set error to blank in case a prior error message was displayed.
        } else {
            $('#emailerr').text(' ');
        }
    });  // end email validate

    // check if email entries match
    $('#email2').blur(function () {
        if ($('#email').val() != $('#email2').val()) {
            $('#emailerr').text("Emails do not match");
            valid = false;  // set valid flag to false if error found
            // set error to blank in case a prior error message was displayed.
        } else {
            $('#emailerr').text(' ');
        }
    });  // end email validate


    // validate & require address
    $('#address').blur(function () {
        if ($(this).val() == "") {
            $('#addresserr').text('Address is required');
            valid = false;  // set valid flag to false if error found
        } else {
            // set error to blank in case a prior error message was displayed.
            $('#addresserr').text(' ');
        }
    });  // end address validate

    // validate & require city
    $('#city').blur(function () {
        if ($(this).val() == "") {
            $('#cityerr').text('City is required');
            valid = false;  // set valid flag to false if error found
        } else {
            // set error to blank in case a prior error message was displayed.
            $('#cityerr').text(' ');
        }
    });  // end city validate

    // validate & require Shipping Address
    $('#shipaddr').blur(function () {
        if ($(this).val() == "") {
            $('#shipaddrerr').text('Shipping Address is required');
            valid = false;  // set valid flag to false if error found
        } else {
            // set error to blank in case a prior error message was displayed.
            $('#shipaddrerr').text(' ');
        }
    });  // end Shipping Address validate

    // validate & require Shipping City
    $('#shipcity').blur(function () {
        if ($(this).val() == "") {
            $('#shipcityerr').text('Shipping City is required');
            valid = false;  // set valid flag to false if error found
        } else {
            // set error to blank in case a prior error message was displayed.
            $('#shipcityerr').text(' ');
        }
    });  // end Shipping City validate

    // set regexpression to a variable
    var zipregex = /^[0-9]{5}$/;

    // require & validate zipcode field
    $('#zip').blur(function () {
        if ($(this).val() == "") {
            $('#ziperr').text('Zip Code is required');
            valid = false;  // set valid flag to false if error found
            // validate zipcode format with regex
        } else if (!$(this).val().match(zipregex)) {
            $('#ziperr').text('5 digits are required');
            valid = false;  // set valid flag to false if error found
            // set error to blank in case a prior error message was displayed.
        } else {
            $('#ziperr').text(' ');
        }
    });  // end zipcode validate

    // require & validate Shipping zipcode field
    $('#shipzip').blur(function () {
        if ($(this).val() == "") {
            $('#shipziperr').text('Shipping Zip Code is required');
            valid = false;  // set valid flag to false if error found
            // validate shipping zipcode format with regex
        } else if (!$(this).val().match(zipregex)) {
            $('#shipziperr').text('5 digits are required');
            valid = false;  // set valid flag to false if error found
            // set error to blank in case a prior error message was displayed.
        } else {
            $('#shipziperr').text(' ');
        }
    });  // end shipping zipcode validate

    // if the checkbox is checked, copy the billing address, city and zip to the corresponding shipping fields
    $('#copy').change(function () {
        if ($(this).prop('checked')) {
            $('#shipaddr').val($("#address").val());
            $('#aptsuite').val($("#aptsuite").val());
            $('#shipcity').val($("#city").val());
            $('#shipzip').val($("#zip").val());
            $('#shipstate').val($("#state").val());

        }
    });  // end copy billing address to shipping address

    // if the checkbox is unchecked, clear the shipping fields
    $('#copy').change(function () {
        if (!$(this).prop('checked')) {
            $('#shipaddr').val("");
            $('#aptsuite').val("");
            $('#shipcity').val("");
            $('#shipzip').val("");
            $('#shipstate').val("");
        }
    });  // end clear shipping


    // When the form is submitted, revalidate all the fields.
    $('#order').submit(function () {
        // set valid flag to true
        valid = true;

        // revalidate name
        if ($('#name').val() == "") {
            $('#nameerr').text('Name is required');
            valid = false;         // set valid flag to false if error found
        } else {
            $('#nameerr').text(' ');
        }

        // revalidate & require email fields
        if ($('#email').val() == "") {
            $('#emailerr').text('Email is required');
            valid = false;  // set valid flag to false if error found
            // revalidate email format with regex
        } else if (!$('#email').val().match(emailregex)) {
            $('#emailerr').text('Proper email format is required');
            valid = false;  // set valid flag to false if error found
            // set error to blank in case a prior error message was displayed.
        } else {
            $('#emailerr').text(' ');
        }
        // recheck if email entries match
        if ($('#email').val() != $('#email2').val()) {
            $('#emailerr').text("Emails do not match");
            valid = false;  // set valid flag to false if error found
            // set error to blank in case a prior error message was displayed.
        } else {
            $('#emailerr').text(' ');
        }

        // revalidate & require address
        if ($('#address').val() == "") {
            $('#addresserr').text('Address is required');
            valid = false;  // set valid flag to false if error found
        } else {
            // set error to blank in case a prior error message was displayed.
            $('#addresserr').text(' ');
        }

        // revalidate & require city
        if ($('#city').val() == "") {
            $('#cityerr').text('City is required');
            valid = false;  // set valid flag to false if error found
        } else {
            // set error to blank in case a prior error message was displayed.
            $('#cityerr').text(' ');
        }

        // revalidate & require shipping address
        if ($('#shipaddr').val() == "") {
            $('#shipaddrerr').text('Shipping Address is required');
            valid = false;  // set valid flag to false if error found
        } else {
            // set error to blank in case a prior error message was displayed.
            $('#shipaddrerr').text(' ');
        }

        // revalidate & require shipping city
        if ($('#shipcity').val() == "") {
            $('#shipcityerr').text('Shipping City is required');
            valid = false;  // set valid flag to false if error found
        } else {
            // set error to blank in case a prior error message was displayed.
            $('#shipcityerr').text(' ');
        }

        // revalidate & require zipcode field
        if ($('#zip').val() == "") {
            $('#ziperr').text('Zip Code is required');
            valid = false;  // set valid flag to false if error found
            // revalidate zipcode format with regex
        } else if (!$('#zip').val().match(zipregex)) {
            $('#ziperr').text('5 digits are required');
            valid = false;  // set valid flag to false if error found
            // set error to blank in case a prior error message was displayed.
        } else {
            $('#ziperr').text(' ');
        }

        // revalidate & require shipping zipcode field
        if ($('#shipzip').val() == "") {
            $('#shipziperr').text('Shipping Zip Code is required');
            valid = false;  // set valid flag to false if error found
            // revalidate shipping zipcode format with regex
        } else if (!$('#shipzip').val().match(zipregex)) {
            $('#shipziperr').text('5 digits are required');
            valid = false;  // set valid flag to false if error found
            // set error to blank in case a prior error message was displayed.
        } else {
            $('#shipziperr').text(' ');
        }

        // if the data is not valid, cancel submission of the form.
        return valid;
    });  // end form submission validation


}); // end document.ready function