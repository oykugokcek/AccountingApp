const knex = require("knex");
//veritabanı bağlantısını dependency injection ile yaptım
//geliştirme ve üretim için farklı veritabanı yapılandırmaları kullanabilirim
const knexfile = require("../knexfile");

// const environment = process.env.NODE_ENV || "development";

// module.exports = knex(knexFile[environment]);



const db = knex(knexfile.development);
module.exports = db;