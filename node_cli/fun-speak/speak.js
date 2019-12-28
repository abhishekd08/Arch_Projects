function speak(){
    const program = require('commander');
    const translate = require('./translate');

    program
        .version('1.0.0')
        .description("A fun translator from English to Dothraki and Valyrian (languages from Game of Thrones")

    program
        .command("translate <text>")
        .alias("t")
        .action((text) => {
            var promise = translate("valyrian","hello");
            promise.then(function(res) {
                res = JSON.parse(res);
                console.log(res.translation);
            }, function(err) {
                err = JSON.parse(err);
                console.log(err.result);
            });
        });
    
    program.parse(process.argv);
}
speak();