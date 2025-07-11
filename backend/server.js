import express from 'express';
import cors from 'cors';
import "dotenv/config"

// App Config
const app = express()
const port = process.env.PORT || 4000

// MiddLewares
app.use(express.json())
app.use(cors())

// Api endpoints
app.get('/', (req, res) => {
    res.send('API Working')
})

app.listen(port, () => console.log("Server is running on PORT : " + port))