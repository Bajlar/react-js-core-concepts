const loadCountries = () => {
  const url = "https://restcountries.com/v3.1/all";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayShowCountries(data));
};

const displayShowCountries = (countries) => {
  const allCountriesHTML = countries.map((country) => getCountryHTML(country));

  const countriesContainer = document.getElementById("countries-container");
  countriesContainer.innerHTML = allCountriesHTML.join(" ");
};

const getCountryHTML = (country) => {
  const { flags, name, population, area, cca2 } = country;
  return `
    <div class='border-2 border-gray-500 p-4'>
      <img src='${flags?.png}' />
      <h2 class='mt-4 text-2xl font-bold'>${name?.common}</h2>
      <p><strong>Population:</strong> ${population}</p>
      <p><strong>Area:</strong> ${area}</p>
      <button onclick="countryDetails('${cca2}')" class="bg-sky-500 hover:bg-sky-800 py-2 px-8 rounded-lg text-white font-bold mt-4">Details</button>
    </div>
  `;
};

const countryDetails = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showDetails(data[0]));
};

const showDetails = ({ flags, population, area, name }) => {
  // const { flags, population, area } = code;
  const details = document.getElementById("details");
  details.innerHTML = `
    <div class="border-4 border-orange-500 p-4 rounded-md">
      <img class='border-2 p-2 mb-4 h-36 w-64' src='${flags?.png}' />
      <div class="text-center">
        <p class="text-lg"><strong>Name:</strong> ${name?.common}</p>
        <p><strong>Population:</strong> ${population}</p>
        <p><strong>Area:</strong> ${area}</p>
      </div>
    </div>
  `;
};

loadCountries();
