const express = require("express");
const mainRouter = require("./routes/main")

const app = express();

app.set('view engine', 'ejs');

const port = 3030;

app.use(express.static("public"))

app.use("/",mainRouter);
app.use("/about",mainRouter);

app.listen(port, ()=>{
    console.log("Servidor conrriendo en el puerto" + port);
});
