/* grab input */

document.querySelector(".js-go").addEventListener('click',function(){

    var userInput = document.querySelector("input").value;
    var userInput = getUserInput();
    searchGiphy(userInput);

    //pushToDOM(input);
   
} );


document.querySelector(".js-userinput").addEventListener('keyup',function(e){

    var input = document.querySelector("input").value;
if(e.which === 13){
    var userInput = getUserInput();
    searchGiphy(userInput);


    //pushToDOM(input);
}


} );
function getUserInput() {
	var inputValue = document.querySelector('.js-userinput').value;

	return inputValue;
}



/* data stuff */
function searchGiphy(searchQuery){

    var url = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + searchQuery;
// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();


GiphyAJAXCall.addEventListener('load', function( e ) {

var data = e.target.response;
pushToDOM(data); 
});
}






/* gifs */


function pushToDOM(input){

    var response = JSON.parse(input);
    var imgUrl = response.data;

    imgUrl.forEach(function(image){
        var src = image.images.fixed_height.url;
       
        var container = document.querySelector(".js-container");
        
        container.innerHTML = container.innerHTML + "<img src=\""+ src +"\">";
    
    });




   
}