



function Overcalculation() {
     $("#bSave").click(function () {
        var Amount = $("#Amount").val();
        var total=(parseInt(Amount)*5)/100
        $("#Total").val((parseInt(total)+ parseInt(Amount))  + 'Ca' );

    });
}

function Overcalculation2() {
    $("#bSave").click(function () {
        var Amount = $("#Amount").val();
        var total=(parseInt(Amount)*1200)/100
        $("#Received").val(parseInt(total) + 'Nakfa' );

    });
}


function calculation() {
    $("#updatebutton").click(function () {
        var Amount = $("#AmountS").val();
        var total=(parseInt(Amount)*5)/100
        $("#TotalS").val((parseInt(total)+ parseInt(Amount))  + 'Ca' );

    });
}

function calculation2() {
    $("#updatebutton").click(function () {
        var Amount = $("#AmountS").val();
        var total=(parseInt(Amount)*1200)/100
        $("#ReceivedR").val(parseInt(total) + 'Nakfa' );

    });
}



// function getexpireDate(dateEX){
//     var year = Number(dateEX.substr(0,4));
//     var month = Number(dateEX.substr(5,2)) - 1;
//     var day = Number(dateEX.substr(8,2));
//     var today = new Date();
//     var ExpDate = today.getFullYear() + year;
//     if (today.getMonth() > month && today.getFullYear() > year && today.getDate() > day) {
//         ExpDate--;
//
//     }
//     return ExpDate;
// }

function doValidate_AddSenderinformation() {
    var form = $("#AddSenderinformation");
    form.validate({
        rules: {
            SenderName: {
                required: true,
                minlength: 2,
                maxlength: 20

            },

            SenderEmail: {
                required: true,
                emailcheck: true
            },
            PhoneNumber: {
                phone: true,
                digits: true,
                required: true

            },

            date: {
                required: true,

            },
            Amount: {
                required: true,


            },

            Nameholder: {
                required: true,

            },
            CardNumber: {
                required: true,
                minlength: 13,
                maxlength: 16,
                digits: true

            },
            dateEX: {
                required: true,
            },
            cvv: {
                required: true,
                minlength: 3,
                maxlength: 3,
                digits: true

            },
            ReceiverName: {
                required: true,
                minlength: 3,

            },
            ReceiverEmail: {
                required: true,

            },

            Number: {

                phone: true,
                required: true,
                digits: true

            },
            Receiverdate: {
                required: true,


            },
            Account: {

                required: true,
                minlength: 8,
                maxlength: 8,
                myRule: ["00000000"],
                digits: true

            }
        },


        messages: {
            SenderName: {
                required: "You must enter Sender  Full name "


            },

            SenderEmail: {
                required: "please enter a valid email address",
                emailcheck: " Enter  valid email address "
            },

            PhoneNumber: {
                required: "Phone Number is required ",

            },
            date: {
                required: "Date send is required "

            },
            Amount: {
                required: "Amount is required ",

            },

            Nameholder: {
                required: "Enter the Name on the card ",


            },
            CardNumber: {
                required: "enter a  required value ",
                minlength: "minimum input is 13 digits  ",
                maxlength: "maximum input is 16 digits"

            },
            dateEX: {
                required: "enter a  expire date",
                expcheck: "your card needs renewal or enter correctly"

            },

            cvv: {
                required: "please enter the security code of your card ",
                range: "The number is not more than 3 digits not less than three"


            },
            ReceiverName: {
                required: "enter a  receiver FullName ",

            },
            ReceiverEmail: {
                required: "please enter a valid email address",
                emailcheck: "Email must be a gmail"
            },

            Number: {
                required: "Phone Number is required ",
            },
            Receiverdate: {
                required: "Date receive is required ",

            },

            Account: {
                required: "Enter the Count Number ",

            }


        },

    });
    return form.valid();
}




function doValidate_EditForm2() {
    var form = $("#EditForm2");
    form.validate({
        rules: {
            SenderNameSE: {
                required: true,
                minlength: 2,
                maxlength: 20

            },

            SenderEmailS: {
                required: true,
                emailcheck: true
            },
            PhoneNumberS: {
                phone: true,
                digits: true,
                required: true

            },

            dateS: {
                required: true,

            },
            AmountS: {
                required: true,


            },

            NameholderS: {
                required: true,

            },
            CardNumberS: {
                required: true,
                minlength: 13,
                maxlength: 16,
                digits: true
            },
            dateEXS: {
                required: true,
            },
            cvvS: {
                required: true,
                minlength: 3,
                maxlength: 3,
                digits: true

            },
            ReceiverNamer: {
                required: true,

            },
            ReceiverEmailr: {
                required: true,

            },

            PhoneNumberr: {

                phone: true,
                required: true,
                digits: true

            },
            Receiverdater: {
                required: true,


            },
            AccountE: {

                required: true,
                minlength: 8,
                maxlength: 8,
                myRule: ["00000000"],
                digits: true

            }
        },


        messages: {
            SenderNameSE: {
                required: "You must enter Sender  Full name "


            },

            SenderEmailS: {
                required: "please enter a valid email address",
                emailcheck: "Email must be a gmail"
            },

            PhoneNumberS: {
                required: "Phone Number is required ",

            },
            dateS: {
                required: "Date send is required "

            },
            AmountS: {
                required: "Amount is required ",

            },

            NameholderS: {
                required: "Enter the Name on the card ",
                 // text:  "input is text only "



            },
            CardNumberS: {
                required: "enter a  required value ",
                minlength: "minimum input is 13 digits",
                maxlength: "maximum input is 16 digits"


            },
            dateEXS: {
                required: "enter a  expire date",
                expcheck: "your card needs renewal or enter correctly"

            },

            cvvS: {
                required: "please enter the security code of your card ",
                range: "The number is not more than 3 digits not less than three"


            },
            ReceiverNamer: {
                required: "enter a  receiver FullName ",

            },
            ReceiverEmailr: {
                required: "please enter a valid email address",
                emailcheck: "Email must be a gmail"
            },
            PhoneNumberr: {
                required: "Phone Number is required ",
            },
            Receiverdater: {
                required: "Date receive is required ",

            },

            AccountE: {
                required: "Enter valid Account Number ",

            }


        },

    });
    return form.valid();
}


jQuery.validator.addMethod("phone", function(phone, element) {
    phone = phone.replace(/\s+/g, "");
    return this.optional(element) || phone.length > 9 &&
        phone.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
}, "Please Enter registered phone number");


jQuery.validator.addMethod("myRule", function(value, element, params) {
    return this.optional(element) || value != params[0];
}, "Account number 00000000 is invalid");

jQuery.validator.addMethod("emailcheck", function (value,element){
    var EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return this.optional(element) || EmailRegex.test(value);
})



function clearLocalStorage(){
    alert("clear local storage.")
    localStorage.clear();
}


function defualtSenderEmail1(){
    var regex = /^.+.com$/;
    var email=$("#defualtSenderEmail1").val();
    var status=regex.test(email);
    console.log(status);
    if(!status){
        if(email.length===0)
            $('#defualtsenderEmailError').html(messages.SenderEmailS.required);
        else
            $('#defualtsenderEmailError').html(messages.SenderEmailS.invalid);
        $('#defualtsenderEmailError1').css('display','block');
        $('#defualtSenderEmail1').addClass('errorBorder');
        return false;
    }
    else{
        $('#defualtsenderEmailError').css('display','none');
        $('#defualtSenderEmail1').removeClass('errorBorder');
        return true;
    }
}

