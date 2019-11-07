const db = require((process.env.MODE === "test" ? "../../__test__/data/" : "") + "./db");

module.exports = db;
