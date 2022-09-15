$(document).ready(function () {

    var consentLabel = $('.consent_checkbox');

    var consentBtn = $('.checkbox_input input');
    var consentBtn2 = $('.checkbox_input.two input');
    var submitBtn = $('.submit-btn');




    // if ($('.checkbox_input input').is(":checked") == false ) {
       $('.submit-btn').attr('disabled', true);
    // }



    $('body').keydown(function (event) {

      if (!$('.required').val() == ''  )   {
        console.log("yes")

      }

      else {
    console.log("no")

      }


    })


    // $(consentLabel).on('click', function () {
    //
    //
    //
    //     if ($('.checkbox_input input').is(':checked') ) {
    //         $('.submit-btn').removeAttr('disabled');
    //         console.log("no")
    //     }
    //
    //     else {
    //         $('.submit-btn').attr('disabled', true);
    //         console.log("yes")
    //     }
    //
    // })



    //submit form
    $("#formSubmit").on("click", function (e) {
        e.preventDefault();

        // Grab inputs and store as variables
        var FirstName = $("#firstName").val(),
            LastName = $("#lastName").val(),
            Email = $("#emailAddress").val(),
            MobilePhone = $("#mobilePhone").val(),
            BusinessName = $("#businessName").val(),
            Occupation = $("#occupation option:selected").val(),
            MailingAddress = $("#mailingAddress").val(),
            City = $("#city").val(),
            State = $("#state option:selected").val(),
            ZipCode = $("#zipcode").val(),
            TendovoQuestion = $("#tendovoQues option:selected").val(),

            HoodieSize = $("#hoodie option:selected").val(),
            Consent = $('#consent').is(':checked'),
            Timestamp = new Date().toString(),
            missingField = false,
            badEmail = false,
            badZip = false,
            errorArr = [];

        console.log(FirstName, LastName, Email, MobilePhone, BusinessName, Occupation, MailingAddress, City, State, ZipCode, TendovoQuestion, HoodieSize, Consent);

        function removeError(e) {
            e.currentTarget.parentNode.classList.remove("error");
        }

        function removeCheckError(e) {
            e.currentTarget.classList.remove("error");
        }

        // Validation for email and text inputs below
        $("#basic-form .form-input:not(#twitterHandle, #saltro_q)").each(function () {
            if ($(this).val() == "" || $(this).val() == null || $(this).val() == undefined) {
                $(this).parent().addClass("error");
                $(this).on("keyup change", removeError);
                missingField = true;
            } else {
                $(this).parent().removeClass("error");
            }
        });

        function testEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        }

        function testZip(zipcode) {
            var re = /^\d{5}$/;
            return re.test(zipcode);
        }
        if (!testEmail(Email)) {
            $("#emailAddress").parent().addClass("error");
            $("#emailAddress").on("keyup change", removeError);
            badEmail = true;
        } else {
            $("#emailAddress").parent().removeClass("error");
        }

        if (!testZip(ZipCode)) {
            $("#zipcode").parent().addClass("error");
            $("#zipcode").on("keyup change", removeError);
            badZip = true;
        } else {
            $("#zipcode").parent().removeClass("error");
        }

        if (missingField) {
            errorArr.push("All fields with an asterisk (*) are required.")
        }
        if (badEmail) {
            errorArr.push("Please provide a valid email address.")
        }
        if (badZip) {
            errorArr.push("Please provide a valid zip code.")
        }

        $("#error-list").text(errorArr.join(" ")).css('margin-top', '30px');

        // Submit function
        if ($("#basic-form").find(".error").length === 0) {
            var dataLayer = window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'cFormSuccess'
            });
            $.ajax({
                type: "POST",
                url: 'https://marketing.syngenta-us.com/SUC-Receive-2022',
                data: {
                    FirstName: FirstName,
                    LastName: LastName,
                    Email: Email,
                    MobilePhone: MobilePhone,
                    BusinessName: BusinessName,
                    Occupation: Occupation,
                    Address: MailingAddress,
                    City: City,
                    State: State,
                    ZipCode: ZipCode,
                    TendovoQuestion: TendovoQuestion,

                    HoodieSize: HoodieSize,
                    ConsentSMS: Consent,
                    Timestamp: Timestamp
                },
                crossDomain: true,
                success: function (data, response, statusText) {
                    if (data.indexOf("Duplicate") > -1) {
                        // Duplicate email. User has already registered with this email.
                        console.log("Form submit duplicate");
                        $("#sign-up-form").toggleClass('hidden');
                        $("#form-thanks").toggleClass('hidden');
                    } else if (data.indexOf("success") > -1) {
                        // Success! Form went through. Do post success stuff here.
                        console.log("Form submit success");
                        console.log("btn-clicked");
                        $("#sign-up-form").toggleClass('hidden');
                        $("#form-thanks").toggleClass('hidden');
                    };
                },
                error: function (data, response, statusText) {
                    // Data didn't make it to MC. Contact devs at G&S if persists.
                    alert("Something went wrong. Please try again later.");
                }
            });
        } else {
            return;
        };
    });
});
