const log = console.log //shorting the console.log()


const fs = require('fs');
const path = require('path')
const helpObj = require('./modules/help')
const treeObj = require('./modules/tree')
const organizeObj = require('./modules/organize')

let inputArr = process.argv.slice(2)

let command = inputArr[0]

switch(command)
{
    case 'tree' :
        // treefn(inputArr[1]);
        treeObj.treeFnKey(inputArr[1]);
        break;

    case 'organize' :
        // organizefn(inputArr[1]);
        organizeObj.organizeFnKey(inputArr[1]);
        break;

    case 'help' :
        helpObj.helpFnKey();
        break;

    default :
    log('*** Please Enter A Valid Command ***')
        helpObj.helpFnKey();
        break;
}