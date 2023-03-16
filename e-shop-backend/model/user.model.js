import { DataTypes } from 'sequelize';
import sequelize from './dbConfig.js';

const User = sequelize.define("user",{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    contact:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isNumeric: true
        }
    }
});
sequelize.sync()
.then(result=>{
    console.log("users table created....");
})
.catch(err=>{
    console.log(err);
});
export default User;