const btn1=document.getElementById('btn1');
const p1 = document.getElementById('p1');
const div1 = document.getElementById('div1');
btn1.onclick=function(){
	p1.setAttribute('class','display');
}
div1.onclick= function (p1){
	p1.setAttribute('class','hidden');
}