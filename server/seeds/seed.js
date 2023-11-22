const db = require('../config/connection');
const { Product } = require('../models');

const productData = require('./productData.json');

db.once('open', async () => {
  await Product.deleteMany({});

  const Products = await Product.insertMany(productData);

  console.log('Products successfully seeded!');
  process.exit(0);
});
