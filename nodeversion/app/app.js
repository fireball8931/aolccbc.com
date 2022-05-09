import express from "express";


const app = express();
app.set('view engine', 'pug');
app.use(express.static('staticfiles'));



app.get("/", (req, res) => {
    let title='Academy of Learning'
    res.render("index", {title: title})
})
app.use((req, res) => {
    res.statusCode = 404;
    res.end("404 - page not found");
});

app.listen(3000, () => {

    console.log("Application started on port 3000");
});