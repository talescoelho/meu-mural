const Post = (sequelize, DataTypes) => {
  const newPost = sequelize.define('Post', {
    content: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'Posts',
  });

  newPost.associate = (model) => {
    newPost.belongsTo(model.User, { foreignKey: 'userId', as: 'User' })
  }

  newPost.associate = (model) => {
    newPost.hasMany(model.Comment, { foreignKey: 'commentId', as: 'Comments' })
  }

  return newPost;
};

module.exports = Post;