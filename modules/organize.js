const log = console.log //shorting the console.log()
const fs = require('fs');
const path = require('path')

let types = {
    media : ['mp3' , 'mp4' , 'mkv'],
    images : ['gif' , 'jpg' ,'jpeg', 'png' ],
    archives : ['zip' , '7z' , 'rar' , 'iso'],
    documents : ['txt' , 'doc' , 'docx'],
    app : ['apk' , 'exe']
}

function organizefn(dirpath)
{
    if(dirpath == undefined) 
    {
        log('Please Enter a Directory Path');
        return;
    }

    let doestExist = fs.existsSync(dirpath)
    if(doestExist == false)
    {
        log('Please Enter a Valid Directory Path');
        return;
    }

    //create a organized files directory
    let destPath = path.join(dirpath , 'organized_files');
    if(fs.existsSync(destPath) == false) fs.mkdirSync(destPath);
    organizeHelper(dirpath , destPath);
}

function organizeHelper(src , dest)
{
    let childNames = fs.readdirSync(src);
    
    for(let i=0; i<childNames.length; i++)
    {
        let childAddress = path.join(src , childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if(isFile==false) continue;
        let fileCategory = getCategory(childNames[i]);

        sendFiles(childAddress , dest , fileCategory);
    }
}

function getCategory(name)
{
    let ext = path.extname(name);

    ext = ext.slice(1);

    for(let type in types)
    {
        let cTypeArr = types[type];
        
        for(let i=0; i<cTypeArr.length; i++)
        {
            if(ext==cTypeArr[i]) return type;
        }
    }

}

function sendFiles(srcFilePath , dest , fileCategory)
{
    let catPath = path.join(dest , fileCategory);
    if(fs.existsSync(catPath) == false) fs.mkdirSync(catPath);

    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(catPath , fileName);
    
    fs.copyFileSync(srcFilePath , destFilePath);
    fs.unlinkSync(srcFilePath);
}

module.exports={
    organizeFnKey : organizefn
}