// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new EmployeeService();
    service.initialize().done(function () {
        console.log("Service initialized");
    });

    /* --------------------------------- Event Registration -------------------------------- */
    // URLのアンカー（#以降の部分）を取得
    var urlHash = location.hash;
    var id_param = urlHash.replace( /#/g , "" ) ;

    if(id_param){
    // URLにアンカーが存在する場合
      targetSerche();
      // $('.search-key').on('keyup', targetSerche);

    }else {
    // URLにアンカーが存在しない
      $('.search-key').on('keyup', findByName);
    }

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

    function targetSerche() {
        service.findByName($('.search-key').val()).done(function (employees) {
            var l = employees.length;
            var caram;
            if(id_param == 1){
              caram = 1;
            }else if (id_param == 2) {
              caram = 0;
            }else if (id_param == 3) {
              caram = 10;
            }else if (id_param == 4) {
              caram = 7;
            }else if (id_param == 5) {
              caram = 5;
            }else if (id_param == 6) {
              caram = 4;
            }else if (id_param == 7) {
              caram = 2;
            }else if (id_param == 8) {
              caram = 6;
            }else if (id_param == 9) {
              caram = 8;
            }else if (id_param == 10) {
              caram = 11;
            }else if (id_param == 11) {
              caram = 9;
            }else{
              caram = 3;
            }
            console.log(caram);
            var e = employees[caram];
            $('.table-striped').empty();
            $('.table-striped').append('<tr><th>ID</th><th>所属</th><th>名前</th><th>郵便番号</th><th>住所</th><th>電話番号</th><th><卒業・卒業予定></th><th>メールアドレス</th></tr>');
            $('.table-striped').append('<tr><th>'+e.id+'</th>'+ '<th><img src="'+e.class+'" height="50px" width="50px"/></th>'+'<th>'+e.firstName+' '+e.lastName+'</th><th>'+e.post+'</th>'+'<th>'+e.place+'</th><th>'+e.cellPhone+'</th><th>'+e.guraduation+'</th><th>'+e.email+'</th></tr>');
        });
    }

}());
