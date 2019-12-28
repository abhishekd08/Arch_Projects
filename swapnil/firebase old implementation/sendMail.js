const functions = require('firebase-functions');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service:'smtp.gmail.com',
    secure: true,
    requireTLS: true,
    port: 587,
    auth: {
        user: 'enter mail',
        pass:'enter password'
    }
});
exports.sendMail = functions.database
.ref('/{Company}/')
.onUpdate(function(change, context) {
    console.log('test method Called');

    var value = change.after.val().No_of_tools;
    var min = change.before.val().min;
    var sub = change.before.val().sub;
    var msg = change.before.val().msg;
    var mail = change.before.val().mail;

    if(value == min || value == min - 1){
        var mailOptions = {
            from: "sgp9897@gmail.com",
            to: mail,
            subject: sub,
            text: msg
        };
        transporter.sendMail(mailOptions, function(err) {
            if(err){
                console.log(err);
            }else{
                console.log("Node_Mail_sender : Success");
            }
        });
    }
    return true;
});