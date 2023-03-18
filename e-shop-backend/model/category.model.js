import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";
import Product from "./product.model.js";

const Category = sequelize.define("category",{
    categoryName:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true        
    }
},{
    timestamps: false
});
sequelize.sync().then(()=>{
    console.log("categories table created...");
}).catch(err=>{
    console.log(err);
});
export default Category;