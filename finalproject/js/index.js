var end = false;
$( ".box" ).click(function() {
  if (end == false){
    $( this ).addClass( "selected" ).siblings(".selected").removeClass("selected");
  }  
});

$(".submit").click(function() {
  end = true;
  
  var n1 = $(".a.selected").length;
  
  var n2 = $(".b.selected").length;
 
  var n3 = $(".c.selected").length;
 
  var n4 = $(".d.selected").length;  
  
  
  
  if ((n1 >= n2)&&(n1 >= n3)&&(n1 >= n4)) {
$( "span" ).html("You are RED");
$( "body").css("background-color","RED"); 
$( "h1" ).html("You are:");  
$( "h3").css("color","white");               
$(".images").attr("src","https://image.flaticon.com/icons/svg/201/201691.svg");
$(".box a,.box b,.box c,.box d").css("box-shadow","4px 4px 4px  transparent");
$( ".selected" ).css("background-color","transparent");  
$( ".selected" ).css("box-shadow","4px 4px 4px  transparent"); 
$( "#one" ).html("ENERGETIC");
$( "#two" ).html("PLAYFUL");
$( "#three" ).html("ACTIVE");
$( "#four" ).html("OPTIMISTIC");
$( "#five" ).html("WITTY");
$( ".submit" ).css("opacity","0");
$( ".refresh" ).css("opacity","1")
  }
  
  
  if ((n2 > n1)&&(n2 >= n3)&&(n2 >= n4)) {
$( "span" ).html("You are ORGANGE");
$( "body").css("background-color","orange"); 
$( "h1" ).html("You are:");  
$( "h3").css("color","white");             
$(".images").attr("src","https://image.flaticon.com/icons/svg/203/203262.svg");
$(".box a,.box b,.box c,.box d").css("box-shadow","4px 4px 4px  transparent");
$( ".selected" ).css("background-color","transparent");  
$( ".selected" ).css("box-shadow","4px 4px 4px  transparent"); 
$( "#one" ).html("WARM");
$( "#two" ).html("FRIENDLY");
$( "#three" ).html("TOLERANT");
$( "#four" ).html("AMIABLE");
$( "#five" ).html("RESPONSIBLE");
$( ".submit" ).css("opacity","0");
$( ".refresh" ).css("opacity","1")


  }
    
  if ((n3 > n1)&&(n3 > n2)&&(n3 >= n4)) {
$( "span" ).html("You are GREEN");
$( "body").css("background-color","green"); 
$( "h1" ).html("You are:");  
$( "h3").css("color","white");             
$(".images").attr("src","https://image.flaticon.com/icons/svg/201/201705.svg");
$(".box a,.box b,.box c,.box d").css("box-shadow","4px 4px 4px  transparent");
$( ".selected" ).css("background-color","transparent");  
$( ".selected" ).css("box-shadow","4px 4px 4px  transparent"); 
$( "#one" ).html("ORGANISED");
$( "#two" ).html("SEQUENTIAL");
$( "#three" ).html("PLANNED");
$( "#four" ).html("DETAILED");
$( "#five" ).html("REASONABLE");
$( ".submit" ).css("opacity","0");
$( ".refresh" ).css("opacity","1")
  }
    
  if ((n4 > n1)&&(n4 > n2)&&(n4 > n3)) {
$( "span" ).html("You are BLUE");
$( "body").css("background-color","#008ECC"); 
$( "h1" ).html("You are:");  
$( "h3").css("color","white");             
$(".images").attr("src","https://image.flaticon.com/icons/svg/680/680942.svg");
$(".box a,.box b,.box c,.box d").css("box-shadow","4px 4px 4px  transparent");
$( ".selected" ).css("background-color","transparent");  
$( ".selected" ).css("box-shadow","4px 4px 4px  transparent");  
$( "#one" ).html("LOGICAL");
$( "#two" ).html("ANALYTICAL");
$( "#three" ).html("CAUTIOUS");
$( "#four" ).html("QUENTITATIVE");
$( "#five" ).html("LOYAL");
$( ".submit" ).css("opacity","0");
$( ".refresh" ).css("opacity","1")
  }
		
});
