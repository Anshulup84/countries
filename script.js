const countriesContainer = document.querySelector(".countries-container");
const filterByRegion = document.querySelector(".filter-by-region");
const searchInput = document.querySelector(".search-container input")
const themeChanger = document.querySelector(".theme-changer")

let allCountriesData

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    renderCountries(data)
    allCountriesData = data
  });

  filterByRegion.addEventListener('change', (e) => {
    fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
  .then((res) => res.json())
  .then(renderCountries)
  })

  function renderCountries(data) {
    countriesContainer.innerHTML = ''
    data.forEach((country) => {
      console.log(country);

      const countryCard = document.createElement("a");
      countryCard.classList.add("country-card");
      countryCard.href = `./country.html?name=${country.name.common}`;

      countryCard.innerHTML = `
                        <img src="${country.flags.svg}" alt="${country.name.common} Flag">
                        <div class="card-text">
                            <h3 class="card-title">${country.name.common}</h3>
                            <p><b>Population: </b>${country.population.toLocaleString(
                              "en-IN"
                            )}</p>
                            <p><b>Region: </b>${country.region}</p>
                            <p><b>Capital: </b>${country.capital}</p>
                        </div>
                       
                    `;

      countriesContainer.append(countryCard);
    });
  }

  searchInput.addEventListener('input', (e) => {
   const filteredCountries = allCountriesData.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
    renderCountries(filteredCountries)
  })


const toggleTheme = () => {
  document.body.classList.toggle("dark");

 
  const isDarkMode = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDarkMode);


  updateThemeButton(isDarkMode);
};


const updateThemeButton = (isDark) => {
  if (isDark) {
      themeChanger.innerHTML = '<i class="fa-solid fa-sun"></i>&nbsp;&nbsp;Light Mode';
  } else {
      themeChanger.innerHTML = '<i class="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode';
  }
};

themeChanger.addEventListener("click", toggleTheme);

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
}

updateThemeButton(document.body.classList.contains("dark"));
