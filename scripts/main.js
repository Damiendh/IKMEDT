window.onload = function(){
  const box1 = document.getElementById("box1");

  const boxScreen = document.getElementById("boxScreen");
  const start = document.getElementById("start");

  const info = document.getElementById("info");

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

  const terugknop = document.getElementById("terugknop");
  const terugIMG = document.getElementById("terugIMG");

  const notificationSound = document.getElementById("notificationSound")

  var color = "gray";
  var specialization = 0;
  var terug = 0;

  sphere1.onclick = function(){
      color = "orange";
      specialization = 1;
      boxScreen.setAttribute("src","#BDAMimg");
      boxScreen.setAttribute("class","clickable");
      boxScreen.setAttribute("visible", true);
      box1.setAttribute("color",color);
      notificationSound.play("#notificationSound");
      start.setAttribute("visible",false);
      info.setAttribute("visible", false);
      terugknop.setAttribute("visible", false);
      terugIMG.setAttribute("visible", false);
      terugknop.setAttribute("class","");
      sphereReset()
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
      info.setAttribute("visible", false);
      terugknop.setAttribute("visible", false);
      terugIMG.setAttribute("visible", false);
      terugknop.setAttribute("class","");
      sphereReset()
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
      info.setAttribute("visible", false);
      terugknop.setAttribute("visible", false);
      terugIMG.setAttribute("visible", false);
      terugknop.setAttribute("class","");
      sphereReset()
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
      info.setAttribute("visible", false);
      terugknop.setAttribute("visible", false);
      terugIMG.setAttribute("visible", false);
      terugknop.setAttribute("class","");
      sphereReset();
  }

  terugknop.onclick = function(){
    if(terug == 1){
      boxScreen.setAttribute("class","clickable");
      boxScreen.setAttribute("visible", true);
      terugknop.setAttribute("visible", false);
      terugIMG.setAttribute("visible", false);
      terugknop.setAttribute("class","");
      sphereReset();
    }
    if(terug == 2){
      boxScreen.onclick();
      info.setAttribute("visible", false);
    }
  }

  BDAMsmall2.onclick = function(){
    terug = 2;
    info.setAttribute("visible", true);
    sphereReset()
  }
  BDAMsmall3.onclick = function(){
    terug = 2;
    info.setAttribute("visible", true);
    sphereReset()
  }
  BDAMsmall4.onclick = function(){
    terug = 2;
    info.setAttribute("visible", true);
    sphereReset()
  }
  IATsmall2.onclick = function(){
    terug = 2;
    info.setAttribute("visible", true);
    sphereReset()
  }
  IATsmall3.onclick = function(){
    terug = 2;
    info.setAttribute("visible", true);
    sphereReset()
  }
  IATsmall4.onclick = function(){
    terug = 2;
    info.setAttribute("visible", true);
    sphereReset()
  }
  FICTsmall2.onclick = function(){
    terug = 2;
    info.setAttribute("visible", true);
    sphereReset()
  }
  FICTsmall3.onclick = function(){
    terug = 2;
    info.setAttribute("visible", true);
    sphereReset()
  }
  FICTsmall4.onclick = function(){
    terug = 2;
    info.setAttribute("visible", true);
    sphereReset()
  }
  SEsmall2.onclick = function(){
    terug = 2;
    info.setAttribute("visible", true);
    sphereReset()
  }
  SEsmall4.onclick = function(){
    terug = 2;
    info.setAttribute("visible", true);
    sphereReset()
  }

  boxScreen.onclick = function(){
    terug = 1;
    boxScreen.setAttribute("visible", false);
    boxScreen.setAttribute("class","");
    terugknop.setAttribute("visible", true);
    terugIMG.setAttribute("visible", true);
    terugknop.setAttribute("class","clickable");
    switch(specialization){
      case 1:
        BDAMsmall1.setAttribute("visible", true);
        BDAMsmall2.setAttribute("visible", true);
        BDAMsmall3.setAttribute("visible", true);
        BDAMsmall4.setAttribute("visible", true);
        BDAMsmall2.setAttribute("class","clickable");
        BDAMsmall3.setAttribute("class","clickable");
        BDAMsmall4.setAttribute("class","clickable");
        break;
      case 2:
        IATsmall1.setAttribute("visible", true);
        IATsmall2.setAttribute("visible", true);
        IATsmall3.setAttribute("visible", true);
        IATsmall4.setAttribute("visible", true);
        IATsmall2.setAttribute("class","clickable");
        IATsmall3.setAttribute("class","clickable");
        IATsmall4.setAttribute("class","clickable");
        break;
      case 3:
        FICTsmall1.setAttribute("visible", true);
        FICTsmall2.setAttribute("visible", true);
        FICTsmall3.setAttribute("visible", true);
        FICTsmall4.setAttribute("visible", true);
        FICTsmall2.setAttribute("class","clickable");
        FICTsmall3.setAttribute("class","clickable");
        FICTsmall4.setAttribute("class","clickable");
        break;
      case 4:
        SEsmall1.setAttribute("visible", true);
        SEsmall2.setAttribute("visible", true);
        SEsmall3.setAttribute("visible", true);
        SEsmall4.setAttribute("visible", true);
        SEsmall2.setAttribute("class","clickable");
        SEsmall4.setAttribute("class","clickable");
    }
  }

  function sphereReset(){
    BDAMsmall1.setAttribute("visible", false);
    BDAMsmall2.setAttribute("visible", false);
    BDAMsmall3.setAttribute("visible", false);
    BDAMsmall4.setAttribute("visible", false);
    BDAMsmall2.setAttribute("class","");
    BDAMsmall3.setAttribute("class","");
    BDAMsmall4.setAttribute("class","");
    IATsmall1.setAttribute("visible", false);
    IATsmall2.setAttribute("visible", false);
    IATsmall3.setAttribute("visible", false);
    IATsmall4.setAttribute("visible", false);
    IATsmall2.setAttribute("class","");
    IATsmall3.setAttribute("class","");
    IATsmall4.setAttribute("class","");
    FICTsmall1.setAttribute("visible", false);
    FICTsmall2.setAttribute("visible", false);
    FICTsmall3.setAttribute("visible", false);
    FICTsmall4.setAttribute("visible", false);
    FICTsmall2.setAttribute("class","");
    FICTsmall3.setAttribute("class","");
    FICTsmall4.setAttribute("class","");
    SEsmall1.setAttribute("visible", false);
    SEsmall2.setAttribute("visible", false);
    SEsmall3.setAttribute("visible", false);
    SEsmall4.setAttribute("visible", false);
    SEsmall2.setAttribute("class","");
    SEsmall4.setAttribute("class","");
  }
}
