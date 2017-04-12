var quotes = [
  "There is never an endYou know what you are but you dont know what you can become",
  "There is never an endYou know what you are but you dont know what you can become",
  "There is never an endYou know what you are but you dont know what you can become",
  "There is never an endYou know what you are but you dont know what you can become",
  "There is never an endYou know what you are but you dont know what you can become",
  "There is never an endYou know what you are but you dont know what you can become",
  "There is never an endYou know what you are but you dont know what you can become",
  "There is never an endYou know what you are but you dont know what you can become",
  "There is never an endYou know what you are but you dont know what you can become",
  "There is never an endYou know what you are but you dont know what you can become"
];

var bgColor = ["#b14552", "#183b59", "#f33207", "#62b4ff", "#47b264", "#2b5c4f",
 "#f2d000", "#000", "#960303", "#ff7c0b"]
function quoteGenerator() {
   var randQuote = Math.floor(Math.random() * 10);
   document.getElementById("quote").innerHTML = quotes[randQuote];
   document.getElementById("quote").style.color = bgColor[randQuote];
   document.getElementsByTagName("BODY")[0].style.backgroundColor = bgColor[randQuote];
   document.getElementById("quoteMaster").style.color = bgColor[randQuote];
   document.getElementById("happy").style.color = bgColor[randQuote];
   document.getElementById("btn1").style.backgroundColor = bgColor[randQuote];
   document.getElementById("btn2").style.backgroundColor = bgColor[randQuote];
}
