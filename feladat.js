async function fetchCountryInfo(countryCode) {
    let response = await fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`);
    return await response.json()

}

fetchCountryInfo("hun").then(data => console.log(data))
fetchCountryInfo("col").then(data => console.log(data))
fetchCountryInfo("aut").then(data => console.log(data))