/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('auth_code', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    good: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    can_com: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'auth_code'
  });

  Model.associate = function() {

  }

  return Model;
};
