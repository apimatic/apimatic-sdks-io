var glob = require("glob")
var fs = require("fs");
 
// options is optional
glob("build/**/*.html", {cwd: __dirname + '/../'}, function (er, files) {
    if (er) {
        throw er;
    }
    
    var obj = {};

    files.forEach(file => {
        var data = fs.readFileSync(file, 'utf8');
        
        var reg = /<span x-doc-id="([\w\.]+)">([\s\S]+?)<\/span>/g;
        var parsed;
        while((parsed = reg.exec(data)) !== null) {
            if (parsed) {
                obj[parsed[1]] = parsed[2].trim();
            }
        }

        reg = /<p x-doc-id="([\w\.]+)">([\s\S]+?)<\/p>/g;
        while((parsed = reg.exec(data)) !== null) {
            if (parsed) {
                obj[parsed[1]] = parsed[2].trim();
            }
        }
    });

    return fs.writeFileSync(__dirname + "/../build/docs.json", JSON.stringify(obj));
})