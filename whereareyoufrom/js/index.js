document.getElementById("submit").addEventListener("click", function() {
  var your_name = document.getElementById("your_name").value;
  var your_food = document.getElementById("your_food").value;
  var your_taste = document.getElementById("your_taste").value;
  var greeting = document.getElementById("greeting1");

  
  if(your_food.toUpperCase() == "B" && your_taste.toUpperCase() =="YES") {
    greeting.innerHTML = "여보세요, " + your_name + "!" + "<br/>" +"Here is your SPICY KOREAN RAMEN";
    greeting.style.backgroundImage = "";
    greeting.style.color = "red";
    var food = document.getElementById("food").src="https://78.media.tumblr.com/5a7565f81ecdc3697c17a73d7c84f050/tumblr_obrvzjCVDL1rwh5tto1_400.gif";
    
  }else if (your_food.toUpperCase() == "B" && your_taste.toUpperCase() =="NO") {
    greeting.innerHTML = "승인, "+ your_name+"!"+ "<br />"+"Here is your Bulgogi" ;
    greeting.style.backgroundImage = "";
    greeting.style.color = "blue";
    var food = document.getElementById("food").src="https://media2.giphy.com/media/3ofSBmKHB3ClRdEPFm/giphy.gif";
    
    
    
  }else if (your_food.toUpperCase() == "A" && your_taste.toUpperCase() =="YES"){
    greeting.innerHTML = "你好, " + your_name+ "!"+ "<br />"+"Here is your Mapo Toufu";
    greeting.style.backgroundImage = "";
    greeting.style.color = "purple";
    var food = document.getElementById("food").src="http://5b0988e595225.cdn.sohucs.com/images/20180112/cb63408fc66f4dc4a810ceab22fa5ed7.gif";
    
    
    
  } else{
    greeting.innerHTML = "好的，"+your_name+" !"+"<br />"+"Here is your Yunnan Ricenoodle"; ;
    greeting.style.color = "green";
    greeting.style.backgroundImage = "";
    var food = document.getElementById("food").src="http://blog.foodmapnyc.com/wp-content/uploads/2017/04/dengji-v07.gif";
  }
 

});