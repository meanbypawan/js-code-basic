import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";

const Cart = sequelize.define("cart",{
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    productId:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
});
sequelize.sync()
.then(()=>{
    console.log("Cart table created...");
}).catch(err=>{
    console.log(err);
})
export default Cart;