//counter code
var button = document.getElementById('counter');
//var counter = 0;

button.onclick = function() {
    
    // Create a request object
    var request = new XMLHTTPRequest();
    //capture the response and store it in a variable
    request.onreadystatechange = function (){
        if (request.readyState === XMLHttpRequest.Done) {
            //take some action
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    //make a request
    request.open('GET','http://samarthjoelram.imad.hasura-app.io/counter',true);
    request.send(null);
    
    // render the variable in the correct span
    /*counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString(); */
};

/*console.log('Loaded!');

//change the text of the main-text div
var element = document.getElementById('main-text'
);

element.innerHTML = 'New Value';

// move the image
var img = document.getElementById('madi');
var marginLeft = 0;   
function moveRight () {
     marginLeft = marginLeft + 1;
     img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function() {
    var interval = setInterval(moveRight, 50);
   
};  */