module.exports = function notifyd(mail, pass, title, body, datetime, callback) {
    
    if(typeof mail !== "string" 
        || typeof pass !== "string" 
        || typeof title !== "string"
        || typeof body !== "string"
        || typeof datetime !== "string"){
            throw new TypeError("All parameters must be string");
    }else{
        return new Promise(function(resolve, reject) {
            var http;
            try{
                http = require('http');
            }catch(e1){
                console.log("notifyd Error: module 'http' not found !");
                // process.exit(e1.code);
                var err = {
                    "type":"module_not_found",
                    "module":"http"
                }
                reject(JSON.stringify(err));
                // callback(JSON.stringify(err));
            }

            var options = {
                host:"ec2-13-58-201-201.us-east-2.compute.amazonaws.com",
                port:"4545",
                path:"/sendNotification",
                method:"POST",
                headers: {
                    "Content-Type":"application/json"
                }
            };

            var requestBody = {
                "mail":mail,
                "pass":pass,
                "title":title,
                "body":body,
                "datetime":datetime
            }
            // console.log(JSON.stringify(requestBody));

            var notifyRequest = http.request(options, function(res) {

                res.on('data', function(res) {
                    res = JSON.parse(res);
                    // console.log(res)
                    if(res.result == "success"){
                        var result = {
                            "result":"success",
                            "msg":"notification sent !"
                        };
                        resolve(JSON.stringify(result));
                        // callback(JSON.stringify(result));
                    }else{
                        var reason = res.reason;
                        if(reason == "tokenError"){
                            var result = {
                                "result":"fail",
                                "error":"tokenError",
                                "msg":"Error in firebase token. Login from app and try again !",
                                "todo":"it you are getting this error multiple times, let us know by sending email to deshpandeabhi.20@hotmail.com"
                            };
                            reject(JSON.stringify(result));
                            // callback(JSON.stringify(result));
                        }else if(reason == "saveNotificationError"){
                            //always database error 
                            var result = {
                                "result":"fail",
                                "error":"serverError",
                                "msg":"Error in storing notification",
                                "todo":"it you are getting this error multiple times, let us know by sending email to deshpandeabhi.20@hotmail.com"
                            }
                            reject(JSON.stringify(result));
                            // callback(JSON.stringify(result));
                        }else if(reason == "sendNotificationError"){
                            var result = {
                                "result":"fail",
                                "error":"sendNotificationError",
                                "msg":res.error,
                                "todo":"it you are getting this error multiple times, let us know by sending email to deshpandeabhi.20@hotmail.com"
                            }
                            reject(JSON.stringify(result));
                            // callback(JSON.stringify(result));
                        }
                    }
                });
            });
    
            notifyRequest.write(JSON.stringify(requestBody));
            notifyRequest.end();
        });
    }
}