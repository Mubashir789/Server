import express from 'express'
import { request } from 'http'
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    console.log("Someone is requesting on this server" ,  new Date())
  res.send('Hello World!' )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})