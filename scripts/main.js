// this is where the magic happens.
/* */
let imgFiles = ["images/email.png", "images/github.svg", "images/siddh.jpg", "images/friend.png"];
//
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() { // 
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.response);
        autoFill(imgFiles, data); // function autoFill() resides in scriptAuto.js
    }
}
xhttp.open('GET', 'http://localhost:8080', true);
xhttp.send();
