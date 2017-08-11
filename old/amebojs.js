function showMenu(id){
   var x = document.getElementById(id);
   if(x.style.display == "block"){
     x.style.display = "none";
   }
   else {
     x.style.display = "block";
   }
}

function triggerSearch(id1, id2, id3){
  var x = document.getElementById(id1);
  var y = document.getElementById(id2);
  var z = document.getElementById(id3);
  var part = document.getElementById('partMenu');
  var part2 = document.getElementById('partMenu2');
  if(x.style.display == "inline-block"){
    x.style.display = "none";
    y.className = "glyphicon glyphicon-search";
    z.style.background = "#ba68c8";
    if (window.innerWidth <= 450) {
      part.style.display = "inline-block";
      part2.style.display = "inline-block";
    }
  }
  else {
    x.style.display = "inline-block";
    y.className = "fa fa-close";
    z.style.background = "grey";
    if (window.innerWidth <= 450) {
      part.style.display = "none";
      part2.style.display = "none";
    }
  }
}
