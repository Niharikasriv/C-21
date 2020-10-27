function bounceOff(friend1,friend2){

    if (friend1.x - friend2.x < friend2.width/2 + friend1.width/2
      && friend2.x - friend1.x < friend2.width/2 + friend1.width/2) {
    friend1.velocityX = friend1.velocityX * (-1);
    friend2.velocityX = friend2.velocityX * (-1);
  }
  if (friend1.y - friend2.y < friend2.height/2 + friend1.height/2
    && friend2.y - friend1.y < friend2.height/2 + friend1.height/2){
    friend1.velocityY = friend1.velocityY * (-1);
    friend2.velocityY = friend2.velocityY * (-1);
  }
  
  
  }