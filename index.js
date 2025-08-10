import express from "express"

const app = express()

const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(PORT, "127.0.0.1", () => console.log("listening", PORT));