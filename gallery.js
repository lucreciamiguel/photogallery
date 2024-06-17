function upDate(previewPic){
    /*1*/ document.getElementById("image").style.backgroundImage="url('"+previewPic.src+"')";
    /*2*/ document.getElementById("image").innerHTML=previewPic.alt;
   /* In this function you should 
      1) change the url for the background image of the div with the id = "image" 
      to the source file of the preview image
      
      2) Change the text  of the div with the id = "image" 
      to the alt text of the preview image 
      */
    
      }
      
      function unDo(){
      /*1*/ document.getElementById("image").style.backgroundImage="url('')";
      /*2*/ document.getElementById("image").innerHTML="Hover over an image below to display here.";
       /* In this function you should 
      1) Update the url for the background image of the div with the id = "image" 
      back to the orginal-image.  You can use the css code to see what that original URL was
      
      2) Change the text  of the div with the id = "image" 
      back to the original text.  You can use the html code to see what that original text was
      */
          
      }  

function tab(){
Image = document.querySelectorAll(".roma img")
    for (var i=0; i < Image.length; i++){
    console.log("Image",i)
    Image[i].setAttribute("tabinex",[0])
}
}
