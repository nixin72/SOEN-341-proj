const { agent } = require("../../")
let db = require("../../data/db.json")


describe("GET /messages", () => {
  it("sends a 200 status", async () => {
    const res = await agent.get("/messages");
    expect(res.status).toBe(200)
  })

  it("receives a list of messages from a channel", async () => {
    const res = await agent.get("/messages?channel=1");
    expect(Object.keys(res.body)).toHaveLength(2);
  })
})

describe("POST /messages", () => {
  it("sends a 200 status on success", async () => {
    const res = await agent.post("/messages").send({
      channel: 1, sender: 1, timestamp: 11111111111, body: "test"
    });

    expect(res.status).toBe(200);
    expect(res.body.pass).toBe("success");
  })

  it("sends a 400 status on failure", async () => {
    const res = await agent.post("/messages").send({
      channel: 1, sender: 1
    });

    expect(res.status).toBe(400);
    expect(res.body.fail).not.toBe(undefined);
  })

  it("creates a new message object", async () => {
    const res = await agent.post("/messages").send({
      channel: 1, sender: 1, timestamp: 11111111111, body: "test"
    });

    expect(db.messages[1][11111111111]).not.toBe(undefined);
  })
})

describe("GET /messages/pins", () => {
  it("sends a 200 status on success", async () => {
    const res = await agent.get("/messages/pins?channel=1");
    expect(res.status).toBe(200)
  })

  it("sends back all the pinned messages", async () => {
    const res = await agent.get("/messages/pins?channel=1");
    expect(Object.keys(res.body)).toHaveLength(1)
  })

  it("sends a 400 status when invalid channel is sent", async () => {
    const res = await agent.get("/messages/pins?channel=2");
    expect(res.status).toBe(400)
  })

  it("sends a 400 status when no channel is sent", async () => {
    const res = await agent.get("/messages/pins");
    expect(res.status).toBe(400)
  })
})

describe("POST /messages/pins", () => {
  beforeEach(() => {
    db = require("../../data/db.json")
  });

  it("sends a 200 status on success", async () => {
    const res = await agent.post("/messages/pins").send({
      channel: 1, message: "1572546578219"
    });

    expect(res.status).toBe(200);
  })

  it("Adds the message ID to the channel's pins", async () => {
    const res = await agent.post("/messages/pins").send({
      channel: 1, message: "1572546578219"
    });

    expect(res.status).toBe(200);
    expect(db.pinned[1]).toHaveLength(3);
  })

  it("sends a 400 response on failure", async () => {
    const res = await agent.post("/messages/pins").send({
      channel: 9, message: "1572546578219"
    });

    expect(res.status).toBe(400);
  })
})
