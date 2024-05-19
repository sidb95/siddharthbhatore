// this is where the magic happens.
/* */
//
import data from '../files/data1.json' with { type: "json" };
//
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() { // 
    if(this.readyState == 4 && this.status == 200){
        autoFill(data); // function autoFill() resides in scriptAuto.js
    }
}
xhttp.open('GET', 'http://localhost:8000', true);
xhttp.send();
