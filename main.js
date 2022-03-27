//https://teachablemachine.withgoogle.com/models/S-ihA45md//

function start(){
   navigator.mediaDevices.getUserMedia({audio:true});
   classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json',modelLoaded);
   
}
function modelLoaded(){
    classifier.classify(gotResult);

}
function gotResult(error,results){
if(error){
console.error(error);

}
else{
    console.log(results);
    red= Math.floor(Math.random()*255);
green= Math.floor(Math.random()*255);
blue= Math.floor(Math.random()*255);
document.getElementById("result_label").style.color= "rgb("+red+","+green+","+blue+")";

    document.getElementById("result_label").innerHTML="I can hear- "+results[0].label ;
   


if(results[0].label=="Barking"){

document.getElementById("animal_image").src="shiba.jpg";

}
else if(results[0].label=="Meowing"){
  document.getElementById("animal_image").src="beluga.jpg" ; 
}
else if(results[0].label=="Background Noise"){
    document.getElementById("animal_image").src="listen.gif";
}
}
}