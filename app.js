const http = require('http');
const port = process.env.PORT || 3000

const httpServer = http.createServer((req, res) => {
    if (req.uri === '/') {
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify({
            Messgae: `Welcome to Techxtor free api. Fetch details: /api/details`,
        }));
    }
    else if (req.uri === '/api/details') {
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify({
            Names: [
                'Manish',
                'Bibhash',
                'Subhash'
            ],
            Email: [
                'manish@test.test',
                'bibhash@test.test',
                'subhash@test.test'
            ],
            Messgae: 'This is a free to use api'
        }));
    }
})

httpServer.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`Server is running on port : ${port}`);
});