module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        fullname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        useName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        confirmPassword: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Users.associate = (model) => {
        Users.hasMany(model.Cart, {
            onDelete: "cascade",
        });
    }
    return Users;
}