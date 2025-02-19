// fetch('https://restcountries.com/v3.1/all').then((res) => res.json())
// .then((data) => {
//     data.forEach(country => {
//         console.log(country);

//     });

// })

const countriesContainer = document.querySelector('.countries-container')

const countryCard = document.createElement("a");
countryCard.classList.add("countrycard");



const cardHTML = `<a href="#" class="country-card">
                <img src="https://flagcdn.com/gs.svg" alt="flag">
                <div class="card-text">
                    <h3 class="card-title">britain</h3>
                    <p><b>Population: </b>81,770,900</p>
                    <p><b>Region: </b>Europe</p>
                    <p><b>Capital: </b>Berlin</p>
                </div>
               
            </a>`;

countryCard.innerHTML = cardHTML;

countriesContainer.append(countryCard)
