var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("mouseover", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
likes = document.getElementsByClassName("likes");
for(i=0;i<likes.length;i++){
	like_text = likes[i].nextElementSibling;
	id = likes[i].parentElement.className.substr(8,9);
	if(sessionStorage.getItem(id)!=null){
		like_text.innerHTML = sessionStorage.getItem(id);
	}
}
var like_count;
for(i=0;i<likes.length; i++){
	likes[i].addEventListener("click", function(){
		like_text=this.nextElementSibling;
		id = this.parentElement.className.substr(8,9);
		if(sessionStorage.getItem(id)==null){
    		sessionStorage.setItem(id, 1);
    		like_count=1;
		}
		else{
			like_count = parseInt(sessionStorage.getItem(id));
			like_count=like_count+1;
			sessionStorage.setItem(id, like_count);
		}
		like_text.innerHTML = like_count;
	});
}