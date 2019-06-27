window.onload = function(){
  const box1 = document.getElementById("box1");

  const boxScreen = document.getElementById("boxScreen");
  const start = document.getElementById("start");

  const BDAMsmall1 = document.getElementById("BDAMsmall1");
  const BDAMsmall2 = document.getElementById("BDAMsmall2");
  const BDAMsmall3 = document.getElementById("BDAMsmall3");
  const BDAMsmall4 = document.getElementById("BDAMsmall4");
  const IATsmall1 = document.getElementById("IATsmall1");
  const IATsmall2 = document.getElementById("IATsmall2");
  const IATsmall3 = document.getElementById("IATsmall3");
  const IATsmall4 = document.getElementById("IATsmall4");
  const FICTsmall1 = document.getElementById("FICTsmall1");
  const FICTsmall2 = document.getElementById("FICTsmall2");
  const FICTsmall3 = document.getElementById("FICTsmall3");
  const FICTsmall4 = document.getElementById("FICTsmall4");
  const SEsmall1 = document.getElementById("SEsmall1");
  const SEsmall2 = document.getElementById("SEsmall2");
  const SEsmall3 = document.getElementById("SEsmall3");
  const SEsmall4 = document.getElementById("SEsmall4");

  const sphere1 = document.getElementById("sphere1");
  const sphere2 = document.getElementById("sphere2");
  const sphere3 = document.getElementById("sphere3");
  const sphere4 = document.getElementById("sphere4");

  const notificationSound = document.getElementById("notificationSound")

  var color = "gray";
  var specialization = 0;

  sphere1.onclick = function(){
      color = "orange";
      specialization = 1;
      boxScreen.setAttribute("src","#BDAMimg");
      boxScreen.setAttribute("class","clickable");
      boxScreen.setAttribute("visible", true);
      box1.setAttribute("color",color);
      notificationSound.play("#notificationSound");
      start.setAttribute("visible",false);
  }

  sphere2.onclick = function(){
      color = "green";
      specialization = 2;
      boxScreen.setAttribute("src","#IATimg");
      boxScreen.setAttribute("class","clickable");
      boxScreen.setAttribute("visible", true);
      box1.setAttribute("color",color);
      notificationSound.play("#notificationSound");
      start.setAttribute("visible",false);
  }

  sphere3.onclick = function(){
      color = "purple";
      specialization = 3;
      boxScreen.setAttribute("src","#FICTimg");
      boxScreen.setAttribute("class","clickable");
      boxScreen.setAttribute("visible", true);
      box1.setAttribute("color",color);
      notificationSound.play("#notificationSound");
      start.setAttribute("visible",false);
  }

  sphere4.onclick = function(){
      color = "cyan";
      specialization = 4;
      boxScreen.setAttribute("src","#SEimg");
      boxScreen.setAttribute("class","clickable");
      boxScreen.setAttribute("visible", true);
      box1.setAttribute("color",color);
      notificationSound.play("#notificationSound");
      start.setAttribute("visible",false);
  }

  boxScreen.onclick = function(){
      boxScreen.setAttribute("visible", false);
      switch(specialization){
        case 1:
          BDAMsmall1.setAttribute("visible", true);
          BDAMsmall2.setAttribute("visible", true);
          BDAMsmall3.setAttribute("visible", true);
          BDAMsmall4.setAttribute("visible", true);
          break;
        case 2:
          IATsmall1.setAttribute("visible", true);
          IATsmall2.setAttribute("visible", true);
          IATsmall3.setAttribute("visible", true);
          IATsmall4.setAttribute("visible", true);
          break;
        case 3:
          FICTsmall1.setAttribute("visible", true);
          FICTsmall2.setAttribute("visible", true);
          FICTsmall3.setAttribute("visible", true);
          FICTsmall4.setAttribute("visible", true);
          break;
        case 4:
          SEsmall1.setAttribute("visible", true);
          SEsmall2.setAttribute("visible", true);
          SEsmall3.setAttribute("visible", true);
          SEsmall4.setAttribute("visible", true);
      }
  }
}
