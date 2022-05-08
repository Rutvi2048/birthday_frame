function preload()
{

}

function setup()
{
    canvas =  createCanvas(500, 400);
    background(200);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
 }   

function draw()
{
    image(video,0,0,640,480);
    fill(0,255,0);
    circle(50,50,70);
    fill(0,255,0);
    circle(450,50,70);
    fill(0,255,0);
    circle(450,350,70);
    fill(0,255,0);
    circle(50,350,70);
   
    fill(255,0,0);
    rect(80, 30, 340, 30);
    fill(255,0,0);
    rect(80, 330, 340, 30);
    fill(255,0,0);
    rect(30, 80, 30, 240);
    fill(255,0,0);
    rect(435, 80, 30, 240);
}

function take_snapshot()
{
    save('birthday_image.png');
}