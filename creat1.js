let fs = require("fs");
let path = require("path");

let inputArr = process.argv.slice(2);

let MainDir = inputArr[0];

let CurrentPath = process.cwd();

let MainDirPath = path.join(CurrentPath, MainDir);

let IsMainDirPathExists = fs.existsSync(MainDirPath);

if( IsMainDirPathExists){
    
    console.log(MainDir, "Already Exist's");
    return;

}else{
    
    console.log(MainDir, "Created");
    fs.mkdirSync(MainDirPath);
    
    let MainModulesNames = inputArr.slice(1, 4);

    for( let i = 0; i < MainModulesNames.length; i++ ){

        let MainModulesPath = path.join(MainDirPath, MainModulesNames[i]);
        fs.mkdirSync(MainModulesPath);
        
        console.log(MainModulesNames[i], "MainModule Created");

        for(let j = 1; j <= 5; j++ ){

            let SubModulesPath = path.join(MainModulesPath, "Module" + " " + j);
            fs.mkdirSync(SubModulesPath);

            let FilePath = path.join(SubModulesPath, "Content.md");
            fs.writeFileSync(FilePath, "Hello..! You can write your code here \nThank You.")

        }

    }

}