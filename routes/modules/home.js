const express = require('express')
const router = express.Router()
const Record = require('../../models/record')

router.get('/', (req, res) => {
  const userId = req.user._id

  return Record.find({ userId })
    .lean()
    .then(records => res.render('index', { records }))
    .catch(error => console.error(error))
})

module.exports = router