// this is where the magic happens.
/* */
  port = 8080;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function( {
    if(this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.response);
      autoFill(imgFiles, data); 
// function autoFill() resides //  scriptAuto.js
    }
  }
  xhttp.open('GET', https://sidb95-6350abd7af18.herokuapp.com:process.env.PORT || port, true);
  xhttp.send();
