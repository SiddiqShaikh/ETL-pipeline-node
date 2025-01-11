const { extractCountriesData } = require('../src/etl/extract');
const { transformCountryData } = require('../src/etl/transform');
const { loadCountriesData } = require('../src/etl/load');

describe('ETL Pipeline', () => {
  test('extractCountriesData should fetch data from API', async () => {
    const data = await extractCountriesData();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
  });

  test('transformCountryData should properly transform country data', () => {
    const mockCountry = {
      name: { official: 'Test Country', common: 'Test' },
      capital: ['TestCity'],
      region: 'TestRegion',
      subregion: 'TestSubregion',
      population: 1000000,
      area: 1000,
      languages: { eng: 'English' },
      currencies: { USD: { name: 'US Dollar' } },
      borders: ['TEST1', 'TEST2'],
      flags: { png: 'https://test.com/flag.png' },
    };

    const transformed = transformCountryData(mockCountry);
    expect(transformed).toHaveProperty('name', 'Test Country');
    expect(transformed).toHaveProperty('commonName', 'Test');
    expect(transformed.capital).toEqual(['TestCity']);
  });
});