var Senders= {
    insert: function (options, callback) {
        function txFunction(tx) {
            var sqls = "INSERT INTO  Senders(SenderFullname, SenderLocation, SenderEmail,Senderphone,Datesend,Totalsend,IsPaid) VALUES(?,?,?,?,?,?,?);";

            tx.executeSql(sqls, options, callback, errorHandler);

        }

        function successHandler() {
            console.info("Success: Insert transaction.");
        }

        db.transaction(txFunction, errorHandler, successHandler);
    },


}

var Receiver= {
    insert: function (options, callback) {
        function txFunction(tx) {
            var sql = "INSERT INTO Receiver (SenderFullname,SenderLocation,SenderEmail,Senderphone,Datesend,hasAmount,Totalsend, IsPaid,ReceiverFullName,ReceiverLocation,ReceiverEmail,Phone,ReceiveDate,ReceiverAccount,Totalled) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successHandler() {
            console.info("Success: Insert transaction.");
        }

        db.transaction(txFunction, errorHandler, successHandler);
    },


    update: function (options, callback) {
        function txFunction(tx) {
            var sql = "UPDATE Receiver SET SenderFullname=?, SenderLocation=?, SenderEmail=?, Senderphone=?,Datesend=?,hasAmount=?,Totalsend=?, IsPaid=?,ReceiverFullName=?, ReceiverLocation=?, ReceiverEmail=?, Phone=?,ReceiveDate=?,ReceiverAccount=?, Totalled=? WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Update transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

    delete: function (options, callback) {
        function txFunction(tx) {

            var sql = "DELETE FROM Receiver WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Delete transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },


    select: function (options, callback) {
        function txFunction(tx) {
            var sql = "SELECT * FROM Receiver WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Select transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },


    selectAll: function (options, callback) {
        function txFunction(tx) {
            var sql = "SELECT * FROM Receiver ;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Select All transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
}

