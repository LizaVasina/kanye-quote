const quoteButton = document.querySelector('.button');
const quote = document.querySelector('.quote');

function getQuote() {
    fetch('https://api.kanye.rest')
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        .then(res => {
            if (res.quote.length > 40) {
                quote.style.fontSize = "56px";
            } else if(res.quote.length > 100) {
                getQuote();
            } else {
                quote.style.fontSize = "68px";
            }
            quote.textContent = res.quote;
        })
}
getQuote();

quoteButton.addEventListener('click', getQuote);