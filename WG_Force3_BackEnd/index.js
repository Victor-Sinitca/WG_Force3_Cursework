require("dotenv").config()
const express = require("express")
const router = require(`./router/index`)
const documentation = require(`./helper/documentation`)

const errorMiddleware = require(`./middlewares/error-middleware`)


const PORT = process.env.PORT || 8000
const app = express()
app.use(express.json())

app.use(`/api`, router)
app.use(`/doc`,documentation)
app.use(errorMiddleware) // !!должен быть последним middleware


const start = async () => {
    try {
        app.listen(PORT, () => console.log(`сервер стартанул порт: ${PORT}  http://localhost:${PORT}/`))
    } catch (e) {
        console.log(e)
    }
}

start()
