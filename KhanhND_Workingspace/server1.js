const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Sử dụng body-parser để lấy dữ liệu từ yêu cầu POST hoặc PATCH
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Dữ liệu tạm thời lưu trong biến
let data = {};

// API lấy dữ liệu
app.get('/api/data', function(req, res) {
  res.json(data);
});

// API lưu dữ liệu
app.post('/api/data', function(req, res) {
  const newData = req.body;
  data = newData;
  res.json({ message: 'Dữ liệu đã được lưu trữ thành công' });
});

// API sửa dữ liệu
app.patch('/api/data', function(req, res) {
  const updatedData = req.body;
  data = { ...data, ...updatedData };
  res.json({ message: 'Dữ liệu đã được cập nhật thành công' });
});

// API xóa dữ liệu
app.delete('/api/data', function(req, res) {
  data = {};
  res.json({ message: 'Dữ liệu đã được xóa thành công' });
});

// Khởi động server
app.listen(3000, function() {
  console.log('Server đang hiện  tại localhost:3000');
});

