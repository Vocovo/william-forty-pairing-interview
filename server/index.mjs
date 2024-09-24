import express from 'express'
import { devicesData, deviceEventEmitter }  from './devices.mjs'

const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Pairing interview app listening on port ${port}`)
})
