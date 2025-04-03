// Sélectionner le formulaire et les champs
const mealForm = document.getElementById("mealForm");
const mealName = document.getElementById("mealName");
const calories = document.getElementById("calories");
const proteins = document.getElementById("proteins");
const carbs = document.getElementById("carbs");
const fats = document.getElementById("fats");
const date = document.getElementById("date");
const message = document.getElementById("message");

// Vérifier les champs du formulaire
function validateForm() {
    if (!mealName.value || !calories.value || !proteins.value || !carbs.value || !fats.value || !date.value) {
        message.textContent = "Tous les champs sont requis.";
        message.style.color = "red";
        return false;
    }
    if (isNaN(calories.value) || isNaN(proteins.value) || isNaN(carbs.value) || isNaN(fats.value)) {
        message.textContent = "Les calories, protéines, glucides et lipides doivent être des nombres.";
        message.style.color = "red";
        return false;
    }
    return true;
}

// Envoyer les données au backend
async function addMeal(meal) {
    try {
        const response = await fetch('http://localhost:3000/api/meals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(meal)
        });
        if (response.ok) {
            message.textContent = "Repas ajouté avec succès !";
            message.style.color = "green";
            mealForm.reset();
        } else {
            const errorData = await response.json();
            throw new Error(errorData.msg || "Erreur lors de l'ajout du repas.");
        }
    } catch (error) {
        message.textContent = error.message;
        message.style.color = "red";
    }
}

// Gestion de la soumission du formulaire
mealForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateForm()) {
        const meal = {
            name: mealName.value,
            calories: parseInt(calories.value),
            proteins: parseInt(proteins.value),
            carbs: parseInt(carbs.value),
            fats: parseInt(fats.value),
            date: new Date(date.value).toISOString() 
        };
        addMeal(meal);
    }
});