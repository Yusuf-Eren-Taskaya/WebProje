document.getElementById('good').addEventListener('click', function() {
    document.getElementById('mood-result').textContent = 'Bugün kendini çok iyi hissediyorsun!';
});

document.getElementById('neutral').addEventListener('click', function() {
    document.getElementById('mood-result').textContent = 'Bugün orta bir ruh halindesin.';
});

document.getElementById('bad').addEventListener('click', function() {
    document.getElementById('mood-result').textContent = 'Bugün biraz kötü hissediyorsun.';
});

document.getElementById('submit-water').addEventListener('click', function() {
    var waterAmount = document.getElementById('water-input').value;
    if(waterAmount) {
        document.getElementById('water-result').textContent = `Bugün ${waterAmount} litre su içtin. Harika!`;
    } else {
        document.getElementById('water-result').textContent = 'Lütfen geçerli bir miktar girin.';
    }
});