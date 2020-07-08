const fs = require("fs");
const express = require ("express");
const app = express();


// El use me va a permitir configurar express    -- > usando la carpeta public le dice a express que la use directamente y no pase por todo el sistema de express
/* app.use(express.static("NOMBRE DE LA CARPETA")); */
// sabe donde está la carpeta public porque está en la misma raíz de mi proyecto 

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {

    res.sendFile(__dirname + "/public/intro-a-html/index.html");

});

app.post("/register", (req , res) => {


    let data = JSON.stringify(req.body, null, " ");
    fs.writeFileSync("data.json", data);

    // res.send(req.body);

    res.sendFile(__dirname + "/public/intro-a-html/index.html");

});




app.get("/register", (req , res) =>{

    res.sendFile(__dirname + "/public/intro-a-html/register.html");

});  


app.get("/login", (req , res) =>{

    res.sendFile(__dirname + "/public/intro-a-html/login.html");

});  





console.log(__dirname);

app.listen(4000, () => { console.log("Servidor escuchando en el puerto 3000")});