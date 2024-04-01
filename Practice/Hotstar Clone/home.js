setTimeout(sliderFunction,1000);

function sliderFunction()
{
    const arr = [
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/9119/1329119-h-ef64fcf3d1f9",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/7976/1317976-h-e672d8d911fe",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/3064/1323064-h-dcaae091e676",
      ];
    
    let image=document.createElement("img");
    image.src=arr[0];
    let sliderMenu=document.querySelector("#sliderMenu");
    sliderMenu.append(image);
    let i=1;
   setInterval(function(){
    if(i==3) i=0;
    image.src=arr[i];
    sliderMenu.append(image);
    i++;
   },2000);


    
}