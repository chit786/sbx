const http = require("http");
const port = process.env.PORT || 3000;
http.createServer((_, res) => {
  res.end(JSON.stringify({
    NODE_ENV: process.env.NODE_ENV,
    RELEASE_CHANNEL: process.env.RELEASE_CHANNEL,
    API_ENDPOINT: process.env.API_ENDPOINT,
    LOG_LEVEL: process.env.LOG_LEVEL,
  }, null, 2) + "\n");
}).listen(port, () => console.log(`listening on ${port}`));
