import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "blog",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});
