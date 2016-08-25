var EmployeeService = function () {

    this.initialize = function () {
        var deferred = $.Deferred();
        this.db = window.openDatabase("EmployeeDemoDB", "1.0", "Employee Demo DB", 200000);
        this.db.transaction(
            function (tx) {
                createTable(tx);
                addSampleData(tx);
            },
            function (error) {
                console.log('Transaction error: ' + error);
                deferred.reject('Transaction error: ' + error);
            },
            function () {
                console.log('Transaction success');
                deferred.resolve();
            }
        );
        return deferred.promise();
    }

    this.findByName = function (searchKey) {
        var deferred = $.Deferred();
        this.db.transaction(
            function (tx) {

                var sql = "SELECT e.id, e.firstName, e.lastName, e.class, e.post, e.place, e.cellPhone, e.guraduation, e.email, count(r.id) reportCount " +
                    "FROM employee e LEFT JOIN employee r ON r.managerId = e.id " +
                    "WHERE e.firstName || ' ' || e.lastName LIKE ? " +
                    "GROUP BY e.id ORDER BY e.lastName, e.firstName";

                tx.executeSql(sql, ['%' + searchKey + '%'], function (tx, results) {
                    var len = results.rows.length,
                        employees = [],
                        i = 0;
                    for (; i < len; i = i + 1) {
                        employees[i] = results.rows.item(i);
                    }
                    deferred.resolve(employees);
                });
            },
            function (error) {
                deferred.reject("Transaction Error: " + error.message);
            }
        );
        return deferred.promise();
    }

    this.findById = function (id) {
        var deferred = $.Deferred();
        this.db.transaction(
            function (tx) {

                var sql = "SELECT e.id, e.firstName, e.lastName, e.class, e.guraduation, e.post, e.cellPhone, e.email, e.place, e.managerId, m.firstName managerFirstName, m.lastName managerLastName, count(r.id) reportCount " +
                    "FROM employee e " +
                    "LEFT JOIN employee r ON r.managerId = e.id " +
                    "LEFT JOIN employee m ON e.managerId = m.id " +
                    "WHERE e.id=:id";

                tx.executeSql(sql, [id], function (tx, results) {
                    deferred.resolve(results.rows.length === 1 ? results.rows.item(0) : null);
                });
            },
            function (error) {
                deferred.reject("Transaction Error: " + error.message);
            }
        );
        return deferred.promise();
    };

    var createTable = function (tx) {
        tx.executeSql('DROP TABLE IF EXISTS employee');
        var sql = "CREATE TABLE IF NOT EXISTS employee ( " +
            "id INTEGER PRIMARY KEY AUTOINCREMENT, " +
            "firstName VARCHAR(50), " +
            "lastName VARCHAR(50), " +
            "class VARCHAR(50), " +
            "managerId INTEGER, " +
            "guraduation VARCHAR(50), " +
            "post VARCHAR(50), " +
            "cellPhone VARCHAR(50), " +
            "place VARCHAR(50), " +
            "email VARCHAR(50))";
        tx.executeSql(sql, null,
            function () {
                console.log('Create table success');
            },
            function (tx, error) {
                alert('Create table error: ' + error.message);
            });
    }

    var addSampleData = function (tx, employees) {

        var employees = [
            {"id": 1, "firstName": "田中", "lastName": "太郎", "managerId": 1, "managerName": "", "class": "img/bird.png", "place": "北海道函館市大縄町14-14", "cellPhone": "017-739-1111", "post": "041-0811", "email": "jking@fakemail.com", "guraduation":"2017","twitterId":"@fakejking","blog":"http://coenraets.org"},
            {"id": 2, "firstName": "中島", "lastName": "佑都", "managerId": 2, "managerName": "James King", "class": "img/bird.png", "place": "北海道函館市大縄町14-13", "cellPhone": "017-739-1112", "post": "041-0811", "email": "jtaylor@fakemail.com", "guraduation": "2018", "twitterId": "@fakejtaylor", "blog": "http://coenraets.org"},
            {"id": 3, "firstName": "鍋島", "lastName": "隆", "managerId": 3, "managerName": "James King", "class": "img/zou.png", "place": "北海道函館市大縄町14-12", "cellPhone": "017-739-1113", "post": "041-0811", "email": "elee@fakemail.com", "guraduation": "2019", "twitterId": "@fakeelee", "blog": "http://coenraets.org"},
            {"id": 4, "firstName": "佐々木", "lastName": "華", "managerId": 4, "managerName": "James King", "class": "img/zou.png", "place": "北海道函館市大縄町14-11", "cellPhone": "017-739-1114", "post": "041-0811", "email": "jwilliams@fakemail.com", "guraduation": "2020", "twitterId": "@fakejwilliams", "blog": "http://coenraets.org"},
            {"id": 5, "firstName": "高橋", "lastName": "由紀子", "managerId": 5, "managerName": "James King", "class": "img/bird.png", "place": "青森県青森市高田字朝日山809-221", "cellPhone": "017-739-1111", "post": "030-0151", "email": "rmoore@fakemail.com", "guraduation": "2008", "twitterId": "@fakermoore", "blog": "http://coenraets.org"},
            {"id": 6, "firstName": "木村", "lastName": "瑞樹", "managerId": 6, "managerName": "John Williams", "class": "img/rabit.png", "place": "北海道北斗市中野通300", "cellPhone": "017-739-2222", "post": "049-0156", "email": "pjones@fakemail.com", "guraduation": "2009", "twitterId": "@fakepjones", "blog": "http://coenraets.org"},
            {"id": 7, "firstName": "佐藤", "lastName": "武志", "managerId": 7, "managerName": "John Williams", "class": "img/kujira.png", "place": "北海道北斗市中野通200", "cellPhone": "017-739-3333", "post": "049-0156", "email": "pgates@fakemail.com", "guraduation": "2009, MA", "twitterId": "@fakepgates", "blog": "http://coenraets.org"},
            {"id": 8, "firstName": "桜木", "lastName": "花道", "managerId": 2, "managerName": "Julie Taylor", "class": "img/dolphin.png", "place": "青森県青森市荒川", "cellPhone": "017-739-4444", "post": "030-0011", "email": "lwong@fakemail.com", "guraduation": "2008", "twitterId": "@fakelwong", "blog": "http://coenraets.org"},
            {"id": 9, "firstName": "橋本", "lastName": "萌花", "managerId": 8, "managerName": "Julie Taylor", "class": "img/hippo.png", "place": "青森県青森市油川", "cellPhone": "017-739-5555", "post": "030-0201", "email": "gdonovan@fakemail.com", "guraduation": "2014", "twitterId": "@fakegdonovan", "blog": "http://coenraets.org"},
            {"id": 10, "firstName": "清水", "lastName": "雄二", "managerId": 9, "managerName": "Ray Moore", "class": "img/hippo.png", "place": "青森県青森市大野", "cellPhone": "017-739-6666", "post": "030-0338", "email": "kbyrne@fakemail.com", "guraduation": "2015", "twitterId": "@fakekbyrne", "blog": "http://coenraets.org"},
            {"id": 11, "firstName": "吉岡", "lastName": "里見", "managerId": 10, "managerName": "Ray Moore", "class": "img/dolphin.png", "place": "青森県青森市甲田", "cellPhone": "017-739-7777", "post": "030-0667", "email": "ajones@fakemail.com", "guraduation": "2017", "twitterId": "@fakeajones", "blog": "http://coenraets.org"},
            {"id": 12, "firstName": "坂本", "lastName": "燐火", "managerId": 11, "managerName": "John Williams", "class": "img/hippo.png", "place": "北海道函館市富岡町2-45", "cellPhone": "017-739-8888", "post": "041-0880", "email": "swells@fakemail.com", "guraduation": "2019","twitterId": "@fakeswells", "blog": "http://coenraets.org"}
        ];
        var l = employees.length;
        var sql = "INSERT OR REPLACE INTO employee " +
            "(id, firstName, lastName, managerId, class, guraduation, post, cellPhone, email, place) " +
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        var e;
        for (var i = 0; i < l; i++) {
            e = employees[i];
            tx.executeSql(sql, [e.id, e.firstName, e.lastName, e.managerId, e.class, e.guraduation, e.post, e.cellPhone, e.email, e.place],
                function () {
                    console.log('INSERT success');
                },
                function (tx, error) {
                    alert('INSERT error: ' + error.message);
                });
        }
    }

}
