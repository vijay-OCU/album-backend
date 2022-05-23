module.exports = (sequelize, Sequelize) => {
    const Artist = sequelize.define("artist", {
      name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      language: {
        type: Sequelize.STRING
      }
    });
    return Artist;
  };