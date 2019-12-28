const functions = require('firebase-functions');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service:'smtp.gmail.com',
    secure: true,
    port: 587,
    auth: {
        user: 'sgp9897@gmail.com',
        pass:'Surekha!1997'
    }
});

var sendMail2 = function(){

    console.log("sendMail ::: 2 Called !!!");

    var mailOptions = {
        from: "sgp9897@gmail.com",
        to: "deshpandeabhi.10@gmail.com",
        subject: "from firebase test: 1",
        text: "This is auto generated mail from node mail sender function from firebase functions."
    };
    transporter.sendMail(mailOptions, function(err) {
        if(err){
            console.log(err);
        }else{
            console.log("Node_Mail_sender : Success");
        }
    });
    console.log("sendMail ::: 2 finished !!!");
}
//module.exports = sendMail2;

exports.triggerFunction = functions
.database
.ref('/')
.onUpdate(function(change, context){
    console.log("triggerFunction Called !!!");
    sendMail2();
    console.log("sendMail2 Called !!!");
});

/*
exports.sendMail = functions.database
.ref('/')
.onUpdate(function(change, context) {
    console.log('test method Called');

    var value = change.after.val().No_of_tools;
    var min = change.before.val().min;
    var sub = change.before.val().sub;
    var msg = change.before.val().msg;
    var mail = change.before.val().mail;

    var mailOptions = {
                from: "sgp9897@gmail.com",
                to: "deshpandeabhi.10@gmail.com",
                subject: "automated mail from firebase",
                text: "firebase function to send mail working : test 1"
            };
            transporter.sendMail(mailOptions, function(err) {
                if(err){
                    console.log(err);
                }else{
                    console.log("Node_Mail_sender : Success");
                }
            });

    // if(value === min || value === min - 1){
    //     var mailOptions = {
    //         from: "sgp9897@gmail.com",
    //         to: mail,
    //         subject: sub,
    //         text: msg
    //     };
    //     transporter.sendMail(mailOptions, function(err) {
    //         if(err){
    //             console.log(err);
    //         }else{
    //             console.log("Node_Mail_sender : Success");
    //         }
    //     });
    // }
    return true;
});
*/