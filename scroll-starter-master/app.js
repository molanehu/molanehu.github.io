





(function($) {

  $('#section-1').on('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');
    if (isInView) {

      anime({
        targets: '.box',
        translateX: function() { return anime.random(-50, 50) + 'vw'; },
        translateY: function() { return anime.random(-50, 50) + 'vh'; },
        scale: function() { return anime.random(10,30) / 10; },
        rotate: function() { return anime.random(-360,360); },
        duration: function() { return anime.random(1000,2000); },
        easing: 'easeOutQuad',
        // direction: 'alternate',
        loop: false,
        elasticity: function(el, i, l) {
          return (200 + i * 200);
        },
        begin: function(anim) {
          $(event.target).find('.log h1').html('Started');
        },
        complete: function(anim) {
          $(event.target).find('.log h1').html('Completed');
        }
      });

    }

  });

  $('#section-2').one('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');
    if (isInView) {

      var basicTimeline = anime.timeline({
        direction: 'alternate',
        loop: 3,
        elasticity: 350
      });
      basicTimeline.begin = function(anim) {
        $(event.target).find('.log h1').html('Started');
      };
      basicTimeline.complete = function(anim) {
        $(event.target).find('.log h1').html('Completed');
        $(event.target).find('.log h5').html('100%');
      };
      basicTimeline.run = function(anim) {
        $(event.target).find('.log h5').html(Math.round(anim.progress) + '%');
      }
      basicTimeline
        .add({
          targets: '.button',
          duration: 800,
          height: 20,
          width: 500,
          backgroundColor: '#2B2D2F',
          border: '0',
          borderRadius: 100
        })
        .add({
          targets: '.progress-bar',
          height: 20,
          width: 20,
          opacity: 1,
          duration: 1,
        })
        .add({
          targets: '.progress-bar',
          duration: 800,
          width: 500,
          elasticity: 350
        })
        .add({
          targets: '.button',
          duration: 300,
          height: 20,
          width: 500,
          backgroundColor: '#2B2D2F',
          border: '0',
          borderRadius: 100
        })
        .add({
          targets: '.progress-bar',
          height: 80,
          duration: 300,
          width: 500,
          elasticity: 350
        })
    }
  });

  $('#section-3').one('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');

   if (isInView) {

  
    anime({
        targets: '.button3',
        translateX: {
    value: '+=150',
    duration: 1000
  },
        translateY: 100,
        translateX: 300,
        loop:true,
  backgroundColor: [
    {value: '#FFF'}, // Or #FFFFFF
    {value: 'rgb(255, 100, 0)'},
    {value: 'hsl(10, 60%, 60%)'}
  ],
  easing: 'linear',
  direction: 'alternate',
  duration: 2000
      });

anime({
        targets: '.button31',
        translateX: -200,
        translateY: -200,
        loop:true,
  backgroundColor: [
    {value: '#FFF'}, // Or #FFFFFF
    {value: 'rgba(20, 100, 0,0.8)'},
    {value: 'hsl(20,100%,50%)'}
  ],
  easing: 'linear',
  direction: 'alternate',
  duration: 2000
      });


anime({
        targets: '.button32',
        translateX: -300,
        translateY: -100,
        loop:true,
  backgroundColor: [
    {value: '#FFF'}, // Or #FFFFFF
    {value: 'rgb(400, 10, 50)'},
    {value: 'hsl(100, 40%, 6%)'}
  ],
  easing: 'linear',
  direction: 'alternate',
  duration: 2000
      });

anime({
        targets: '.button33',
        translateX: -10,
        translateY: -300,
        loop:true,
  backgroundColor: [
    {value: '#FFF'}, // Or #FFFFFF
    {value: 'rgb(100, 100, 150)'},
    {value: 'hsl(130, 100%, 90%)'}
  ],
  easing: 'linear',
  direction: 'alternate',
  duration: 2000
      });





   }

  });







  $('#section-4').one('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');


if (isInView) {
var basicTimeline = anime.timeline();

basicTimeline
  .add({
    targets: '#basicTimeline .hello1.el',
    translateX: [ { value: 80 }, { value: 10 }, { value: 250 } ],
    translateY: [ { value: 0 }, { value: 100 }, { value: 200 } ],
      rotate: 360,
    duration: 3000,
  })
  .add({
    targets: '#basicTimeline .hello2.el',
    translateX: [ { value: 80 }, { value: 10 }, { value: 350 } ],
    translateY: [ { value: 0 }, { value: 100 }, { value: 200 } ],
    color: [
    {value: 'rgb(216, 114, 179)'}
  ],
    easing: 'easeOutExpo'
  })


  .add({
    targets: '#basicTimeline .hello3.el',
    backgroundColor: [
    {value: '#FFF'}, // Or #FFFFFF
    {value: 'rgb(100, 100, 150)'},
    {value: 'hsl(130, 100%, 90%)'}
  ],
    translateX: 200,
    translateY: 200,
    width: {
    value: '*=4',
    duration: 1800,
    easing: 'easeInOutSine'
  },
  direction: 'alternate',
    easing: 'easeOutExpo'
  })


var f = document.getElementById('foo');
document.addEventListener('click', function(ev){
    f.style.left = (ev.clientX-15)+'px';
    f.style.top = (ev.clientY-15)+'px';

},false);

var a = document.getElementById('foo1');
document.addEventListener('click', function(av){
    a.style.left = (av.clientX-75)+'px';
    a.style.top = (av.clientY-75)+'px';
},false);

var g = document.getElementById('foo2');
document.addEventListener('click', function(gv){
    g.style.left = (gv.clientX-25)+'px';
    g.style.top = (gv.clientY-25)+'px';
},false);


}
  });








  $('#section-5').one('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');
    if (isInView) {

var string = "Hi, this is one of my animations :)";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 80);

})();


}
  });

})(jQuery);





let needForRAF = true

const _updatePositionFollowMouse = ev => {
  document
    .querySelector('[js-cursor]')
    .style.setProperty('--mousey', ev.clientY)
  document
    .querySelector('[js-cursor]')
    .style.setProperty('--mousex', ev.clientX)
  needForRAF = true
}

const _init = () => {
  document.addEventListener('mousemove', ev => {

    if (needForRAF) {
      needForRAF = false
      requestAnimationFrame(() => {
        _updatePositionFollowMouse(ev)
      })
    }

  })
}

_init()


