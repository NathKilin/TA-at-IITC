// Redireciona para a página correspondente ao botão clicado
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('withdraw').addEventListener('click', function() {
        window.location.href = 'withdraw.html'; // Vai para a página de saque
    });

    document.getElementById('deposit').addEventListener('click', function() {
        window.location.href = 'deposit.html'; // Vai para a página de depósito
    });

    document.getElementById('balance_information').addEventListener('click', function() {
        window.location.href = 'balance.html'; // Vai para a página de saldo
    });

    document.getElementById('exit').addEventListener('click', function() {
        window.location.href = 'index.html'; // Vai para a página inicial (welcome)
    });
});
