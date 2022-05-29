



function Validation() {
    if (doValidate_AddSenderinformation()) {

        console.info("Validation Success");

        var SenderFullname = $("#SenderName").val();
        var senderLocation = $("#selprovince").val();
        var SenderEmail = $("#SenderEmail").val();
        var Senderphone = $("#PhoneNumber").val();
        var Datesend = $("#date").val();
        var Totalsend = $("#Total").val();
        var IsPaid = $("#paymentmethod").prop('checked');

        var  options = [SenderFullname,senderLocation,SenderEmail,Senderphone,Datesend,Totalsend,IsPaid];
        function callback (){
            console.info("success: record inserted");
        }

        Senders.insert(options,callback());
    }else {
        console.error("validation error");
    }
}


function  receiver(){
    if (doValidate_AddSenderinformation()) {

        console.info("Validation Success");
        var SenderFullname = $("#SenderName").val();
        var SenderLocation = $("#selprovince").val();
        var SenderEmail = $("#SenderEmail").val();
        var Senderphone = $("#PhoneNumber").val();
        var Datesend = $("#date").val();
        var hasAmount = $("#checkbox").prop('checked');
        var Totalsend = $("#Total").val();
        var IsPaid = $("#paymentmethod").prop('checked');
        var ReceiverFullName = $("#ReceiverName").val();
        var ReceiverLocation = $("#Recievercountry").val()
        var receiverEmail = $("#ReceiverEmail").val();
        var phone = $("#Number").val();
        var receiveDate = $("#Receiverdate").val();
        var receiverAccount = $("#Account").val()
        var Totalled  = $("#Received").val()

        var  options = [ SenderFullname,SenderLocation,SenderEmail,Senderphone,Datesend,hasAmount,Totalsend, IsPaid,ReceiverFullName,ReceiverLocation,receiverEmail,phone,receiveDate,receiverAccount,Totalled];


        function callback (){
            alert("new feed back is added successfully")
            console.info("success: recored inserted");
        }

        Receiver.insert(options,callback());
    }else {
        console.error("validation error");
    }
}


function saveDefault(){
    if(!defualtSenderEmail1())
        return false;
    alert("Default reviewer email saved.")
    localStorage.setItem("DefaultEmail",$('#defualtSenderEmail1').val());
    return true;
}

function clearDatabase() {
    var result = confirm("Really want to clear database?");
    if (result) {
        try {
            DB.dropTables();
            alert("Database cleared!");
        } catch (e) {
            alert(e);
        }
    }
}

function updateInfo(){

    if (doValidate_EditForm2()) {

        console.info("Validation Success");

        var id = localStorage.getItem("id");

        var SenderFullname = $("#SenderNameSE").val();
        var SenderLocation = $("#selprovinceS").val();
        var SenderEmail = $("#SenderEmailS").val();
        var Senderphone = $("#PhoneNumberS").val();
        var Datesend = $("#dateS").val();
        var hasAmount = $("#checkboxS").prop('checked');
        var Totalsend = $("#TotalS").val();
        var IsPaid = $("#paymentmethodS").prop('checked');
        var ReceiverFullName = $("#ReceiverNamer").val();
        var ReceiverLocation = $("#Recievercountryr").val();
        var ReceiverEmail = $("#ReceiverEmailr").val();
        var Phone = $("#PhoneNumberr").val();
        var ReceiveDate = $("#Receiverdater").val();
        var ReceiverAccount = $("#AccountE").val()
        var Totalled = $("#ReceivedR").val();
        var options = [SenderFullname,SenderLocation,SenderEmail,Senderphone,Datesend,hasAmount,Totalsend,IsPaid,ReceiverFullName,ReceiverLocation,ReceiverEmail,Phone,ReceiveDate,ReceiverAccount,Totalled, id];

        function callback() {
            alert("new input is  updated successfully")
            console.info("Success: Record updated successfully");
        }

        Receiver.update(options, callback);
    }else {
        console.error("validation error");
    }
}


function  deleteInfo() {

    var id = localStorage.getItem("id");
    var options = [id];

    function callback() {
        console.info("Success: Record deleted successfully");
        $(location).prop('href', '#SenderRecieverchekeuppage');

    }

    Receiver.delete(options, callback);
}



