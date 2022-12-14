const express = require('express')
const app = express()

const PORT = process.env.PORT || 80

app.get('/', (req, res) => {
    res.json( {
        name: 'Flowers',
        color: 'red'
    })
})
app.listen(PORT, () => {
    console.log('server started')
})
