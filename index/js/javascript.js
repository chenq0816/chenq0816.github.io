var imageNames=['image/1.jpg','image/2.jpg','image/3.jpg','image/4.jpg','image/5.jpg','image/6.jpg','image/7.jpg','image/8.jpg','image/9.jpg','image/10.jpg','image/11.jpg','image/12.jpg','image/13jpg','image/14.jpg','image/15.jpg'];
var imageChoice=choice(imageNames);

$('#mainImage').attr('src',imageChoice);

function choice(arr){
	return arr[Math.floor(Math.random()*arr.length)];
}



var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;
var day = date.getDay()+8;
var arr2 = year+'-'+month+'-'+day;

var hour = date.getHours();
var minute = date.getMinutes();
var arr3 = hour+':'+minute;

$('#date').text(arr2)
$('#date2').text(arr3)



if (hour<11){
	$('#text1').text('What to Eat This Morning？')
}else if(hour>=11 && hour<18)
{
	$('#text1').text('What to Eat This Afternoon？')
}else if(hour>=18 && hour<=24)
{
	$('#text1').text('What to Eat This Evening？')
}else {
	$('#text1').text('What to Eat Today？')
}