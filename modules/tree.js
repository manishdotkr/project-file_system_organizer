const log = console.log //shorting the console.log()
const fs = require('fs');
const path = require('path')

function treefn(dirpath)
{
    // log('Tree Function Implemented')
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
    treeHelper(dirpath , "\t");
}

function treeHelper(targetPath , indent)
{
    let isFile = fs.lstatSync(targetPath).isFile();
    if(isFile)
    {
        let fileName = path.basename(targetPath)
        log(indent + "├──" + fileName)
    }
    else  
    {
        let folderName = path.basename(targetPath)
        log(indent + "└──" + folderName )

        let children = fs.readdirSync(targetPath);

        for(let i=0; i<children.length; i++)
        {
            let childPath = path.join(targetPath , children[i])
            treeHelper(childPath , indent + "\t")
        }
    } 
}

module.exports={
    treeFnKey : treefn
}
