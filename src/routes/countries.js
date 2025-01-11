const express = require('express');
const prisma = require('../config/database');
const router = express.Router();

// Get all countries with pagination and filtering
router.get('/', async (req, res) => { 
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    const filter = {};
    if (req.query.region) {
      filter.region = req.query.region;
    }
    if (req.query.name) {
      filter.name = { contains: req.query.name, mode: 'insensitive' };
    }

    const [countries, total] = await Promise.all([
      prisma.country.findMany({
        where: filter,
        skip,
        take: limit,
        orderBy: { name: 'asc' },
      }),
      prisma.country.count({ where: filter }),
    ]);

    res.json({
      data: countries,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch countries' });
  }
});

module.exports = router;