  const sBtn = document.querySelector(".btn");
        const eBtn = document.querySelector(".btn2");
        const h1 = document.querySelector("h1")
        const div = document.querySelector(".main")

        let id = null;

        function RGB() {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            return `rgb(${r}, ${g}, ${b})`;
        }


        function loadColour(){
            fetch('https://api.chucknorris.io/jokes/random')
            .then((responce)=>responce.json())
            .then((data)=>{
                h1.textContent = data.value;
                h1.style.color = RGB();
                div.innerHTML = `<img src="${data.icon_url}"><img src="${data.icon_url}"><img src="${data.icon_url}"><img src="${data.icon_url}"><img src="${data.icon_url}"><img src="${data.icon_url}"><img src="${data.icon_url}">`;

            })
        }

        sBtn.addEventListener('click',()=>{
           id = setInterval (loadColour,2000)
        });
        eBtn.addEventListener('click', ()=>{
            clearInterval(id);
            h1.style.color = "black";
        })
