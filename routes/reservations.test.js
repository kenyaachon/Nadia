const request = require("supertest");
//reduce the log output that would morgan would have provided
const mockMorgan = jest.fn((req, res, next) => next());

let app;
beforeAll(() => {
  jest.mock("morgan", () => () => mockMorgan);
  app = request(require("../app")());
});

afterAll(() => {
  jest.unmock("morgan");
});

//GET route
describe("GET", () => {
  it("should return the reservation form", async () => {
    const response = await app
      .get("/reservations")
      .expect("Content-Type", /html/)
      .expect(200);

    expect(response.text).toContain(
      "To make reservations please fill out the following form"
    );
  });
});

//POST route
describe("POST", () => {
  console.log;
});
