const http = require('http');
const port = process.env.PORT || 3000

const httpServer = http.createServer((req, res) =>{
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({
        Messgae: `Hello there ! It's manish here.`,
      }));
})

httpServer.listen(port,  (err) => {
    if (err) console.log(err);
    console.log(`Server is running on port : ${port}`);
});