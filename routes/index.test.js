const request = require("supertest");

const mockMorgan = jest.fn((req, res, next) => next());
let app;
beforeAll(() => {
  jest.mock("morgan", () => () => mockMorgan);
  // jest.mock("./", () => require("./index"));
  app = request(require("../app")());
});

afterAll(() => {
  jest.unmock("morgan");
  // jest.unmock("./");
});

describe("GET", () => {
  it("should return the  Nadia's home page", async () => {
    const response = await app
      .get("/")
      .expect("Content-Type", /html/)
      .expect(200);

    expect(response.text).toContain("Nadia's");
  });
});

describe("DELETE", () => {
  it("should reject deletion of home page", async () => {
    return await app.delete("/").expect(500);
  });
});
