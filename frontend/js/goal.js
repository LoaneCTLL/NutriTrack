// Récupérer les éléments du DOM
const form = document.getElementById('goalForm');
const caloriesInput = document.getElementById('calories');
const proteinsInput = document.getElementById('proteins');
const carbsInput = document.getElementById('carbs');
const fatsInput = document.getElementById('fats');
const message = document.getElementById('message');

// Charger les objectifs depuis le localStorage
function loadGoals() {
    const storedGoals = JSON.parse(localStorage.getItem('nutritionGoals'));
    if (storedGoals) {
        caloriesInput.value = storedGoals.calories || '';
        proteinsInput.value = storedGoals.proteins || '';
        carbsInput.value = storedGoals.carbs || '';
        fatsInput.value = storedGoals.fats || '';
        message.textContent = 'Objectifs chargés avec succès.';
    }
}

// Sauvegarder les objectifs dans le localStorage
function saveGoals(goals) {
    localStorage.setItem('nutritionGoals', JSON.stringify(goals));
    message.textContent = 'Objectifs enregistrés avec succès.';
}

// Gestion de la soumission du formulaire
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const goals = {
        calories: parseInt(caloriesInput.value) || 0,
        proteins: parseInt(proteinsInput.value) || 0,
        carbs: parseInt(carbsInput.value) || 0,
        fats: parseInt(fatsInput.value) || 0,
    };

    saveGoals(goals);
});

// Charger les objectifs au démarrage
loadGoals();