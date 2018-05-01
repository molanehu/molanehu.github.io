var items = [];

$("#submit").on("click", function(){
  var name = $("#name").val();
  var color = $("#color").val();
  var taste = $("#taste").val();
  
  items.push({
    name: name,
    color: color,
    taste: taste,
  });
  
  console.log(items);
  
  var temp = '';
  for(var i = 0; i< items.length; i++) {
    temp += "Name: " + items[i].name + "<br/>";
    temp += "Color: " + items[i].color + "<br/>";
    temp += "Taste: " + items[i].taste + "</p>";
  }
  
  $("#list").html(temp);
});