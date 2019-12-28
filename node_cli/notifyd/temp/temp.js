function temp(){
    const notifyd = require('/home/abhishek/Projects/node_cli/notifyd/npm_package/notifyd');
    var promis = 
notifyd("abhi","abhi","Notifyd Service Error !","ReferenceError: x is not defined\
\nat temp (/home/abhishek/Projects/node_cli/notifyd/temp/temp.js:5:1)\
\nat Object.<anonymous> (/home/abhishek/Projects/node_cli/notifyd/temp/temp.js:12:1)\
\nat Module._compile (internal/modules/cjs/loader.js:734:30)\
\nat Object.Module._extensions..js (internal/modules/cjs/loader.js:745:10)\
\nat Module.load (internal/modules/cjs/loader.js:626:32)\
\nat tryModuleLoad (internal/modules/cjs/loader.js:566:12)\
\nat Function.Module._load (internal/modules/cjs/loader.js:558:3)\
\nat Function.Module.runMain (internal/modules/cjs/loader.js:797:12)\
\nat executeUserCode (internal/bootstrap/node.js:526:15)\
\nat startMainThreadExecution (internal/bootstrap/node.js:439:3)","08-03-2019 15:01:42");

    promis.then(function(res) {
        console.log(JSON.parse(res));
    }, function(err) {
        console.log(JSON.parse(err));
    });
}
temp();
