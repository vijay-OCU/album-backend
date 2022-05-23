module.exports = (sequelize, Sequelize) => {
  const album = sequelize.define("albums", {
    title: {
      type: Sequelize.STRING
    },
    language: {
      type: Sequelize.STRING
    },
    genre: {
      type: Sequelize.BOOLEAN
    }
  });
  return album;
};