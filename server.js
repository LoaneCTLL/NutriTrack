const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB()
    .then(() => console.log("MongoDB connecté"))
    .catch(err => {
        console.error("Erreur de connexion à MongoDB", err);
        process.exit(1); // Quitter l'application en cas d'échec de connexion
    });

const startServer = () => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
};

connectDB()
    .then(startServer)
    .catch(err => console.error("Impossible de démarrer le serveur"));

app.use('/api', require('./routes/mealRoutes'));
app.use('/api', require('./routes/goalRoutes'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ msg: "Erreur interne du serveur" });
});