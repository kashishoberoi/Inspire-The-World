// var ah = document.getElementById("AH");
// ah.addEventListener("mouseover",function(){
// 	var p = ah.parentElement;
// 	var para = document.createElement("p");
// 	para.setAttribute('class','description');
// 	para.textContent = "here i<br>am"
// 	p.appendChild(para);
// })
// ah.addEventListener("mouseout",function(){
// 	var rpara = document.querySelectorAll(".description");
// 	//rpara.fadeOut();
// 	ah.parentElement.removeChild(rpara[0]);
// })
  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs() {
    showDivs(slideIndex += 1);
  }
  function minusDivs() {
    showDivs(slideIndex -= 1);
  }
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display="none";  
    }
    x[slideIndex-1].style.display="block";  
  }