// initialization

const temperatureField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const emojiField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
const sBtn = document.querySelector(".submitbtn");

let target = "lucknow"

// fn to search Location
sBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    target = document.querySelector(".search").value;
    fetchData();
})

// data fetch fn
const fetchData = async () => {
    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=4e18374a546e409fb32173821240507&q=${target}`

    const response = await fetch(url);
    const data = await response.json();

    const {
        current:{temp_c,condition:{
            text,
            icon
        }},
        location:{name,localtime},
        
    } = data;
    updateDom(temp_c, name,localtime,icon,text)
    } catch (error) {
        alert("Location not Found");
    }
};

// Dom update

function updateDom(temperature, city,time,emoji,text) {
    temperatureField.innerText = temperature
    cityField.innerText = city;
    dateField.innerText = time;
    emojiField.src = emoji;
    weatherField.innerText = text;
}

fetchData();

