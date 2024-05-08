const http = require(`node:http`);
const fs = require(`node:fs`);
const path = require(`node:path`);

// const readFile = (req, res) => {
//   if (req.url == `/`) {
//     fs.readFile(`./a.html`, `utf-8`, (err, data) => {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(data);
//     });
//   }
//   if (req.url == `/favicon.ico`) {
//     fs.readFile(`./favicon.ico`, (err, data) => {
//       res.writeHead(200, { "Content-Type": "image/ico" });
//       res.end(data);
//     });
//   }
// };

// http
//   .createServer((req, res) => {
//     let url = req.url;
//     // readFile(req, res);
//     if (url == `/`) {
//       fs.readFile(`./a.html`, `utf-8`, (err, data) => {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//       });
//     } else if (url == `/favicon.ico`) {
//       fs.readFile(url, ``, (err, data) => {
//         res.writeHead(200, { "Content-Type": "image/x-icon" });
//         res.end(data);
//       });
//     } else if (url == `/test.html`) {
//       fs.readFile(`./test.html`, `utf-8`, (err, data) => {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//       });
//     } else if (url == `/test.js`) {
//       fs.readFile(`./test.js`, `utf-8`, (err, data) => {
//         res.writeHead(200, { "Content-Type": "text/javascript" });
//         res.end(data);
//       });
//     } else if (url == `/test2.js`) {
//       fs.readFile(`./test2.js`, `utf-8`, (err, data) => {
//         res.writeHead(200, { "Content-Type": "text/javascript" });
//         res.end(data);
//       });
//     } else if (url == `/app.css`) {
//       fs.readFile(`./app.css`, `utf-8`, (err, data) => {
//         res.writeHead(200, { "Content-Type": "text/css" });
//         res.end(data);
//       });
//     } else if (url == `/test.css`) {
//       fs.readFile(`./test.css`, `utf-8`, (err, data) => {
//         res.writeHead(200, { "Content-Type": "text/css" });
//         res.end(data);
//       });
//     }
//     console.log(url);
//     console.log(req.method);
//   })
//   .listen(8000, () => {
//     console.log(`the server is processing on http://localhost:8000`);
//   });

const readFiles = (contentType) => {
  // const contentType = [
  //   `text/html`,
  //   "image/x-icon",
  //   "text/css",
  //   "text/javascript",
  // ];
  fs.readdir(__dirname, (err, fileList) => {
    fileList.forEach((file) => {
      const fileExtension = file.split(`.`)[1];
      if (fileExtension == `html`) {
        return (contentType = `text/html`);
      }
    });
  });
};

let contentType = `test`;
console.log(contentType);
readFiles((contentType) => {});
console.log(contentType);

// const checkFiles = (req, res) => {
//   const url = req.url;
//   let contentType;
//   if (url === `/`) {
//     // fs.readFile(`./index.html`, (err, data) => {
//     //   res.writeHead(req.statusCode, {
//     //     "Content-Type": contentType.forEach((type) => {}),
//     //   });
//     // });
//     readFiles(contentType);
//   }
// };

// http
//   .createServer((req, res) => {
//     checkFiles(req, res, contentType);
//   })
//   .listen(8000, () => {
//     console.log(`the server is processing on http://localhost:8000`);
//   });
