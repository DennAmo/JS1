const { exec } = require('child_process');
const open = require('open');

// Commande pour démarrer le serveur
const startServerCommand = 'node server.js';

// Commande pour ouvrir la page dans le navigateur
const openBrowserCommand = 'start http://localhost:3000';

// Lancement du serveur
const serverProcess = exec(startServerCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Erreur lors du démarrage du serveur : ${error}`);
    return;
  }
  console.log(`Serveur démarré : ${stdout}`);
});

// Ouvrir la page dans le navigateur
open(openBrowserCommand);

// Gestion de la fermeture du serveur lorsque le processus est terminé
serverProcess.on('exit', (code, signal) => {
  console.log(`Serveur arrêté avec code ${code} et signal ${signal}`);
});
