const User = (sequelize, DataTypes) => {
  const newUser = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'Users',
  });

  newUser.associate = (model) => {
    newUser.hasMany(model.Post,
      { foreignKey: 'postId', as: 'Posts' })
  }

  newUser.associate = (model) => {
    newUser.hasMany(model.Comment,
      { foreignKey: 'commentId', as: 'Comments' })
  }

  return newUser;
};

module.exports = User;