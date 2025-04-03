
function validateForm() {
    const name = document.getElementById('mealName').value;
    const calories = document.getElementById('calories').value;
    if (!name) {
        alert('Le nom du repas est requis');
        return false;
    }
    if (isNaN(calories) || calories <= 0) {
        alert('Les calories doivent être un nombre positif');
        return false;
    }
    return true;
}

async function addMeal(meal) {
    try {
        const response = await fetch(`${API_URL}/meals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(meal)
        });
        if (!response.ok) throw new Error('Erreur lors de l\'ajout du repas');
        alert('Repas ajouté');
        displayMeals(); // Actualiser la liste des repas
    } catch (error) {
        console.error('Erreur:', error.message);
        alert('Impossible d\'ajouter le repas');
    }
}