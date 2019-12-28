var sendMail = function(mail, sub, body){

    var nodemailer = require("nodemailer");

    var transporter = nodemailer.createTransport({
        service:'gmail',
        secure: true,
        requireTLS: true,
        port: 587,
        auth: {
            user: 'deshpandeabhi.10@gmail.com',
            pass:'okabhi08'
        }
    });

    var mailOptions = {
        from: "deshpandeabhi.10@gmail.com",
        to: mail,
        subject: sub,
        text: body
    };

    transporter.sendMail(mailOptions, function(err) {
        if(err){
            console.log(err);
        }else {
            console.log("mail sent !!!");
        }
    });


}

// sendMail("deshpandeabhi.10@gmail.com","test subject","testing body");

module.exports = sendMail;