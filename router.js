const express = require('express');
const path = require('path');

const router = express.Router(); // 라우터 분리
router.get('/', (req, res) => { // app 대신 router에 연결
  // res.sendFile(path.join(__dirname, 'static', 'main.html'));
  res.render('main');
});
router.get('/about', (req, res) => {
  // res.sendFile(path.join(__dirname, 'static', 'about.html'));
  res.render('about')
});
module.exports = router; // 모듈로 만드는 부분