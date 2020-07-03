const express = require ("express");
const app = express();


// El use me va a permitir configurar express    -- > usando la carpeta public le dice a express que la use directamente y no pase por todo el sistema de express
/* app.use(express.static("NOMBRE DE LA CARPETA")); */
// sabe donde está la carpeta public porque está en la misma raíz de mi proyecto 
app.use(express.static("public"));


app.get("/", (req, res) => {

    res.sendFile(__dirname + "/public/intro-a-html/index.html");

})


console.log(__dirname);

app.listen(4000, () => { console.log("Servidor escuchando en el puerto 3000")});