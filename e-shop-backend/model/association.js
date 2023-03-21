import CartItem from "./cart-item.model.js";
import Cart from "./cart.model.js";
import Category from "./category.model.js";
import OrderItem from "./order-item.model.js";
import Order from "./order.model.js";
import Product from "./product.model.js";
import User from "./user.model.js";

Category.hasMany(Product,{
    foreignKey: "categoryname"
});

Product.belongsTo(Category,{
    foreignKey: "categoryname", targetKey: "categoryName"
});

User.hasOne(Cart,{foreignKey: "userId"});
Cart.belongsTo(User,{foreignKey:"userId", targetKey:"id"});

Cart.belongsToMany(Product,{through: CartItem});
Product.belongsToMany(Cart,{through: CartItem});

User.hasMany(Order);
Order.belongsTo(User);

Order.belongsToMany(Product,{through: OrderItem});
Product.belongsToMany(Order,{through: OrderItem});

export {Category, Product,Cart,Order,OrderItem,CartItem};