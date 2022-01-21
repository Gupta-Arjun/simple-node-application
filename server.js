const fs = require('fs');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3003;

const server = http.createServer((req, res) => {
    console.log(req.url);
if(req.url=="/"){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
}
else if(req.url=="/get"){
    console.log("snjkdb");
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
  fs.readFile(`${__dirname}/data.json`,  (err, data)=>{
      console.log(data);
      const objData=JSON.parse(data);
      console.log(objData.length);
      objData.map((curele)=>{
       console.log(curele.title)
       res.write(curele.title);
      }
      
      )
      
})
  
}
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});