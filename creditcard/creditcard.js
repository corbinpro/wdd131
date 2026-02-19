const theForm = document.querySelector('#cardForm');

function displayError(msg) {
    document.querySelector('.errors').textContent = msg;
}

function isCardNumberValid(number) {
    return number === '1234123412341234';
}

function submitHandler(event) {
    event.preventDefault();
    let errorMsg = '';
    displayError('');

    const cardNumber = document.querySelector('#number');
    const cardNum = cardNumber.value.trim();

    if (cardNum.length !== 16 || isNaN(cardNum)) {
        errorMsg += 'Card number must be 16 digits\n';
    } else if (!isCardNumberValid(cardNum)) {
        errorMsg += 'Card number is not valid\n';
    }

    const expYear = Number(document.querySelector('#year').value);
    const expMonth = Number(document.querySelector('#month').value);
    const currentDate = new Date();

    if (expYear < currentDate.getFullYear() % 100 || (expYear === currentDate.getFullYear() % 100 && expMonth <= currentDate.getMonth())) {
        errorMsg += 'Card is expired\n';
    }

    if (errorMsg !== '') {
        displayError(errorMsg);
        return;
    }

    const messageDiv = document.querySelector('#message');
    messageDiv.textContent = '✓ Payment successful!';
    messageDiv.className = 'success';
    theForm.reset();
}

document.querySelector('#cardForm').addEventListener('submit', submitHandler);
