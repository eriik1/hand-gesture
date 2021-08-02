prediction1=""
prediction2=""
Webcam.set({
    width:350,
    height:310,
    image_format:'png',
    png_quality:90,
})
camera=document.getElementById("camera")
Webcam.attach("#camera")
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image"src="'+data_uri+'">'
    })
}
console.log("ml5 verson;",ml5.verson)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1Q-i0Tn7o/model.json",modelLoaded)
function modelLoaded(){
    console.log("model is loaded")
}
function speak(){
    var synth=window.speechSynthesis
    speakdata1="the first prediction"+prediction1
    speakdata2="the second prediction is"+prediction2
    var uterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2)
    synth.speak(uterthis)
}