
var title = document.getElementById("title");
var description = document.getElementById("description");
var img = document.getElementById("img");

(function() {

  document.getElementById("ajaxButton").addEventListener("click", makeRequest);

  var httpRequest;
     var score1 = 0;
  var audio = document.createElement("bgMusic");


  function makeRequest() {
    httpRequest = new XMLHttpRequest();
    httpRequest2 = new XMLHttpRequest();
    httpRequest3 = new XMLHttpRequest();
    bgMusic.src = "data/sound.wav"
   bgMusic.play()

    if (!httpRequest) { 
      alert("creating request object failed");
      return false;
    }
    
    var url1 = "https://pokeapi.co/api/v2/pokemon/";
          var chooseNumber = Math.random()*6;
          var chooseNumber2 = Math.round(chooseNumber);
          var chooseNumber3 = chooseNumber2.toString();

          var chooseNumber4 = Math.random()*6;
          var chooseNumber5 = Math.round(chooseNumber4);
          var chooseNumber6 = chooseNumber5.toString();

          var chooseNumber7 = Math.random()*6;
          var chooseNumber8 = Math.round(chooseNumber7);
          var chooseNumber9 = chooseNumber8.toString();

    httpRequest.open("GET", url1 + chooseNumber3);
    httpRequest.send();

    httpRequest2.open("GET", url1 + chooseNumber6);
    httpRequest2.send();
   
   httpRequest3.open("GET", url1 + chooseNumber9);
    httpRequest3.send();

if(((chooseNumber3 == chooseNumber6) && (chooseNumber3 != chooseNumber9)) ||((chooseNumber3 == chooseNumber9) && (chooseNumber3 != chooseNumber6))||((chooseNumber6 == chooseNumber9) && (chooseNumber6 != chhooseNumber3))){
score1 = score1 + 1;
  fscore.innerHTML = "Score:"+score1;
}

if(chooseNumber3 == chooseNumber6 == chooseNumber9){
  score1 = score1 + 2;
  fscore.innerHTML = "Score:"+score1;

}


    httpRequest.onreadystatechange = fillInfo;
      httpRequest2.onreadystatechange = fillInfo2;
        httpRequest3.onreadystatechange = fillInfo3;
    
    function fillInfo() {
      var responseContent;

      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
         
          
          responseContent = httpRequest.responseText;

          var parsedContent = JSON.parse(responseContent);


          
          img.src = parsedContent.sprites.front_default;
          description.innerHTML = parsedContent.name;


        }
        else {
         alert("There was a problem with the request: " + httpRequest.status);
        }
      } 
}

         function fillInfo2() {
      var responseContent;

      if (httpRequest2.readyState === XMLHttpRequest.DONE) {
        if (httpRequest2.status === 200) {
         
          
          responseContent2 = httpRequest2.responseText;

          var parsedContent2 = JSON.parse(responseContent2);


          
          img2.src = parsedContent2.sprites.front_default;
          description2.innerHTML = parsedContent2.name;


        }
        else {
         alert("There was a problem with the request: " + httpRequest2.status);
        }
      } 
}

         function fillInfo3() {
      var responseContent3;

      if (httpRequest3.readyState === XMLHttpRequest.DONE) {
        if (httpRequest3.status === 200) {
         
          
          responseContent3 = httpRequest3.responseText;

          var parsedContent3 = JSON.parse(responseContent3);


          
          img3.src = parsedContent3.sprites.front_default;
          description3.innerHTML = parsedContent3.name;


        }
        else {
         alert("There was a problem with the request: " + httpRequest3.status);
        }
      } 
      
    }
    




  
}
})();
