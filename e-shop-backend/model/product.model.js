import { DataTypes } from "sequelize";
import Category from "./category.model.js";
import sequelize from "./dbConfig.js";

const Product = sequelize.define("product",{
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.INTEGER
    },
    discountPercentage:{
        type: DataTypes.INTEGER
    },
    rating:{
        type: DataTypes.FLOAT
    },
    stock:{
        type:DataTypes.INTEGER
    },
    brand:{
        type: DataTypes.STRING
    },
    thumbnail:{
        type: DataTypes.STRING
    },
    categoryname:{
        type: DataTypes.STRING
    },
    imageArray:{
        type: DataTypes.STRING(1000)
    }
  });
  
  sequelize.sync().then(result=>{
    console.log("Product table created....");
  }).catch(err=>{
    console.log(err);
  })
  export default Product;