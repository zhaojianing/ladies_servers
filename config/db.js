const Sequelize = require('sequelize');

const sequelize = new Sequelize('ladies', 'root', 'Zjn8752*', {
    host: '39.106.198.0',
    dialect: 'mysql',
    operatorsAliases: false,
    dialectOptions: {
        // 字符集
        charset: "utf8mb4",
        // collate: "utf8mb4_unicode_ci",
        supportBigNumbers: true,
        bigNumberStrings: true
    },

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00' //东八时区
});

// 测试链接 log
sequelize
  .authenticate()
  .then(() => {
    console.log('mysql start!');
  })
  .catch(err => {
    console.error('mysql error:', err);
  });

module.exports = {
    sequelize
}
