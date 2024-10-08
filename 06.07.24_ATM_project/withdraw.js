document.addEventListener('DOMContentLoaded', function() {
    function getBalance() {
        let balance = localStorage.getItem('balance');
        return balance ? parseFloat(balance) : 1250.00;
    }

    function setBalance(newBalance) {
        localStorage.setItem('balance', newBalance.toFixed(2));
    }

    let balance = getBalance();

    const balanceElement = document.getElementById('balance-amount');
    balanceElement.textContent = balance.toFixed(2);

    // Função para processar o saque
    document.querySelectorAll('.withdraw-btn').forEach(button => {
        button.addEventListener('click', function() {
            const withdrawAmount = parseFloat(button.getAttribute('data-amount'));

            // Permite saldo negativo
            balance -= withdrawAmount; 
            setBalance(balance); // Atualiza o saldo no localStorage
            balanceElement.textContent = balance.toFixed(2); // Atualiza o saldo na tela
        });
    });

    // Redireciona para a página de opções
    document.getElementById('back_to_options').addEventListener('click', function() {
        window.location.href = 'options.html';
    });
});
