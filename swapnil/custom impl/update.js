var update = function(id, value) {

    var mongodbClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://swapnil:"+encodeURIComponent("swap-1997")+"@swapnil-project-nbgwy.mongodb.net/test?retryWrites=true";

    mongodbClient.connect(url, {useNewUrlParser: true}, function(err, db) {
        if(err){
            console.log(err);
        }else {

        console.log("connected !");

        var cursor = db.db('developmentDB').collection('IotData').findOne({"id":id}, function(err, data) {
            if(err){
                console.log(err);
            }

            min_val = data.min_val;
            if(value <= min_val){
                console.log("time to send mail !");
                var sendMail = require('./sendMail');
                var email = data.email;
                var sub = data.sub;
                var body = data.body;
                sendMail(email,sub,body);
                db.close();
            }else{
                db.close();
            }
        });
        }
    });
};
// update(1,2);

module.exports = update;