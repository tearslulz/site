if (window.location.href.includes('index.html') === true || window.location.href.includes('.html') === false) {
  setInterval(function() { document.getElementById('now-playing').src = 'https://now-playing-profile-git-master-spinfal.vercel.app/now-playing?' + performance.now(); console.log('updated now playing'); }, 15000);
}

const urlParams = new URLSearchParams(window.location.search);
const param = urlParams.get('ref');
if (window.location.href.includes('lmao.html') && param !== 'noice.click') {
  window.open('/', '_self');
}

function salad() {
  const refCode = document.getElementById('saladCode');
  refCode.select();
  refCode.setSelectionRange(0, 99999); /* for mobile devices */
  document.execCommand("copy");
  alert(`copied the code: ${refCode.value}`);
  window.open('https://www.salad.io/');
}

$(window).on('load',function(){
  gsap.to('#loader',1,{y:"-100%"});
  gsap.to('#loader',1,{opacity:0});
  gsap.to('#loader',0,{display:"none",delay:1});
  gsap.to('#header',0,{display:"block",delay:1});
  gsap.to('#navigation-content',0,{display:"none"});
  gsap.to('#navigation-content',0,{display:"flex",delay:1});
});
$(function(){
  $('.color-panel').on("click",function(e) {
    e.preventDefault();
    $('.color-changer').toggleClass('color-changer-active');
});
$('.colors a').on("click",function(e) {
  e.preventDefault();
  var attr = $(this).attr("title");
  console.log(attr);
  $('head').append('<link rel="stylesheet" href="css/'+attr+'.css">');
});
});
$(function(){
     $('.menubar').on('click',function(){
         gsap.to('#navigation-content',.6,{y:0});
     });
     $('.navigation-close').on('click',function(){
        gsap.to('#navigation-content',.6,{y:"-100%"});
    });
   });
 
document.onkeydown=function(e){if(event.keyCode==123){return false}if(e.ctrlKey&&e.shiftKey&&e.keyCode=='I'.charCodeAt(0)){return false}if(e.ctrlKey&&e.shiftKey&&e.keyCode=='C'.charCodeAt(0)){return false}if(e.ctrlKey&&e.shiftKey&&e.keyCode=='J'.charCodeAt(0)){return false}if(e.ctrlKey&&e.keyCode=='U'.charCodeAt(0)){return false}};

