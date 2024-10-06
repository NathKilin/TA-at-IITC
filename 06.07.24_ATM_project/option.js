// Lógica apenas para a página de opções
document.addEventListener('DOMContentLoaded', function() {
    const balanceButton = document.getElementById('balance_information'); // Corrigido o ID

    // Adiciona o evento de clique para redirecionar para a página de balance.html
    balanceButton.addEventListener('click', function() {
        window.location.href = 'balance.html';
    });
});
