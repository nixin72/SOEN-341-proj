const messages = require("../../data/messages.json")
const { agent } = require("../../")

describe("GET /messages", () => {
  it("sends a 200 status", async () => {
    const res = await agent.get("/messages");
    expect(res.status).toBe(200)
  })

  it("receives a list of messages from a channel", async () => {
    const res = await agent.get("/messages?channel=test");
    expect(Object.keys(res.body)).toHaveLength(2);
  })
})

describe("POST /messages", () => {
  it("sends a 200 status on success", async () => {

  })

  it("sends a 400 status on failure", async () => {

  })

  it("creates a new message object", async () => {

  })
})
