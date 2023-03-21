import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";

const Cart = sequelize.define("cart",{
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    }
});
sequelize.sync()
.then(()=>{
    console.log("Cart table created...");
}).catch(err=>{
    console.log(err);
})
export default Cart;