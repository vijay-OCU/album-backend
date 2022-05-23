module.exports = (sequelize, Sequelize) => {
    const Album = sequelize.define("album", {
      title: {
        type: Sequelize.STRING
      },
      language: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      }
    });
    return Album;
  };