var parent = document.getElementById("content");

window.onload = makeRectangles(56);

// makeRectangles(200);
// makeRectangles(100);
// makeRectangles(400);


// s
// document.getElementById("a").onclick=function() {myFunction()}; 
// function myFunction(){
//     document.getElementById("a").innerHTML= "Blue-And-White Porcelain";
// }

document.getElementById("a").onmousedown = function() {mouseDown()};
document.getElementById("a").onmouseup = function() {mouseUp()};

function mouseDown() {
    document.getElementById("a").innerHTML = "Blue-And-White Porcelain"+ "<br/>"+"<br/>"+ 
    "Your touch like brush strokesyou hold colour in my skin"+"</br>"+
    "The deep blue and pearl white glow like porcelain"+"</br>"+"As I stare clear through the window that I’m locked within"+"<br/>"+
    "I count the seconds to see you again"+"<br/>"+"Possessions reach cannot hold beauty such as yours"+"</br>"+"Yet still its clouds shroud your light so your petals fall"+"</br>"+"Your flowers kiss I reminisce, now I only see in picture frames"+"</br>"+"</br>"+"The sky is crying blue, as I wait for you"+"</br>"+"The fire in my heart burning white and true"+"</br>"+"A thousand miles the smoke is rising high both sides"+"</br>"+"I see your shadow outlined through"+"</br>"+"The sky still dark as I make my way to you"+"</br>"+"White moon light guides our way, fields of morning dew"+"</br>"+"Our world is greener on the other side so free"+"</br>"+"The time is calling"
}
function mouseUp() {
    document.getElementById("a").innerHTML = "青花瓷" +"<br/>"+"<br/>"+"素胚勾勒出青花笔锋浓转淡"+"<br/>"+"瓶身描绘的牡丹一如你初妆"+"<br/>"+
    "冉冉檀香透过窗心事我了然"+"<br/>"+"宣纸上走笔至此搁一半"+"<br/>"+"釉色渲染仕女图韵味被私藏"+"<br/>"+"而你嫣然的一笑如含苞待放"+"<br/>"+"你的美一缕飘散去到我去不了的地方"+"</br>"+"</br>"+"天青色等烟雨而我在等你"+"</br>"+"炊烟袅袅升起隔江千万里"+"</br>"+"在瓶底书汉隶仿前朝的飘逸"+"</br>"+"就当我为遇见你伏笔"+"</br>"+"天青色等烟雨而我在等你"+"</br>"+"月色被打捞起晕开了结局"+"</br>"+"如传世的青花瓷自顾自美丽"+"</br>"+"你眼带笑意"
}



  function play(){
       var audio = document.getElementById("audio");
       audio.play();
                 }

function makeRectangles(n){
//Makes n rectangles
    for (i = 1; i < n; i++){
//Create an element
    var child = document.createElement("img");
    child.style.visibility = 'hidden';
//give attributes
    child.className = "element";
   if (i % 2==0 ) {
        child.src = "https://shop.r10s.com/b48/bb2/0b3a/60f0/10da/bc7a/8c1a/1153e5ad31005056ae11f5.gif";
        child.className += ' bowl1';
    }


   else if (i % 3==0){
        child.src = "https://e.share.photo.xuite.net/hiramcheng216/1e7e9e6/9349537/404829765_m.jpg";
        child.className += ' bowl2';
   }


    else {
        child.src = "https://mir-s3-cdn-cf.behance.net/project_modules/disp/1abab225269751.563437658dd7a.gif"; 
        child.className += ' bowl3';
    }

    //append the element to HTML
    parent.append(child);
    console.log('element ' + i + ' added.');
  }
}


function show1(){
  var bowl1 = document.getElementsByClassName('bowl1');
  for (var i=0;i<bowl1.length;i++){
    bowl1[i].style.visibility = 'visible';
  }
}

function show2(){
  var bowl2 = document.getElementsByClassName('bowl2');
  for (var i=0;i<bowl2.length;i++){
    bowl2[i].style.visibility = 'visible';
  }
}


function show3(){
  var bowl3 = document.getElementsByClassName('bowl3');
  for (var i=0;i<bowl3.length;i++){
    bowl3[i].style.visibility = 'visible';
  }
}


// function clearAll(){
//  parent.innerHTML="";
// }

// later
// function to generate a div of squares
// function to show / hide images




