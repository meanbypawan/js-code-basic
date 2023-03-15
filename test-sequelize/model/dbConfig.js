import { Sequelize } from "sequelize";

const sequelize = new Sequelize('testsql','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(()=>{
    console.log("Database connected...");
}).catch(err=>{
    console.log(err);
})

export default sequelize;

