const http = require("http");

const PORT = process.env.PORT || 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<html><body>hello3</body></html>");
  })
  .listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
