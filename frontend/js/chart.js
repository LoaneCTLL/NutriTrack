

// Fonction pour créer un graphique en barres
function createBarChart(ctx, labels, data, title) {
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Quantité',
                data: data,
                backgroundColor: ['#f39c12', '#3498db', '#2ecc71', '#e74c3c']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: title
                }
            }
        }
    });
}

// Fonction pour créer un diagramme en camembert
function createPieChart(ctx, labels, data, title) {
    return new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Proportion',
                data: data,
                backgroundColor: ['#f39c12', '#3498db', '#2ecc71', '#e74c3c']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: title
                }
            }
        }
    });
}