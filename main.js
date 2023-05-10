Webcam.set({
  width:350,
  height:300,
  image_format:"png",
  png_quality:90,
  })
  
  camera=document.getElementById("camera");
  Webcam.attach("#camera");
  function take_snapshot(){
  Webcam.snap(function(data_uri){ document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_uri+"'/>";}
   
  );
  
  };
  console.log("ml5 version:",ml5.version);
  Classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/dIkZoaOBG/model.json",model_Loaded);
  function model_Loaded()
  {
    console.log("modelLoaded");
  
  }
  
  function check()
  {
    img=document.getElementById("capture_image");
    Classifier.classify(img,gotResult);
  }
  
  function gotResult(error,result)
  {
    if (error)
    {
      console.log(error);
    }
  
    else 
    {
      console.log (result);
      document.getElementById("result_object_name").innerHTML=result[0].label;
      r=result[0].confidence*100;
      document.getElementById("result_object_accuracy").innerHTML=r.toFixed(2)+"%";
    };  
  }
  
  
  