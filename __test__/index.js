process.env.MODE = "test";

const request = require("supertest");
const server = require("../server")

module.exports = {
  agent: request.agent(server)
}
