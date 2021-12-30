var curIndex = 0;
		
var timeInterval = 1000;
		
var arr = new Array();
arr[0] = "../images/img/1.jpg";
arr[1] = "../images/img/2.jpg";
arr[2] = "../images/img/3.jpg";
setInterval(changeImg, timeInterval);
function changeImg() {

if (curIndex == arr.length - 1) {
	curIndex = 0;
	} else {
	curIndex += 1;
}
		                       
document.body.style.background= "URL("+arr[curIndex]+")"+" no-repeat";
document.body.style.backgroundSize="100% 100%";
}
	