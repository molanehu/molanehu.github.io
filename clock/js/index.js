function clock(){
var today = new Date();
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
var years = today.getFullYear();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var dates = today.getDate();
  

  
if(dates<10) {
    dates = '0'+dates
} 
  
  
if (hours >= 12){
  meridiem = " PM";
}
else {
  meridiem = " AM";
}


if (hours>12){
	hours = hours - 12;
}
else if (hours===0){
	hours = 12;	
}


if (minutes<10){
	minutes = "0" + minutes;
}
else {
	minutes = minutes;
}

if (seconds<10){
	seconds = "0" + seconds;
}
else {
	seconds = seconds;
}


document.getElementById("clock").innerHTML = "<div id='month'>" + (months[today.getMonth()] + + dates+"."+years+"</div>"+"<br>"+hours+ ":" + minutes + ":" + seconds + meridiem);
}


setInterval('clock()', 1000);