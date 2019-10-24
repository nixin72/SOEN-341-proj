const messages = require((process.env.MODE === "test" ? "../../__test__/data/" : "") + "./messages");

module.exports = { messages };
