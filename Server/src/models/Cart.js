const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Cart" , {
        img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        giamGia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Cart;
}