/* setting the arrow */
/* 1 : */ 
function arrow(){
    var x = document.querySelector("i") ;
    if (x.classList.contains("down")){
        x.classList.remove("down") ;
        x.classList.add("up") ;
    }
    else {
        x.classList.remove("up") ;
        x.classList.add("down") ;
    }
}
/* 2 : close the menu when clicking outside of the box*/ 
function arrowtwo(){
  var x = document.getElementById("arrowt") ;
  if (x.classList.contains("down")){
      x.classList.remove("down") ;
      x.classList.add("up") ;
  }
  else if (x.classList.contains("up")) {
      x.classList.remove("up") ;
      x.classList.add("down") ;
  }
}



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function drop() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function droptwo(){
  document.getElementById("drpMain").classList.toggle("showtwo");
}

// Close the dropdown menu if the user clicks outside of programs drop down menu 
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn'))  {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        var x = document.querySelector("i") ;
        x.classList.remove("up") ;
        x.classList.add("down");
      }
    }
  }
// Close the dropdown menu if the user clicks outside of for government content
  if (!event.target.matches('.drpbutton'))
  {
    var a = document.getElementById("drpMain") ;
    var b = document.getElementById("arrowt") ;
    if (a.classList.contains('showtwo'))
    {
      a.classList.remove('showtwo') ;
      b.classList.remove("up") ;
      b.classList.add("down") ;
    }    
  }
  
// hide the all vid class on click 

/*
  var f = document.getElementById("allvidF") ;
  var n = document.getElementById("allvidN") ;
  var m = document.getElementById("allvidM") ;  
  if (f.classList.contains("showthree") || n.classList.contains("showfour") || m.classList.contains("showfive") )
  {
    if (!event.target.matches('.vid'))
    {
      f.classList.remove("showthree") ;
      n.classList.remove("showfour") ;
      m.classList.remove("showfive") ;
    }
  }
*/
} 

// on scroll add shadow to the header 
$(window).scroll(function() {     
  var scroll = $(window).scrollTop();
  if (scroll > 1) {
      $("#head").addClass("active");
      console.log("scrolled");
  }
  else {
      $("#head").removeClass("active");
  }
  });





function FransiscoVid(){
  var x = document.getElementById("allvidF") ;
  x.classList.add("showthree") ;
}

function NikithaVid(){
  var x = document.getElementById("allvidN") ;
  x.classList.add("showfour") ;
}
function MiguelVid(){
  var x = document.getElementById("allvidM") ;
  x.classList.add("showfive");
}

// close the video when clicking on X 
function close(){
  var x = document.getElementById("allvid") ;
  x.classList.remove("showthree") ;
}


