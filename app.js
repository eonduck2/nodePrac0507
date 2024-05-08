// const http = require(`node:http`);
const fs = require(`node:fs`);

const data = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>최유진 수달임</h1>    
</body>
</html>`;

// * a.html 생성
// fs.writeFile(`a.html`, data, `utf8`, (err) => {
//   if (err) {
//     console.log(`error: ${err}`);
//   } else {
//     console.log(`file is created !`);
//   }
// });

// * server.js 생성
const createFile = (path, file, contentType, data) => {
  // ! 파일 읽고 없으면 생성하는 로직 추가 필요
  fs.readdir(__dirname, (err, fileList) => {
    if (!fileList.includes(file)) {
      fs.writeFile(file, ``, (err) => {});
    }
  });
};

createFile(__dirname, `server.js`);
// fs.writeFile(`server.js`, ``, (err) => {
//   if (err) {
//     console.log(`error: ${err}`);
//   } else {
//     console.log(`file is created !`);
//   }
// });

// http
//   .createServer((req, res) => {
//     //   res.writeHead(200, { "Content-Type": "text/html charset=utf-8" });
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(
//       JSON.stringify({
//         data: "Hello World!",
//       })
//     );
//   })
//   .listen(8000);

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end(`
//     <html>
//       <body>
//         <h1>hello</h1>
//       </body>
//     </html>`);
// });

// server.listen(8000);

// const server = http.createServer();

// server.on("request", (request, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(
//     JSON.stringify({
//       data: "Hello Worldo!",
//     })
//   );
// });

// server.listen(8000);
