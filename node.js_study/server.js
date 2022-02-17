const express = require("express");
const app = express();

app.use(express.static("css"));
app.use(express.static("node.js_study"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var db;
const MongoClient = require("mongodb").MongoClient;
MongoClient.connect(
    "mongodb+srv://jsp1024:osjm1858@cluster0.nwuj0.mongodb.net/testapp?retryWrites=true&w=majority",
    function (err, client) {
        if (err) {
            return console.log(err);
        }
        db = client.db("testapp");

        app.listen(8080, function () {
            console.log("clear");
        });
    }
);

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

app.get("/list", function (req, res) {
    res.render("list.ejs");
});

app.post("/add", function (req, res) {
    console.log(req.body.date);
    console.log(req.body.title);
    db.collection("post").insertOne({ 제목: req.body.title, 날짜: req.body.date }, function (err, res) {
        console.log("저장완료");
    });
    res.send("전송완료");
});
