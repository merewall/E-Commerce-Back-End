// Bring in Category model
const { Category } = require('../models');

// Seed data for categories
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

// Bulk create categories for seed data in Category table
const seedCategories = () => Category.bulkCreate(categoryData);

// export the function to use in the index.js file of seeds
module.exports = seedCategories;
