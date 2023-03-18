import Cart from "./cart.model.js";
import Category from "./category.model.js";
import Product from "./product.model.js";
import User from "./user.model.js";

Category.hasMany(Product,{
    foreignKey: "categoryname"
});
Product.belongsTo(Category,{
    foreignKey: "categoryname", targetKey: "categoryName"
});
User.hasMany(Cart,{
  foreignKey: "userId"
});
Cart.belongsTo(User,{
    foreignKey: "userId", targetKey: "id"
});

Product.hasMany(Cart,{
    foreignKey: "productId"
});
Cart.belongsTo(Product,{
    foreignKey: "productId", targetKey: "id"
});
export {Category, Product,Cart};