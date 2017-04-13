

function quoteGenerator() {
   var bgColor = ["#b14552", "#183b59", "#f33207", "#62b4ff", "#47b264", "#2b5c4f",
   "#f2d000", "#000", "#960303", "#ff7c0b"]
   var randQuote = Math.floor(Math.random() * 10);
     document.getElementById("quote").style.color = bgColor[randQuote];
     document.getElementsByTagName("BODY")[0].style.backgroundColor = bgColor[randQuote];
     document.getElementById("quoteMaster").style.color = bgColor[randQuote];
     document.getElementById("happy").style.color = bgColor[randQuote];
     document.getElementById("btn2").style.backgroundColor = bgColor[randQuote];

     var xhr = new XMLHttpRequest();
     xhr.open("GET", "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=10", false);
     xhr.send();
     var json = JSON.parse(xhr.responseText);
     document.getElementById("quote").innerHTML = json[randQuote].content;
     document.getElementById("quoteMaster").innerHTML = "- " + json[randQuote].title;

}
