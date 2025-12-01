const http = require('http')

const app = http.createServer((req,res)=>{
    res.end('Hello..!')
})

fs.writeFileSync('firstFile.txt',"I have write this in app.js file"

)

const fileData = fs.readFileSync('firstFile.txt','utf-8')
console.log("fileData -->>>>",fileData)

fs.appendFileSync('firstFile.txt',"**************THis is second line")



app.listen(5000,()=>{
    console.log('server running')
})

//http://localhost:5000