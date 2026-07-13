const express = require("express");

const app = express();
app.use(express.json());

app.post("/timbre", async (req, res) => {
    await fetch("https://ntfy.sh/Apartamentopapal", {
        method: "POST",
        body: "🔔 Alguien ha llamado al timbre del apartamento papal en Roblox."
    });

    res.send("OK");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor iniciado");
});
