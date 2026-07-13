const express = require("express");

const app = express();
app.use(express.json());

app.post("/timbre", (req, res) => {
    console.log("¡Alguien ha pulsado el timbre!");
    res.send("OK");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
