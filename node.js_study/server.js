const express = require("express");
const app = express();

app.use(express.static("css"));
app.use(express.static("node.js_study"));
app.use(express.urlencoded({ extended: true }));

app.listen(8080, function () {
    console.log("clear");
});

app.get("/pet", function (req, res) {
    res.send("asdfasdf");
});

app.get("/beauty", function (req, res) {
    res.send("뷰티용품");
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/write.html", function (req, res) {
    res.sendFile(__dirname + "/write.html");
});

app.post("/add", function (req, res) {
    console.log(req.body);
    res.send("전송완료");
});
