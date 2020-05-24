//create variables
var car, carRed, carGreen, carYellow, carImg, wall;
var speed, weight, deform;

function preload() {
  //load the images
  carRed = loadImage("car red.png");
  carGreen = loadImage("car green.png");
  carYellow = loadImage("car yellow.png");
  carImg = loadImage("car white.png");
}
function setup() {
  createCanvas(1600,400);

  deform =  " ";
  textSize(18);

  //randomizes the speed and weight
  speed = Math.round(random(45, 90));
  weight = Math.round(random(500, 1500));

  //make sprite for wall
  wall = createSprite(1350, 200, 60, height/2);
  wall.shapeColor = rgb(80, 80, 80);

  //make sprite for car
  car = createSprite(80, 200, 50, 50);
  car.addImage(carImg);
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);

  //detects if car is touching the wall
  if (car.isTouching(wall)) {
    //calculates deformation
    deform = Math.round(0.5 * weight * speed * speed /22500);
  }
    
  text("deformation:" + deform, 1170, 80);

  //changes the car color acording to the crash
  if (deform < 80 && deform > 0) {
    car.addImage(carGreen);
    text("good", 1200, 100);
  }
  if (deform > 80 && deform <= 180) {
    car.addImage(carYellow);
    text("average", 1180, 100);
  }
  if (deform > 180) {
    car.addImage(carRed);
    text("lethal", 1200, 100);
  }

  //the car stops at the wall
  car.collide(wall);

  drawSprites();
}