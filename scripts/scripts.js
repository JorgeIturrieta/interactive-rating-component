const buttons = document.querySelectorAll('.btn-number');
const buttonSubmit = document.querySelector('.btn');
const card = document.querySelector('.card');
let currentNumber = null;

function handleClickNumber() {
    buttons.forEach((button) => button.classList.remove('active'));
    this.classList.add('active');
    currentNumber = this.innerHTML;
}

function handleSubmit() {
    if (!currentNumber) return;

    // Delete initial Modal
    while (card.firstChild) {
        card.removeChild(card.firstChild);
    }
    // Render Thank you modal
    card.classList.add('card__flex');
    card.innerHTML =
        card.innerHTML +
        `<div role="figure" class="ilustration-container" >
        <img src="./images/illustration-thank-you.svg" alt="thank-you"/>       
        </div>
        <p class="number-selected">You selected ${currentNumber} out of 5</p>
        <h2 class="card__title center">Thank you!</h2>
        <p  class="card__description center">We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>
    `;

    // send  request to backend
    //  .......
}

buttons.forEach((button) =>
    button.addEventListener('click', handleClickNumber)
);

buttonSubmit.addEventListener('click', handleSubmit);
