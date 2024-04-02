let API_key="AIzaSyCDlZuIacEG8PMiuqBhdN99an65aojIkpE"

async function mySearch()
{
   try{
    let query=document.getElementById("inputData").value;
    let response= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${API_key}`);
    let data=await response.json();
    let finaldata=data.items;

    let result=document.querySelector("#searchResult");
    result.innerHTML="";
    
    finaldata.forEach(
        function(element)
        {
            
            let image=document.createElement("img");
            let title=document.createElement("p");
            let channel_title=document.createElement("p");
            image.src=element.snippet.thumbnails.default.url;
            title.innerHTML=element.snippet.title;
            channel_title=element.snippet.channelTitle;
            let div=document.createElement("div");
            div.setAttribute("id","data");
            div.append(image,title,channel_title);
            result.append(div);


        }
    );



   }
   catch(e){
   }
}