// Attend que le DOM soit chargé avant d'exécuter le code
document.addEventListener('DOMContentLoaded', () => {
    // Charge les journaux existants lors du chargement de la page
    loadDiaries();
});

// Fonction pour ajouter un journal
function addDiary() {
    // Récupère les valeurs du formulaire
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;
    console.log('Diary to be added:', { title, description, image });
    // Crée un objet journal
    const diary = {
        title,
        description,
        image
    };

    // Envoie une requête POST pour ajouter le journal
    fetch('add-diary', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(diary),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response from server:', data);
        // Si l'ajout est réussi, recharge la liste des journaux et réinitialise le formulaire
        if (data.success) {
            loadDiaries();
            document.getElementById('diaryForm').reset();
        } else {
            // Sinon, affiche une alerte
            alert('Failed to add diary.');
        }
    });
}

// Fonction pour charger la liste des journaux
function loadDiaries() {
    // Envoie une requête GET pour obtenir la liste des journaux
    fetch('/get-diaries')
    .then(response => response.json())
    .then(data => {
        // Sélectionne l'élément HTML où afficher la liste des journaux
        const diaryList = document.getElementById('diaryList');
        diaryList.innerHTML = '';

        // Parcourt la liste des journaux et affiche chaque journal avec un bouton de suppression
        data.forEach((diary, index) => {
            const diaryItem = document.createElement('div');
            diaryItem.innerHTML = `
                <p><strong>${index}:</strong> ${diary.title}</p>
                <p>${diary.description}</p>
                ${diary.image ? `<img src="${diary.image}" alt="${diary.title}" style="max-width: 100%;">` : ''}
                <button onclick="deleteDiary(${index})">Delete</button>
            `;
            diaryList.appendChild(diaryItem);
        });
    });
}

// Fonction pour supprimer un journal en fonction de son index
function deleteDiary(index) {
    // Envoie une requête DELETE pour supprimer le journal
    fetch(`/delete-diary/${index}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
        // Si la suppression est réussie, recharge la liste des journaux
        if (data.success) {
            loadDiaries();
        } else {
            // Sinon, affiche une alerte
            alert('Failed to delete diary.');
        }
    });
}
