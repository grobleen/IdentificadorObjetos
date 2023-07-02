var resultadoprebio = "";
function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet',modelocargado)
}
function draw(){
  image(video,0,0,300,300);
  classifier.classify(video,gotResult);
}
function modelocargado(){
console.log("modelocargado")
}
function gotResult(error,results){
if(error){
console.log(error);
}else{
console.log(results)
if((results[0].confidence>0.5)&&(resultadoprebio!=results[0].label)){
resultadoprebio=results[0].label;
var synth=window.speechSynthesis;
speak_data = "elobjetodetectadoes"+results[0].label;
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
document.getElementById("resultado_objeto").innerHTML=results[0].label;
document.getElementById("resultado_presicion").innerHTML=results[0].confidence.toFixed(3);
}
}
}