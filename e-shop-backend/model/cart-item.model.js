import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";

const CartItem = sequelize.define("cartItem",{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }
});

sequelize.sync().then(result=>{
    console.log("CartItem created....");
}).catch(err=>{
    console.log(err);
})
export default CartItem;
