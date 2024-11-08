const express = require("express")
const app = express()
const port = 3000
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    let sitename = "Adidas"
    let searchtext = "Search now"
    let arr = ["Hey Yo", 45, "Rudra"]
    res.render("index", { sitename: sitename, searchtext: searchtext, arr })
}
)
app.get("/blog/:slug", (req, res) => {
    let blogtitile = "Adidas how and when?"
    let blogcontent = "This is a very good brand"
    res.render("blogpost", { blogtitile: blogtitile, blogcontent: blogcontent })
}
)

app.listen(port, () => {
    console.log(`Listening on this port ${port}`)
}
)