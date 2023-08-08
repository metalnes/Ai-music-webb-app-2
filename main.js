function setup(){
   canvas=createCanvas(600,400)
   canvas.center() //canvas.position(300,150)
   video=createCapture(VIDEO)
   video.hide()
}
 function preload(){
    Song1=loadSound("COFFIN DANCE.mp3")
    Song2=loadSound("Dancin - Krono Remix.mp3")
 }

 function draw(){
    image(video,0,0,600,400)
 }