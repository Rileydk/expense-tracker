const db = require('../../config/mongoose')
const Record = require('../../models/record')
const recordSeedDatas = require('../../recordSeedDatas.json')

db.once('open', () => {
  recordSeedDatas.datas.forEach(data => Record.create(data))
  console.log('record seed datas created!')
})
