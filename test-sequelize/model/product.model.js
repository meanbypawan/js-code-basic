import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";

const Product = sequelize.define("product",{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            isNumeric: true
        }
    },
    stock:{
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
});

sequelize.sync()
.then(()=>{
    console.log("products table created...");
})
.catch(err=>{
    console.log(err);
})

export default Product;
/*
  Sequelize truns this Product model in Product class
  and It also provide interface to interact with the database
  Here interface means Built-in methods to perform database operation
  create()
  findByPk()
  findOne()
  findAll()
*/
