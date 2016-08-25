var employees = [
    {"id": 0, "Name": "山田一郎", "post": "041-0811", "location": "北海道函館市大縄町１４−１４", "TELL": "017-739-1111" , "guraduation": 2014, "mail": "bird@gmail.com"},
    {"id": 1, "Name": "山田次郎", "post": "041-0811", "location": "北海道函館市大縄町１４−１４", "TELL": "017-739-1111"},
    {"id": 2, "Name": "山田三郎", "post": "041-0811", "location": "北海道函館市大縄町１４−１４", "TELL": "017-739-1111"},
    {"id": 3, "Name": "山田四朗", "post": "041-0811", "location": "北海道函館市大縄町１４−１４", "TELL": "017-739-1111"},
    {"id": 4, "Name": "木村花",   "post": "739-7515", "location": "青森県青森市高田字朝日山", "TELL": "017-739-2222"},
    {"id": 5, "Name": "佐々木華", "post": "041-0811", "location": "青森県青森市大野", "TELL": "017-739-3333"},
    {"id": 6, "Name": "高橋琢磨", "post": "041-0811", "location": "青森県青森市大野", "TELL": "017-739-4444"},
    {"id": 7, "Name": "吉岡知美", "post": "041-0811", "location": "青森県青森市荒川", "TELL": "017-739-5555"},
    {"id": 8, "Name": "佐藤沙織", "post": "041-0811", "location": "青森県青森市油川", "TELL": "017-739-6666"},
    {"id": 9, "Name": "清水麻衣", "post": "041-0811", "location": "青森県青森市大野", "TELL": "017-739-7777"},
    {"id": 10,"Name": "小林健二", "post": "041-0811", "location": "青森県青森市甲田", "TELL": "017-739-8888"}
];

exports.findAll = function (req, res, next) {
    var name = req.query.name;
    console.log('name: ' + name);
    if (name) {
        var results = employees.filter(function(element) {
            var fullName = element.firstName + " " + element.lastName;
            return fullName.toLowerCase().indexOf(name.toLowerCase()) > -1;
        });
        res.send(results);
    } else {
        res.send(employees);
    }
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(employees[id]);
};
