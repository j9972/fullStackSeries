module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postText: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    Posts.associate = (models) => {
      Posts.hasMany(models.Comments, {
        onDelete: "cascade",
      });
  
      Posts.hasMany(models.Likes, {
        onDelete: "cascade",
      });
    };
    return Posts;
  };

 // db 이름 Post 가 아닌 Posts라고 해야함 안하면, 다른 메소드에서 undefined가 뜨는 상황이 발생이 많아진다.