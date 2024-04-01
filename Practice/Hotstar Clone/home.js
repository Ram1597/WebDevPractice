setTimeout(sliderFunction,500);

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

   
   showMovies();

    
}

function showMovies(){
    const movies = [
        {
          name: "RRR",
          rating: 8,
          img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7642/1307642-v-3d3b6c61f97e",
        },
        {
          name: "Goodluck Jerry	",
          rating: 7,
          img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/901/1310901-v-e9763c24f44d",
        },
        {
          name: "MSD",
          rating: 8.5,
          img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v",
        },
        {
          name: "Doctor Strange",
          rating: 9,
          img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40",
        },
        {
          name: "Ford vs Ferrari",
          rating: 8.7,
          img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3150/813150-v",
        },
        {
          name: "Masaan",
          rating: 8.8,
          img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/7441/1000087441/1000087441-v",
        },
        {
          name: "The lion king",
          rating: 8.4,
          img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5242/875242-v",
        },
      ];


      movies.forEach( (e)=>{
        let {img}=e;
        let image=document.createElement("img");
        image.src=img;
        let movie=document.createElement("div");
        let homepageshows=document.querySelector("#homepageshows");
        movie.append(image);
        homepageshows.append(movie);
      });
}