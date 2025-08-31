const http = require("http");
const url = require("url");

// http://localhost:8000
const server = http.createServer((req, res) => {
    // console.log(req.url);
    const {pathname, query} = url.parse(req.url, true);
    console.log(query);
    res.setHeader("access-control-allow-origin", "http://127.0.0.1:5500");
    res.writeHead(200, "Successfully done!", {"content-type": "application/json"});
    const data = JSON.stringify({
        "name": "Sundeeep Dasari",
        "age": "24"
    });
    res.end(data);
});

server.listen(8000, () => {
    console.log("HTTP Server is running on PORT: 8000");
})