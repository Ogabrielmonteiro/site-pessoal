module.exports = {
  production: {
    username: 'Gabriel',
    password: '#Gf51136873830',
    database: 'bdSite',
    host: 'serverthelastofus.database.windows.net',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};
 
