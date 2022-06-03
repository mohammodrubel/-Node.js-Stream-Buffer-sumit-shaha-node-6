const fs = require('fs')


const ourReadFile = fs.createReadStream(`${__dirname}/lorem.txt`)
const ourWriteFile = fs.createWriteStream(`${__dirname}/output.txt`)

ourReadFile.on('data',(chunk)=>{
    ourWriteFile.write(chunk)
})
