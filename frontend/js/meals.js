
async function displayMeals() {
    const mealList = document.getElementById('mealList');
    mealList.innerHTML = ''; // Vider la liste actuelle

    const meals = await getMeals();
    if (meals) {
        meals.forEach(meal => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${meal.name}</td>
                <td>${meal.calories}</td>
                <td>${meal.protein}</td>
                <td>${meal.carbs}</td>
                <td>${meal.fat}</td>
                <td>${meal.date}</td>
                <td><button onclick="deleteMeal('${meal._id}')">Supprimer</button></td>
            `;
            mealList.appendChild(row);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayMeals();
});