$(function(){
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };
      
      TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
        var that = this;
        var delta = 200 - Math.random() * 100;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 100;
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      
      window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-rotate');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0em solid #666 ; }";
        document.body.appendChild(css);
      };
})
$(function(){

    $('#about-link').on('click',function(){
      gsap.to('#navigation-content',0,{display:"none",delay:.7});
      gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
  gsap.to('#header',0,{display:"none"});
gsap.to('#webhook',0,{display:"none"});
   gsap.to('#breaker',0,{display:"block"});
   gsap.to('#breaker',0,{display:"none",delay:2});
   gsap.to('#about',0,{display:"block",delay:.7});
   gsap.to('#navigation-content',0,{display:'flex',delay:2});
 })
 /*$('#contact-link').on('click',function(){
   gsap.to('#navigation-content',0,{display:"none",delay:.7});
   gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
gsap.to('#about',0,{display:"none"});
gsap.to('#webhook',0,{display:"none"});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#contact',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})*/
$('#webhook-link').on('click',function(){
  gsap.to('#navigation-content',0,{display:"none",delay:.7});
  gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
gsap.to('#about',0,{display:"none"});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#webhook',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})
$('#home-link').on('click',function(){
  gsap.to('#navigation-content',0,{display:"none",delay:.7});
  gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
gsap.to('#about',0,{display:"none"});
gsap.to('#webhook',0,{display:"none"});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#header',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})

if(document.querySelector('.cursor')){
  gsap.to('.cursor',1,{opacity:1,delay:1,scale:1,stagger:.2})
  gsap.to('.cursor-two',1,{opacity:1,delay:1,scale:1,stagger:.2})
}

})
  //CUSTOM CURSOR ANIMATION
  $(function(){
    var $cursor = $('.cursor');
    var $cursortwo = $('.cursor-two')
      function cursormover(e){
       
       gsap.to( $cursor , {
         x : e.clientX ,
         y : e.clientY,
        })
        gsap.to( $cursortwo , {
          x : e.clientX ,
          y : e.clientY,
         })
      }
      function cursorhover(e){
       gsap.to( $cursor,{
        scale:1.5,
        opacity:.4,
        background:'rgb(235,235,235)',
        border:'none',
        ease: Expo.easeOut,
       })
       gsap.to( $cursortwo,{
        scale:0,
        opacity:0
       })
     }
     function cursor(e){
       gsap.to( $cursor, {
        scale:1,
        opacity:1,
        background:'transparent',
        border:'1px solid rgb(235,235,235)',
        innerHTML:''
       }) 
       gsap.to( $cursortwo,{
        scale:1,
        opacity:1
       })
     }
     $(window).on('mousemove',cursormover);
     $('a').hover(cursorhover,cursor);
     $('.hover').hover(cursorhover,cursor);
     
  })

var random_images_array = ["1363382418078.png",
                           "141000167429.png",
                           "1410001686910.png",
                           "1410306398205.png",
                           "1416301704148.png",
                           "1418972601666.png",
                           "1422254058570.png",
                           "1422254999827.png",
                           "1424092566613.png",
                           "1428177826695.png",
                           "1428177904344.png",
                           "1428178080167.png",
                           "1428178155255.png",
                           "1428178187507.png",
                           "1428254016467.png",
                           "1428423289437.png",
                           "1428707759205.png",
                           "1429510703681.png",
                           "14350958102351.png",
                           "1435095810963.png",
                           "1435212506997.png",
                           "1436240851027.png",
                           "1444797684947.png",
                           "1444797896875.png",
                           "1444912076567.png",
                           "1444925656945.png",
                           "1444932063639.png",
                           "1445288849940.png",
                           "1445289056206.png",
                           "1445902711571.png",
                           "1446055508030.png",
                           "1446382234634.png",
                           "1446463082730.png",
                           "1446543984763.png",
                           "1446567791227.png",
                           "1446781681255.png",
                           "1447699627084.png",
                           "1448061734635.png",
                           "1448184200057.png",
                           "1448242472700.png",
                           "1448242666775.png",
                           "1448491901093.png",
                           "1450726187259.png",
                           "1448856052869.png",
                           "1449726465401.png",
                           "1450354879735.png",
                           "1450722871010.png",
                           "1450724583409.png",
                           "1450726187259.png",
                           "1453766877670.png",
                           "1456435736475.png",
                           "1456626037119.png",
                           "1456795820199.png",
                           "1457227943457.png",
                           "1457343592535.png",
                           "1457740113058.png",
                           "1457765150963.png",
                           "1457903809526.png",
                           "1458107401807.png",
                           "1458114655716.png",
                           "1458179149667.png",
                           "1458181302393.png",
                           "1458378445396.png",
                           "1458438424722.png",
                           "1458593213144.png",
                           "1458602218407.png",
                           "1458689827974.png",
                           "1458695854180.png",
                           "1458701216283.png",
                           "1458879883654.png",
                           "1459005360759.png",
                           "1459039594461.png",
                           "1466924283295.png",
                           "1468421480662.png",
                           "1471262460053.png",
                           "1471285748918.png",
                           "1472894659994.png",
                           "1480486527028.png",
                           "1484879057343.png",
                           "1486346829409.png",
                           "1489034771085.png",
                           "1489257402500.png",
                           "1489281927118.png",
                           "1489297097940.png",
                           "1490418851494.png",
                           "1492281060221.png",
                           "1494909700688.png",
                           "1506616576326.png",
                           "1512072270390.png",
                           "1512276789957.png",
                           "7ckzd1.png",
                           "e1c25e2f18430875d15fdcfbb14257e8.png",
                           "megumin_1.png",
                           "megumin_2.png",
                           "nz5vnb.png",
                           "patreon-1.png",
                           "patreon-2.png",
                           "patreon-3.png"
                          ];
var num = Math.floor( Math.random() * random_images_array.length );
var img = random_images_array[ num ];

var miku = document.createElement('img');
miku.src = "https://catbox.moe/pictures/qts/" + img;
miku.id = "miku";
miku.setAttribute("draggable", "false");
miku.setAttribute("oncontextmenu", "return false;");
//miku.setAttribute("data-tippy-content", "credit to catbox.moe for these images uwu");
miku.style.position = 'fixed';
miku.style.bottom = 0;
miku.style.right = 0;
miku.style.zIndex = 999999999;
miku.onclick = function() {
	window.open('https://catbox.moe');
};
miku.onload = function() {
	miku.style.width = miku.naturalWidth + 'px';
};
document.body.appendChild(miku);

// set tippy
tippy('#miku', {
  content: "<p style='font-family: Verdana;'><i>thanks catbox.moe for these images uwu</i></p>",
  allowHTML: true,
  arrow: false,
  delay: [700, 300],
  duration: 800,
});

// change img when changing page
document.getElementById('owo').addEventListener('click', function() { 
  num = Math.floor( Math.random() * random_images_array.length );
  img = random_images_array[ num ];
  miku.src = "https://catbox.moe/pictures/qts/" + img;
});