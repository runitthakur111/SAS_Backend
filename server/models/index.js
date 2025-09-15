const { Sequelize } = require('sequelize');

// Initialize Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
  }
);

// Test connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connected to MySQL database');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
});

module.exports = { sequelize };
