// A basic dev server to simulate some fetching json data.

import { createServer } from "node:http";
import fs from "node:fs";
import path from "node:path";

const __dirname = import.meta.dirname;
const PORT = 3000;
const HOSTNAME = "127.0.0.1";

const allowedOrigins = ["http://localhost:1234", "http://127.0.0.1:1234"];

const server = createServer((req, res) => {
  const requestOrigin = req.headers.origin;
  if (allowedOrigins.includes(requestOrigin)) {
    res.setHeader("Access-Control-Allow-Origin", requestOrigin);
  } else {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: "Origin not allowed." }));
    return;
  }

  switch (req.url) {
    case "/": {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Available endpoints: /filedata, /treedata");
      break;
    }
    case "/filedata": {
      const filepath = path.join(__dirname, "../data", "FileData.json");

      fs.readFile(filepath, "utf-8", (err, data) => {
        res.setHeader("Content-Type", "application/json");

        if (err) {
          res.statusCode = 404;
          res.end(JSON.stringify({ error: "File not found." }));
          return;
        }

        res.statusCode = 200;
        res.end(data);
        console.log(`File FileData.json sent.`);
      });

      break;
    }
    case "/treedata": {
      const filepath = path.join(__dirname, "../data", "TreeData.json");

      fs.readFile(filepath, "utf-8", (err, data) => {
        res.setHeader("Content-Type", "application/json");

        if (err) {
          res.statusCode = 404;
          res.end(JSON.stringify({ error: "File not found." }));
          return;
        }

        res.statusCode = 200;
        res.end(data);
        console.log(`File TreeData.json sent.`);
      });

      break;
    }
    default: {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("No resource found on this endpoint.");
    }
  }
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
