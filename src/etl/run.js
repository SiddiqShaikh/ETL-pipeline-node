const { extractCountriesData } = require('./extract');
const { transformCountryData } = require('./transform');
const { loadCountriesData } = require('./load');
const cron = require('node-cron');

const runETL = async () => {
  try {
    console.log('Starting ETL process...');
    const rawData = await extractCountriesData();
    const transformedData = rawData.map(transformCountryData);
    await loadCountriesData(transformedData);
    console.log('ETL process completed successfully');
  } catch (error) {
    console.error('ETL process failed:', error);
  }
};

// Run ETL every day at midnight
cron.schedule('0 0 * * *', runETL);

// Run immediately on startup
runETL();

module.exports = { runETL };