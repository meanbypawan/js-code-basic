import mysql from "mysql2";

// meta-object
let pool = mysql.createPool({
    connectionLimit: 100,
    user: "root",
    password: "",
    database: "shoesmall",
    host: "localhost"
});

export default pool;