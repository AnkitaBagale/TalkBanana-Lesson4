// ex02
// var username= prompt("Enter your name");
// alert("Welcome "+username);


var translateBtn= document.querySelector('#translateBtn');
var userInput=document.querySelector('#userInput');
var output = document.querySelector('#output');
var serverUrl="https://api.funtranslations.com/translate/minion.json"

function createUrl(text){
    return encodeURI(serverUrl+"?"+"text="+text);
}
function errorHandler(error){
    console.log("Error is occurred"+error);
    alert("Looks like server is down. Please try again after sometime")
}

function translate(){
    // console.log("Clicked");
    // console.log(userInput.value);
    // output.innerText="cccccc"+userInput.value;

    fetch(createUrl(userInput.value))
    .then(response => response.json())
    .then(json => {
        output.innerText= json.contents.translated
    })
    .catch(errorHandler);

}

translateBtn.addEventListener("click", translate);

