module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define("Product", {
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
        price: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Product.associate = (models) => {
        Product.hasMany(models.Comment, {
            onDelete: "cascade",
        });
    };

    return Product;
}