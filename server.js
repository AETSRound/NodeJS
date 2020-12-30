// const http = require('http');                 // 서버를 만드는 모듈 불러옴
// http.createServer((request, response) => {    // 서버 만드는 메소드
//   console.log('server start!');
// }).listen(8080);


// const http = require('http');
// http.createServer((request, response) => {
//     return request
//     .on('error', (err) => {                                // 요청에 에러가 있으면
//         console.error(err);
//     })
//     .on('data', (data) => {                                // 요청에 데이터가 있으면
//         console.log(data);
//     })
//     .on('end', () => {                                     // 요청의 데이터가 모두 받아졌으면
//         response.on('error', (err) => {                    // 응답에 에러가 있으면
//             console.error(err);
//         });
//         response.statusCode = 200;                         // 성공 상태 코드
//         response.setHeader('Content-Type', 'text/plain');  // header 설정
//         response.write('hi\n');                            // body에 정보 탑재
//         response.end('the end!');                          // 정보 탑재 후 브라우저로 전송
//     });
// }).listen(8080);



// const http = require('http');
// const url = require('url');
// const fs = require('fs');
// http.createServer((request, response) => {
//     const path = url.parse(request.url, true).pathname;             // url에서 path 추출 => 주소를 분석하는 모듈.
//     if (request.method === 'GET') {                                 // GET 요청이면
//         if (path === '/about') {                                    // 주소가 /about이면
//             response.writeHead(200,{'Content-Type':'text/html'});   // header 설정
//             fs.readFile(__dirname + '/about.html', (err, data) => { // 파일 읽는 메소드
//                 if (err) {
//                     return console.error(err);                      // 에러 발생시 에러 기록하고 종료
//                 }
//                 response.end(data, 'utf-8');                        // 브라우저로 전송
//             });
//         } else if (path === '/') {                                  // 주소가 /이면
//             response.writeHead(200,{'Content-Type':'text/html'});
//             fs.readFile(__dirname + '/main.html', (err, data) => {
//                 if (err) {
//                     return console.error(err);
//                 }
//                 response.end(data, 'utf-8');
//             });
//         } else {                                                    // 매칭되는 주소가 없으면
//             response.statusCode = 404;                              // 404 상태 코드
//             response.end('Not Found');
//         }
//     }
// }).listen(8080);



const express = require('express');
const app = express();
const route = require('./router.js');
const path = require('path');

app.use(express.static(path.join(__dirname, 'static'))); 
app.use('/', route);

app.use((req, res, next) => { // 404 처리 부분
  res.status(404).send('일치하는 주소가 없습니다!');
});
app.use((err, req, res, next) => { // 에러 처리 부분
  console.error(err.stack); // 에러 메시지 표시
  res.status(500).send('서버 에러!'); // 500 상태 표시 후 에러 메시지 전송
});
app.listen(8080);