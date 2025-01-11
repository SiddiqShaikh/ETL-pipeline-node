const transformCountryData = (country) => ({
  name: country.name.official,
  commonName: country.name.common,
  capital: country.capital || [],
  region: country.region,
  subregion: country.subregion,
  population: country.population,
  area: country.area,
  languages: country.languages || {},
  currencies: country.currencies || {},
  borders: country.borders || [],
  flag: country.flags.png,
});

module.exports = {
  transformCountryData,
};