const apiUrl = "https://api.quotable.io/random";

const quote= document.getElementById("quote");
const author= document.getElementById("author");
async function getquote(url){
    const response = await fetch(apiUrl);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getquote(apiUrl);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML +"--- By " + author.innerHTML ,"tweet Window","width = 600","height= 300")
}