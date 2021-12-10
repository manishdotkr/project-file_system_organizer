const log = console.log //shorting the console.log()

function helpfn()
{
    log(`
    List of All the Commands
    -> Tree Command - node fso.js tree <dir_Name>
    -> Organize Command - node fso.js organize <dir_Name>
    -> Help Command - node fso.js help <dir_Name>
    `)
}

module.exports={
    helpFnKey : helpfn
}
