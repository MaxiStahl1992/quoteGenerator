let quote = document.getElementById('quote');
let author= document.getElementById('author');
const twitterBtn = document.getElementById('twitter-button');
let newQuoteBtn = document.getElementById('new-Quote-Button');

//quote API
const url = 'https://api.quotable.io/random';

//get the quote
let getQuote = () => {
    fetch(url)
        .then((data) => data.json())
        .then((item) => {
            quote.innerText = item.content;
            author.innerText = item.author;
        });
}


//event listener
window.addEventListener("load", getQuote);
newQuoteBtn.addEventListener("click", getQuote)


//tweet
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
    window.open(twitterUrl, '_blank');
}

//event listener
twitterBtn.addEventListener('click', tweetQuote);
