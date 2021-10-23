var wormGroup
var player
var score = 0
function setup() {
  createCanvas(800,600);
  player = createSprite(40,40,50,50)
 wormGroup = new Group()
}

function draw() {
  background("black");
  stroke("red") 
  noFill() 
  ellipse(100,350,40,30);
  player.x = mouseX
  player.y = mouseY
  if(player.x<150 && player.x>90 &&player.y<380 && player.y>320){
    text("No cheating",200,200)
    player.x = 30
    player.y = 30
  }
  generateWorms()
  for(var i = 0; i<(wormGroup).length; i++){
    var temp = wormGroup.get(i)
    if(player.isTouching(temp)){
      temp.destroy()
      score++
      temp = null
    }
    
  }
  textSize(20)
  text("worm Destroyed-"+score,350,50)
  drawSprites();

}

function generateWorms(){
  if(frameCount % 30 === 0){


var worm = createSprite(100,350,40,5)
worm.shapeColor = "green"
worm.velocityX = random(-4,4)
worm.velocityY = random(-4,4)
wormGroup.add(worm)

}
}