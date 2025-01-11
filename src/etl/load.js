const prisma = require('../config/database');

const loadCountriesData = async (transformedData) => {
  try {
    await prisma.$transaction([
      prisma.country.deleteMany(),
      prisma.country.createMany({
        data: transformedData,
      }),
    ]);
    console.log('Data loaded successfully');
  } catch (error) {
    console.error('Error loading data:', error);
    throw error;
  }
};

module.exports = {
  loadCountriesData,
};