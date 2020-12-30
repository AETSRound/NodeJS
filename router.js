const express = require('express');
const path = require('path');

const router = express.Router(); // 라우터 분리
router.get('/', (req, res) => { // app 대신 router에 연결
  res.sendFile(path.join(__dirname, 'static', 'main.html'));
});
router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'about.html'));
});
module.exports = router; // 모듈로 만드는 부분