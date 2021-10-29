function fadeIn(element) {
    element.style.display = "block"
    var op = 0;
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        op = op + 0.05;
    }, 1);
}
var close = document.getElementsByClassName("closebtn");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}