function getallInfo() {
    var options = [];

    function callback(tx, results) {

        var htmlCode = "";

        for (var i = 0; i < results.rows.length; i++) {

            var row = results.rows[i];

            console.info("Id: " + row['id'] +
                " SenderFullname: " + row['SenderFullname'] +
                " SenderLocation: " + row['SenderLocation'] +
                " Senderphone: " + row['Senderphone'] +
                " Datesend: " + row['Datesend'] +
                "Totalsend: " + row['Totalsend']+
                " ReceiverFullName: " + row['ReceiverFullName'] +
                " Phone: " + row['Phone'] +
                " ReceiveDate: " + row['ReceiveDate'] +
                "Totalled: " + row['Totalled']);

            htmlCode += "<li><a data-role='button' data-row-id=" + row['id'] + " href='#'>" +
                "<h2>SenderFullname: " + row['SenderFullname'] + "</h2>" +
                "<h3> SenderLocation: " + row['SenderLocation'] + "</h3>" +
                "<h3> Senderphone: " + row['Senderphone'] + "</h3>" +
                "<h3>Datesend: " + row['Datesend'] + "</h3>" +
                "<h5>Totalsend: " + row['Totalsend'] + "</h5>" +
                "<h2>ReceiverFullName: " + row['ReceiverFullName'] + "</h2>" +
                "<h3>Phone: " + row['Phone'] + "</h3>" +
                "<h3>ReceiveDate: " + row['ReceiveDate'] + "</h3>" +
                "<h2> Totalled: " + row['Totalled'] + "</h2>" +


                "</a></li>";
        }

        var lv = $("#List");

        lv = lv.html(htmlCode);
        lv.listview("refresh");
        $("#List a").on("click", clickHandler);

        function clickHandler() {
            localStorage.setItem("id", $(this).attr("data-row-id"));

            $(location).prop('href', '#Editpage');
        }

    }

    Receiver.selectAll(options, callback);

}



function receiverAccount() {

    var id = localStorage.getItem("id");
    var options = [id];

    function callback(tx, results) {
        var row = results.rows[0];

        console.info("Id: " + row['id'] +

            " SenderFullname: " + row['SenderFullname'] +
            "SenderLocation: " + row['SenderLocation'] +
            " SenderEmail: " + row['SenderEmail'] +
            " Senderphone: " + row['Senderphone'] +
            " Datesend: " + row['Datesend'] +
            " hasAmount: " + row['hasAmount'] +
            " Totalsend: " + row['Totalsend'] +
            " IsPaid: " + row['IsPaid'] +
            " ReceiverFullName: " + row['ReceiverFullName'] +
            "ReceiverLocation: " + row['ReceiverLocation'] +
            " ReceiverEmail: " + row['ReceiverEmail'] +
            " Phone: " + row['Phone'] +
            " DateReceived: " + row['ReceiveDate'] +
            " ReceivedAccount: " + row['ReceiverAccount'] +
            "Totalled: " + row['Totalled']);


        $("#SenderNameSE").val(row['SenderFullname']);
        $("#selprovinceS").val(row['SenderLocation']);
        $("#SenderEmailS").val(row['SenderEmail']);
        $("#PhoneNumberS").val(row['Senderphone']);
        $("#dateS").val(row['Datesend']);

        if (row['hasAmount'] === 'true') {
            $("#checkboxS").prop("checked", true);

        }
        else {
            $("#checkboxS").prop("!checked", false);
        }


        $("#TotalS").val(row['Totalsend']);
        if (row['IsPaid'] === 'true') {
            $("#paymentmethodS").prop("checked", true);
        }
        else {
            $("#paymentmethodS").prop("!checked", false);
        }

        $("#EditForm2 :checkbox").checkboxradio("refresh");

        $("#ReceiverNamer").val(row['ReceiverFullName']);
        $("#Recievercountryr").val(row['ReceiverLocation']);
        $("#ReceiverEmailr").val(row['ReceiverEmail']);
        $("#PhoneNumberr").val(row['Phone']);
        $("#Receiverdater").val(row['ReceiveDate']);
        $("#Account").val(row['ReceiverAccount']);
        $("#ReceivedR").val(row['Totalled'])

    }

    Receiver.select(options, callback);
}




