const fs = require('fs')
const http = require('http');

// const ourReadFile = fs.createReadStream(`${__dirname}/lorem.txt`)

// ourReadFile.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write("<html><head><title>Document</title></head><body><form action='/process' method='post'><input name='message'> </input><button type='submit'>submit</button></form></body></html>");
        res.write("hello world")
        res.end()
    }else if (req.url === '/process' && req.method === 'POST'){

        let body = []

        req.on('data',(chunk)=>{
            body.push(chunk)
        })

        req.on('end',()=>{
            const bodyPars = Buffer.concat(body).toString()
            console.log(bodyPars)
            console.log('Stream finished')
        })

        res.write('this is process page')
        res.end()
    }else if(req.url === '/contactus'){
        res.write('this is contact page')
        res.end()
    }else{
        res.write('page not found')
        res.end()
    }
})

server.listen(5000)