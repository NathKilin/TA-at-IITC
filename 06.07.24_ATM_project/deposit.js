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

    const errorMessage = document.getElementById('error-message');

    document.getElementById('submit-deposit').addEventListener('click', function() {
        const depositAmount = parseFloat(document.getElementById('deposit-amount').value);

        // Verifica se o valor do depósito é um múltiplo de 50 ou 100
        if (depositAmount > 0 && (depositAmount % 50 === 0 || depositAmount % 100 === 0)) {
            balance += depositAmount; // Adiciona o valor ao saldo
            setBalance(balance); // Atualiza o saldo no localStorage
            balanceElement.textContent = balance.toFixed(2); // Atualiza o saldo na tela
            errorMessage.style.display = 'none'; // Esconde a mensagem de erro
        } else {
            errorMessage.style.display = 'block'; // Mostra a mensagem de erro se o valor for inválido
            errorMessage.textContent = 'Only notes of 100 and 50 are accepted.';
        }
    });

    // Redireciona para a página de opções
    document.getElementById('back_to_options').addEventListener('click', function() {
        window.location.href = 'options.html';
    });
});
