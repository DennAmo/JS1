// Importe les modules nécessaires
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// Crée une application Express
const app = express();
const port = 3000;

// Utilise le middleware Body-Parser pour traiter les données JSON
app.use(bodyParser.json());

// Indique à Express d'utiliser le dossier 'public' pour les fichiers statiques
app.use(express.static('public'));
app.get('style.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(__dirname + '/style.css');
});

app.get('/index.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.sendFile(__dirname + '/index.js');
});

// Définit la route pour la page principale
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

  
// Définit la route pour ajouter un journal (réception d'une requête POST)
app.post('/add-diary', (req, res) => {
    // Charge les journaux existants
    const diaries = loadDiaries();
    // Récupère le nouveau journal à partir du corps de la requête
    const newDiary = req.body;
    // Ajoute le nouveau journal à la liste des journaux
    diaries.push(newDiary);
    // Sauvegarde la liste mise à jour dans le fichier JSON
    saveDiaries(diaries);
    // Renvoie une réponse JSON indiquant le succès
    res.json({ success: true });
});

// Définit la route pour obtenir la liste des journaux (réception d'une requête GET)
app.get('/get-diaries', (req, res) => {
    // Charge les journaux existants et les renvoie en tant que réponse JSON
    const diaries = loadDiaries();
    res.json(diaries);
});

// Définit la route pour supprimer un journal en fonction de son index (réception d'une requête DELETE)
app.delete('/delete-diary/:index', (req, res) => {
    // Récupère l'index à partir des paramètres de la requête
    const index = req.params.index;
    // Charge les journaux existants
    const diaries = loadDiaries();
    
    // Vérifie si l'index est valide
    if (index >= 0 && index < diaries.length) {
        // Supprime le journal correspondant à l'index
        diaries.splice(index, 1);
        // Sauvegarde la liste mise à jour dans le fichier JSON
        saveDiaries(diaries);
        // Renvoie une réponse JSON indiquant le succès
        res.json({ success: true });
    } else {
        // Renvoie une réponse JSON indiquant l'échec (index invalide)
        res.json({ success: false });
    }
});

// Fonction pour charger les journaux à partir du fichier JSON
function loadDiaries() {
    try {
        const data = fs.readFileSync('diaries.json', 'utf8');
        return JSON.parse(data);
    } catch (error) {
        // En cas d'erreur (par exemple, si le fichier n'existe pas), renvoie une liste vide
        return [];
    }
}

// Fonction pour sauvegarder les journaux dans le fichier JSON
function saveDiaries(diaries) {
    fs.writeFileSync('diaries.json', JSON.stringify(diaries, null, 2), 'utf8');
}
app.get('/close-server', (req, res) => {
    // Code pour arrêter proprement le serveur si nécessaire
    process.exit();
    res.send('Serveur fermé avec succès.');
  });
  
// Lance le serveur Express sur le port spécifié
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
