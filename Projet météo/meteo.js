            // Récupération des données météo depuis l'API
            function fetchWeatherData() {

                const APIKEY = '0ec30594a224ae009316540b9ca1b8a4';

                let url = `https://api.openweathermap.org/data/2.5/weather?q=Niort&appid=${APIKEY}&units=metric&lang=fr`;



                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        //données météo dans la console pour déboguer
                        console.log(data);


                        //interface d'affichage des données météo
                        displayWeatherData(data);

                    })
            }


            function displayWeatherData(data) {
                //informations météo dans #weather-container
                const weatherContainer = document.getElementById('weather-container');
                console.log()
                document.querySelector('#city').innerHTML = data.name
                document.querySelector('#temp').innerHTML = data.main.temp + "C°"
                document.querySelector('#humidity').innerHTML = data.main.humidity + "%"
                document.querySelector('#wind').innerHTML = data.wind.speed + "m/s"
            }

            //Fonction fetchWeatherData au chargement de la page
            document.addEventListener('DOMContentLoaded', fetchWeatherData)

            //Les données météo une fois par heure sont à jour
            setInterval(fetchWeatherData, 3600000); // 3600000 ms = 1 heure