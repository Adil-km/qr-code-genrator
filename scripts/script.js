let qrcontainer = document.getElementById('qrcontainer');
  
  let qrtext = document.getElementById("qrtext");
  let genbtn= document.getElementById('genbtn');
  let downloadBtn = document.getElementById("downloadBtn");
  let qrImg;
  
  //QR code image generating function (API)
  generateQr = (qrtext)=>{
    qrcontainer.innerHTML = "";
    return new QRCode(qrcontainer, {
    text: qrtext,
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
    });
    
  }
  
  //calling the genrate function and display the image 
  genbtn.addEventListener("click",(e)=>{
    let text = qrtext.value;
    if(text){
      //passing the user's input to function as parameter
      qrcode = generateQr(text);
      //showing the download button 
      downloadBtn.classList.remove("hide");
      downloadBtn.classList.add("btn");
      qrcontainer.style.display="flex";
    }
  });
  
  downloadImg = ()=>{
    const qrImg = qrcontainer.querySelector("canvas");
    if(qrImg){
      //converting canvas to image
      const imgSrc = qrImg.toDataURL("image/jpeg",1.0);
      //set the image url to the download button 
      downloadBtn.href = imgSrc;
      console.log("Image downloaded!");
    }
  }
 
 downloadBtn.addEventListener("click",downloadImg)
  
  