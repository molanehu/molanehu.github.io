$("#submit").on("click", function() {
  var your_name = $("#your_name").val();
  var your_food = $("#your_food").val();
  var your_taste = $("#your_taste").val();
  var greeting = $("#greeting1");

  
  if(your_food.toUpperCase() == "B" && your_taste.toUpperCase() =="YES") {
    greeting.html("여보세요, " + your_name + "!" + "<br/>" +"Here is your SPICY KOREAN RAMEN");
    greeting.css("backgroundImage", "");
    greeting.css("color","red");
    $("#food").attr("src", "https://78.media.tumblr.com/5a7565f81ecdc3697c17a73d7c84f050/tumblr_obrvzjCVDL1rwh5tto1_400.gif");
    
  }else if (your_food.toUpperCase() == "B" && your_taste.toUpperCase() =="NO") {
    greeting.html("승인, "+ your_name+"!"+ "<br />"+"Here is your Bulgogi") ;
    greeting.css("backgroundImage", "");
    greeting.css("color","red");
    $("#food").attr("src", "https://media2.giphy.com/media/3ofSBmKHB3ClRdEPFm/giphy.gif");
    
    
    
  }else if (your_food.toUpperCase() == "A" && your_taste.toUpperCase() =="YES"){
    greeting.html( "你好, " + your_name+ "!"+ "<br />"+"Here is your Mapo Toufu");
    greeting.css("backgroundImage", "");
    greeting.css("color", "purple");
    $("#food").attr("src",
  "http://5b0988e595225.cdn.sohucs.com/images/20180112/cb63408fc66f4dc4a810ceab22fa5ed7.gif");
    
    
    
  } else{
    greeting.html("好的，"+your_name+" !"+"<br />"+"Here is your Yunnan Ricenoodle");
    greeting.css("color", "green");
    greeting.css("backgroundImage", "");
    
    $("#food").attr("src",
  "http://blog.foodmapnyc.com/wp-content/uploads/2017/04/dengji-v07.gif");
    
  }
 

});