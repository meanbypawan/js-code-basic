import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";

const OrderItem = sequelize.define("orderItem",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    qty:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
});

export default OrderItem;