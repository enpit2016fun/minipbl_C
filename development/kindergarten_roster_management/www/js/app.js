// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new EmployeeService();
    service.initialize().done(function () {
        console.log("Service initialized");
    });

    /* --------------------------------- Event Registration -------------------------------- */
      $('.search-key').on('keyup', findByName);


    /* ---------------------------------- Local Functions ---------------------------------- */
    function findByName() {
        service.findByName($('.search-key').val()).done(function (employees) {
            var l = employees.length;
            var e;
            $('.table-striped').empty();
            for (var i = 0; i < l; i++) {
                e = employees[i];
                $('.table-striped').append('<tr><th><a href="detailRoster.html#employees/'+e.id+'">'+'<th>'+e.id+'</th>'+'<th>'+ e.firstName + ' ' + e.lastName + '</th>' + '<th>' + e.cellPhone + '</a></th></tr>');
                console.log("DBから値を取得");
            }
        });
    }

}());
