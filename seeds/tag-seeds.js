// Bring in Tag model
const { Tag } = require('../models');

// Tag seeds data
const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

// Function to bulk create data in Tag table using seed data
const seedTags = () => Tag.bulkCreate(tagData);

// export function to use in index.js seeds file
module.exports = seedTags;
