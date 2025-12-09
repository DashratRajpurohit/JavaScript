        var btn = document.querySelector('.btn')
        const para = document.querySelector(".para");
        const input = document.querySelector(".text");
        const img = document.querySelector("img");


        function loadpara() {
            fetch(`http://api.weatherapi.com/v1/current.json?key=ecc0afd60926431482262246250912&q=${input.value}&aqi=yes`)
            .then((response) => response.json())
                .then((data) => {
                    console.log("dashratsingh rajpurohit "+data);
                    img.setAttribute("src", data.current.condition.icon);
                    para.textContent = data.location.region;
                    para.style.color = "red";
                })
           
        }        
        btn.addEventListener('click',loadpara); 