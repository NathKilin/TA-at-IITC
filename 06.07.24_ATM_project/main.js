const pin = 123456;
document.addEventListener('DOMContentLoaded', function() {
    // Lógica apenas para a página de PIN (index.html)
    if (document.getElementById('insert_btn')) {
        document.getElementById('insert_btn').addEventListener('click', function() {
            document.getElementById('pin-modal').style.display = 'flex';
            document.getElementById('remove_card_btn').style.display = 'block';
            document.getElementById('insert_btn').style.display = 'none';
            document.getElementById('pin_btn').style.display = 'block';
        });

        document.getElementById('remove_card_btn').addEventListener('click', function() {
            document.getElementById('pin-modal').style.display = 'none';
            document.getElementById('remove_card_btn').style.display = 'none';
            document.getElementById('insert_btn').style.display = 'block';
            document.getElementById('pin_btn').style.display = 'none';
            document.getElementById('pin_img').style.display = 'none';
        });

        document.querySelector('.close').addEventListener('click', function() {
            document.getElementById('pin-modal').style.display = 'none';
        });

        const togglePinButton = document.getElementById('pin_btn');
        const pinImage = document.getElementById('pin_img');
        
        togglePinButton.addEventListener('click', function() {
            if (pinImage.style.display === 'none') {
                pinImage.style.display = 'block';
            } else {
                pinImage.style.display = 'none';
            }
        });

        // Verificação do PIN
        document.getElementById('submit-pin-btn').addEventListener('click', function(){
            const enteredPin = document.getElementById('pin-input').value;
            const errorMessage = document.getElementById('error-message');

            if (parseInt(enteredPin) === pin) {
                window.location.href = 'options.html';
            } else {
                errorMessage.style.display = 'block';
                document.getElementById('pin-input').value = '';
            }
        });
    }
});
