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
            $('.table-striped').append('<tr><th>ID</th><th>所属</th><th>名前</th></tr>');
            for (var i = 0; i < l; i++) {
                e = employees[i];
                $('.table-striped').append('<tr><th>'+e.id+'</th>'+ '<th><img src="'+e.class+'" height="50px" width="50px"/></th>' +'<th>'+ '<a href="detailRoster.html#'+e.id+'">' + e.firstName + ' ' + e.lastName +'</a>'+'</th>'+'</tr>');
                console.log("DBから値を取得");
            }
        });
    }

  // URLのアンカー（#以降の部分）を取得
  var urlHash = location.hash;
  var result = urlHash.replace( /#/g , "" ) ;
  console.log(result);
  // URLにアンカーが存在する場合
  if(urlHash){
    if (result == '2') {
      service.findHello();
      } else {

      }
    }

}());
