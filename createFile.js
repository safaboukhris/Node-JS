const fs = require('fs');

        //create the file welcome.txt
fs.writeFile('welcome.txt','Hello Node',(err)=>{
    if (err) {
        return console.error(err);
    }
    console.log("Data written successfully!");
        //Reading the content of the file welcome.txt
    fs.readFile('welcome.txt',(err,data)=>{
        if (err) {
            return console.error(err);
        }
        console.log("Content file: " + data.toString());
    });
});