const express = require("express");
const app = express();

app.listen(8080, function () {
    console.log("안녕");
});

app.get("/pet", function (req, res) {
    res.send("asdfasdf");
});

app.get("/beauty", function (req, res) {
    res.send("뷰티용품 사");
});
