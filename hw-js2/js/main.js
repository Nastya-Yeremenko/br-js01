function calculateChocolate() {
    let wallet = parseFloat(document.getElementById('walletInput').value);
    let chocPrice = parseFloat(document.getElementById('chocPriceInput').value);

    if (isNaN(wallet) || isNaN(chocPrice) || wallet < 0 || chocPrice <= 0) {
        alert('Будь ласка, введіть коректні значення.');
    } else {
        let chocCount = Math.floor(wallet / chocPrice);
        let change = wallet % chocPrice;

        alert('Ви можете купити ' + chocCount + ' шоколадок і у вас залишиться ' + change.toFixed(2) + ' грн здачі.');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    function reverseNumber() {
        let number = document.getElementById('numberInput').value;

        if (number.length !== 3 || isNaN(number)) {
            document.getElementById('result').innerHTML = '<p style="color: red;">Будь ласка, введіть коректне тризначне число.</p>';
        } 
        else {
            let reversedNumber = Number(number.toString().split('').reverse().join(''));
            document.getElementById('result').innerHTML = '<p>Число задом наперед: ' + reversedNumber + '</p>';
        }
    }

    window.reverseNumber = reverseNumber;
});