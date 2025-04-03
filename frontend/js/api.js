
const API_URL = 'http://localhost:3000';

// Récupérer tous les repas
async function getMeals() {
    try {
        const response = await fetch(`${API_URL}/meals`);
        if (!response.ok) throw new Error('Erreur lors de la récupération des repas');
        const meals = await response.json();
        return meals;
    } catch (error) {
        console.error('Erreur:', error.message);
        alert('Impossible de récupérer les repas');
    }
}

// Supprimer un repas
async function deleteMeal(id) {
    try {
        await fetch(`${API_URL}/meals/${id}`, {
            method: 'DELETE'
        });
        alert('Repas supprimé');
        displayMeals(); // Actualiser la liste après suppression
    } catch (error) {
        console.error('Erreur:', error.message);
        alert('Impossible de supprimer le repas');
    }
}