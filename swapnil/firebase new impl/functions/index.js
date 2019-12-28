const functions = require('firebase-functions');

exports.triggerFunction = functions
.database
.ref('/{}/')
.onUpdate(function( change, context ) {
    console.log("Tigger Function called !");

    var value = change.after.val().REMAINING_TOOL;
    var min_val = change.before.val().MIN_QTY;
    var mail = change.before.val().EMAIL;
    var msg = change.before.val().MSG_BODY;
    var subject = change.before.val().SUBJECT;

    console.log("mail : "+mail);
    console.log("value : "+value);
    console.log("min val : "+min_val);

    if(value <= min_val){
        // createNewChild(mail, subject, msg);
        change.ref.parent.set({
            EMAIL: mail,
            MSG: msg,
            SUBJECT: sub
        });
        console.log("done");
    }
});


// function createNewChild(mail, sub, msg){
//     database.ref('/'+mail).set({
//         EMAIL: mail,
//         MSG: msg,
//         SUBJECT: sub
//     });
// }