function generate(){
    var quotes = {
        "- Confucius" : '"It does not matter how slowly you go as long as you do not stop."',
        "- Charles R. Swindoll" : '"Life is 10% what happens to you and 90% how you react to it."',
        "- Elon Musk" : '"When something is important enough, you do it even if the odds are not in your favor."',
        "- Nikos Kazantzakis" : '"In order to succeed, we must first believe that we can."',
        "- W. Clement Stone" : '"Aim for the moon. If you miss, you may hit a star."',
        "- Ralph Marston" : '"What you do today can improve all your tomorrows."'
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;

}