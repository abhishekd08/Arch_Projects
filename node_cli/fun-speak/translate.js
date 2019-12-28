function translate(language, text){
    var http = require('http');
    var transtTo;
    if(typeof text !== "string"){
        throw new TypeError("text must be string");
    }else{

        return new Promise(function(resolve, reject) {

            if(language == 1){
                transtTo = "dothraki"
            }else{
                transtTo = "valyrian"
            }
            
            var options = {
                host:"api.funtranslations.com",
                path:"/translate/"+transtTo+".json",
                port:"80",
                method:"POST",
                headers: {
                    "Content-Type" : "application/json"
                }
            };

            var body = {
                "text":text
            };
            console.log(body);
            var translateRequest = http.request(options, function(res) {
                res.on('data', function(respose) {
                    respose = JSON.parse(respose);
                    console.log(respose);
                    if(respose.err == null){
                        if(respose.success.total > 0){
                            var result = {
                                "result":"success",
                                "translation":respose.contents.translated
                            };
                            resolve(JSON.stringify(result));
                        }else{
                            var result = {
                                "result":"Some error occured !"
                            }
                            reject(JSON.stringify(result));
                        }
                    }else{
                        var result = {
                            "result":"Some Error occured !"
                        }
                        reject(JSON.stringify(result));
                    }
                });
            });
            translateRequest.write(JSON.stringify(body));
            translateRequest.end();
        });
    }
}
module.exports = translate;