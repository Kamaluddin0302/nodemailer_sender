let express = require('express')
let app = express();
let cors = require('cors')
let PORT = process.env.PORT || 3040
app.listen(PORT, () => {
    console.log("serve is runnning")
})

app.get("/", async (req, res) => {
    await res.send({
        message: "kamkmkfm"
    })
})

app.use(cors())
app.use(express.json())
app.use("/route", require("./router/router"))