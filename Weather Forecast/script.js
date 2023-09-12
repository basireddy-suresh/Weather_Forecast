const searchInput=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');
const image=document.querySelector('.icon');

async function getWeather(city){
    var res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=516d9752ea1c8a2f14610c5c038a6535&units=metric`);
    if(res.status==404){
        document.querySelector('.error').style.display="block";
    }else{
        document.querySelector('.error').style.display="none";

    }
    var data=await res.json();
    console.log(data);
    document.querySelector('.celcius').innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.humidityp').innerHTML=Math.round(data.main.humidity)+"%";
    document.querySelector('.winds').innerHTML=Math.round(data.wind.speed)+"km/h";

    if(data.weather[0].main == "Clouds"){
        image.src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather04-512.png"
    }else if(data.weather[0].main == "Clear"){
        image.src="https://cdn1.iconfinder.com/data/icons/weather-set2-2/64/Clear-1024.png"
    }else if(data.weather[0].main == "Rain"){
        image.src="https://cdn4.iconfinder.com/data/icons/weather-132/100/rain-512.png"
    }else if(data.weather[0].main == "Drizzle"){
        image.src="https://cdn3d.iconscout.com/3d/premium/thumb/drizzle-weather-7096832-5753008.png"
    }else if(data.weather[0].main == "Mist"){
        image.src="http://www.caspianwebmet.com/img/legendIcons/fog.png"
    }

    
    
}
searchBtn.addEventListener('click', ()=>{
    getWeather(searchInput.value);
})