/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define("post", {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.TIME,
      allowNull: true
    },
    created_at: {
      type: DataTypes.TIME,
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.TIME,
      allowNull: true
    },
    author_name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    category: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: "post"
  });

  Model.associate = function() {

  };

  return Model;
};
