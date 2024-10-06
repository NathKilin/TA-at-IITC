document.addEventListener('DOMContentLoaded', function() {
    // Quando o botão "Insert" for clicado, exibe o modal de PIN e o botão "Remove Card"
    document.getElementById('insert_btn').addEventListener('click', function() {
        // Exibe o modal de PIN
        document.getElementById('pin-modal').style.display = 'flex';
        // Exibe o botão "Remove Card"
        document.getElementById('remove_card_btn').style.display = 'block';
        console.log('Remove Card button should be visible now');
        // Oculta o botão "Insert"
        document.getElementById('insert_btn').style.display = 'none';
    });

    // Função para restaurar o estado inicial (fechar o modal e mostrar o botão "Insert")
    document.getElementById('remove_card_btn').addEventListener('click', function() {
        // Oculta o modal de PIN
        document.getElementById('pin-modal').style.display = 'none';
        // Oculta o botão "Remove Card"
        document.getElementById('remove_card_btn').style.display = 'none';
        // Exibe novamente o botão "Insert"
        document.getElementById('insert_btn').style.display = 'block';
    });

    // Fechar o modal ao clicar no "x"
    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('pin-modal').style.display = 'none';
    });
});
