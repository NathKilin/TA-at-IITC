document.addEventListener('DOMContentLoaded', function() {
    // Função para obter o saldo do localStorage, ou definir um saldo inicial se não houver
    function getBalance() {
        let balance = localStorage.getItem('balance');
        return balance ? parseFloat(balance) : 1250.00; // Saldo inicial de $1250 se não houver valor salvo
    }

    // Função para salvar o saldo no localStorage
    function setBalance(newBalance) {
        localStorage.setItem('balance', newBalance.toFixed(2));
    }

    let balance = getBalance();

    const balanceElement = document.getElementById('balance-amount');
    balanceElement.textContent = balance.toFixed(2); // Exibe o saldo inicial

    // Redireciona para a página de opções
    document.getElementById('back_to_options').addEventListener('click', function() {
        window.location.href = 'options.html';
    });
});
