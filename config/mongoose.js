const mongoose = require('mongoose') // 載入 mongoose
const autoIncrement = require('mongoose-auto-increment')

mongoose.connect('mongodb+srv://alpha:camp@cluster0.dgxufmq.mongodb.net/expense_tracker?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}) // 設定連線到 mongoDB

// 取得資料庫連線狀態
const db = mongoose.connection
autoIncrement.initialize(db)
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})

module.exports = db