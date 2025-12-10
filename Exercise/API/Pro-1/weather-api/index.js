        const btn = document.querySelector('.search-btn')
        const input = document.querySelector(".search-text");
        const locationName = document.querySelector(".location-name");
        const locationTime = document.querySelector(".location-time");
        const temperature = document.querySelector(".temperature");
        const condition = document.querySelector(".condition");
        const feels = document.querySelector(".feels-val");
        const humidity = document.querySelector(".humidity-val");
        const wind = document.querySelector(".wind-val");
        const pressure = document.querySelector(".pressure-val");
        const uv = document.querySelector(".uv-val");
        const visibility = document.querySelector(".visibility-val");
        const aqi = document.querySelector(".aqi-val");
        const error = document.querySelector("#error-msg");
        const loading = document.querySelector("#loading");
        const dashboard = document.querySelector(".weather-dashboard");
        const img = document.querySelector(".weather-icon");


        function main(data){
            dashboard.style.display = "block"
            img.setAttribute("src", data.current.condition.icon);
            locationName.textContent = data.location.region;
            locationTime.textContent = data.location.localtime;
            temperature.textContent = data.current.temp_c;
            condition.textContent = data.current.condition.text;
            feels.textContent = data.current.feelslike_c;
            humidity.textContent = data.current.humidity;
            wind.textContent = data.current.wind_kph;
            pressure.textContent = data.current.pressure_mb;
            uv.textContent = data.current.uv;
            visibility.textContent = data.current.vis_km;
            aqi.textContent = data.current.air_quality.pm2_5;
            input.value ="";
            
        };

        function loadpara() {
            fetch(`http://api.weatherapi.com/v1/current.json?key=ecc0afd60926431482262246250912&q=${input.value}&aqi=yes`)
            .then((response) => response.json())
                .then((data) => {
                     loading.style.display ="block"
                    console.log("dashratsingh rajpurohit "+data);
                    setTimeout(()=>{
                        loading.style.display ="none"
                        main(data)
                    },2000);
                    
                })
           
        }        
        btn.addEventListener('click',loadpara); 