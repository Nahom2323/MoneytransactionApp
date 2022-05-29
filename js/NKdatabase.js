
var db;

function errorHandler(tx, error){
    console.error("SQL error: " + tx + " (" + error.code + ") : " + error.message);
}
var DB = {
    createDatabase: function () {

        var shortName = "ReaSeaApp";
        var version = "1.0";
        var displayName = "Database for Money transfer App";
        var dbSize = 2 * 1024 * 1024;

        function successCallback() {
            console.info("Success: Database created successfully");
        }

        db = openDatabase(shortName, version, displayName, dbSize, successCallback);

    },

    CreateTables: function () {
        function txFunction(tx) {
            console.info("creating table : Senders")
            var sqls = "CREATE TABLE IF NOT EXISTS Senders( "
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                + "SenderFullname VARCHAR(20) NOT NULL,"
                + "SenderLocation VARCHAR(20) NOT NULL,"
                + "SenderEmail VARCHAR(30),"
                + "Senderphone NUMBER,"
                + "Datesend  DATE,"
                + "Totalsend NUMBER,"
                + "IsPaid  VARCHAR (1));";


            console.info("Creating table: Receiver");
            var sql = "CREATE TABLE IF NOT EXISTS Receiver( " +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "SenderFullname VARCHAR(20) NOT NULL,"+
                "SenderLocation VARCHAR(20) NOT NULL,"+
                "SenderEmail VARCHAR(30),"+
                "Senderphone NUMBER,"+
                "Datesend  DATE,"+
                "hasAmount  VARCHAR(1),"+
                "Totalsend NUMBER,"+
                "IsPaid  VARCHAR(1),"+
                "ReceiverFullName VARCHAR(30) NOT NULL," +
                "ReceiverLocation VARCHAR(30) NOT NULL," +
                "ReceiverEmail VARCHAR(30)," +
                "Phone NUMBER," +
                "ReceiveDate DATE," +
                "ReceiverAccount NUMBER,"+
                "Totalled NUMBER);";

            var options = [];

            function successCreate() {
                console.info("Success: Create table: Senders successful.");
                console.info("Success: Create table: Receiver successful.");
            }

            tx.executeSql(sqls, options, successCreate, errorHandler);
            tx.executeSql(sql, options, successCreate, errorHandler);


        }

        function successTransaction() {
            console.info("Success: Create tables transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    dropTables: function(){

        function txFunction(tx){
            var sqls = "DROP TABLE IF EXISTS Senders;";
            var sql = "DROP TABLE IF EXISTS Receiver;";
            var options = [];

            function successDrop() {
                console.info("Success: Senders and Receiver are  dropped successfully");
            }
            tx.executeSql(sqls, options, successDrop, errorHandler );
            tx.executeSql(sql, options, successDrop, errorHandler );


        }

        function successTransaction(){
            console.info("Success: Drop tables transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }

};


