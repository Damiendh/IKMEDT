window.onload = function(){
  const box1 = document.getElementById("box1");

  const boxScreen = document.getElementById("boxScreen");

  const sphere1 = document.getElementById("sphere1");
  const sphere2 = document.getElementById("sphere2");
  const sphere3 = document.getElementById("sphere3");
  const sphere4 = document.getElementById("sphere4");

  const notificationSound = document.getElementById("notificationSound")

  var color = "gray";

  sphere1.onclick = function(){
      color = "orange";
      boxScreen.setAttribute("src","#BDAMimg");
      box1.setAttribute("color",color);
      notificationSound.play("#notificationSound");
  }

  sphere2.onclick = function(){
      color = "green";
      boxScreen.setAttribute("src","#IATimg");
      box1.setAttribute("color",color);
      notificationSound.play("#notificationSound");
  }

  sphere3.onclick = function(){
      color = "purple";
      boxScreen.setAttribute("src","#FICTimg");
      box1.setAttribute("color",color);
      notificationSound.play("#notificationSound");
  }

  sphere4.onclick = function(){
      color = "cyan";
      boxScreen.setAttribute("src","#SEimg");
      box1.setAttribute("color",color);
      notificationSound.play("#notificationSound");
  }
}
