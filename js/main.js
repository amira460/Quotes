var  quoteName = document.getElementById('quote');
var quotes = [
    '“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”',
    '“A room without books is like a body without a soul.”' ,
    '“Be who you are and say what you feel, because those who mind don t matter, and those who matter don t mind.”',
    '“You know you are in love when you can not fall asleep because reality is finally better than your dreams.”',
    '“Be the change that you wish to see in the world.”' ,
    '“In three words I can sum up everything I have learned about life: it goes on.”' ,
    '“If you want to know what a man is like, take a good look at how he treats his inferiors, not his equals.”' ,
    '“Do not walk in front of me… I may not follow Do not walk behind me… I may not leadWalk beside me… just be my friend”' ,
    '“If you tell the truth, you do not have to remember anything.”' ,
    '“I have learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”'
   
];
function quoteBtn() {
    var randomQuotes = quotes[Math.floor(Math.random() * quotes.length)]
    quote.innerHTML = randomQuotes;
}
