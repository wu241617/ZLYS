function $(id) {
	return typeof id==='string'?document.getElementById(id):id;
}

window.onload=function () {
	var titles=$("notice-tit").getElementsByTagName("li");
	var divs=$("notice-con").getElementsByTagName("div");
	if(titles.length!=divs.length) return;
	for(var i=0;i<titles.length;i++){
		titles[i].index=i;
		titles[i].onmouseover=function () {
			for(var j=0;j<titles.length;j++){
				titles[j].className="";
				divs[j].style.display="none";
			}
			this.className="current";
			divs[this.index].style.display="block";
		};

	}
};