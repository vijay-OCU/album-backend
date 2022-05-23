const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.lessons = require("./lesson.model.js")(sequelize, Sequelize);
db.artists = require("./artist.model.js")(sequelize, Sequelize);
db.albums = require("./album.model.js")(sequelize, Sequelize);

db.artists.hasMany(db.albums, {
  as: 'album'
});
db.albums.belongsTo(db.artists, {
  foreignKey: 'artistId', as: 'artist',
});

db.tutorials.hasMany(db.lessons, {
  as: 'lesson'
});
db.lessons.belongsTo(db.tutorials, {
  foreignKey: 'tutorialId', as: 'tutorial',
});

module.exports = db;