var mysql = require("mysql");
var pool = mysql.createPool({
  host: "sql6.freemysqlhosting.net",
  user: "sql6435763",
  password: "t8uN9xuuEq",
  database: "sql6435763",
  connectTimeout: 30000,
});
exports.pool = pool;
