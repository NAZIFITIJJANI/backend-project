const express = require('express')

const app = express();


app.listen(3000, () => {
    console.log('app running on port 3000')
})

app.get('/users', (res, req) => {
    res.send("wellcome")
})
