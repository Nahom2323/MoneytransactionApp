

function bSave_click(){
    Overcalculation();
    Overcalculation2();
    Validation();
    receiver();

}



function updatebutton_click(){
    calculation();
    calculation2();
    updateInfo();
}
function btnClearDatabase_click() {
    clearDatabase();
}
function delete_click() {
    deleteInfo();
}


function SenderRecieverchekeuppage_show(){
    getallInfo()
}

function Editpage_show() {
    receiverAccount()
}




function init(){
    $("#bSave").on("click",bSave_click);
    $("#updatebutton").on("click", updatebutton_click);
    $("#ClearDatabase").on("click", btnClearDatabase_click);
    $("#deletebutton").on("click", delete_click);

    $("#SenderRecieverchekeuppage").on("pageshow", SenderRecieverchekeuppage_show);
    $("#Editpage").on("pageshow", Editpage_show);



}

$(function () {
    $("#checkbox").click(function () {
        if ($(this).is(":checked")) {
            $("#checkboxG").show();
        } else {
            $("#checkboxG").hide();
        }
    });
});

$(function () {
    $("#checkboxS").click(function () {
        if ($(this).is(":checked")) {
            $("#checkboxSE").show();
        } else {
            $("#checkboxSE").hide();
        }
    });
});

$(function () {
    $("#paymentmethod").click(function () {
        if ($(this).is(":checked")) {
            $("#payment").show();
        } else {
            $("#payment").hide();
        }
    });
});
$(function () {
    $("#paymentmethodS").click(function () {
        if ($(this).is(":checked")) {
            $("#paymentS").show();
        } else {
            $("#paymentS").hide();
        }
    });
});


$(document).ready(function (){

    $("#defualtSenderEmail1").on("change", function () {
        defualtSenderEmail1();
    });
    $("#Savedefault").on("click", function () {
        saveDefault();


    });
    $("#ClearDatabase").on("click", function () {
        clearLocalStorage();
    });
 })


function initDB(){
    try {
        DB.createDatabase();
        if (db) {
            console.info("Creating table ...");
            DB.CreateTables();
        } else {
            console.error("DB creation failed");
        }
    } catch (e) {
        console.error("Error: (Fatal) Error in initDB(). can not proceed.")
    }

}


$(document).ready(function () {

    init();
    initDB();

});
