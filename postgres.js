const pg        = require('pg');

connection = new pg.Client({
    user: "mvenfaufodylsj",
    password: "4e96bab82d504e8f5b08c6c7c0d27d12a44bec48088b8fd941c5a5d93c58a2c8",
    database: "d5tf3glocdribb",
    port: 5432,
    host: "ec2-184-73-181-132.compute-1.amazonaws.com",
    ssl: true
});

connection.connect();

console.log('Database connected successfully');