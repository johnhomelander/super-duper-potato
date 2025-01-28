const express = require("express")
const app = express()
const port = 3000

app.get('/', (req,res) => {
  res.send('Hello there')
})

app.listen(port, () => {
console.log(`Expresso listening on port ${port}`)
})

