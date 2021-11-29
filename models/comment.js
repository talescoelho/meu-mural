const Comment = (sequelize, DataTypes) => {
  const newComment = sequelize.define('Comment', {
    comment: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'Comments',
  });

  newComment.associate = (model) => {
    newComment.belongsTo(model.User, { foreignKey: 'userId', as: 'User' })
  }

  newComment.associate = (model) => {
    newComment.belongsTo(model.Post, { foreignKey: 'postId', as: 'Post' })
  }

  return newComment;
};

module.exports = Comment;