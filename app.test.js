const request = require("supertest");

let app;

const mockMorgan = jest.fn((req, res, next) => next());

//needs to test the error handling of app.js
describe("errors", () => {
  beforeAll(() => {
    jest.mock("morgan", () => () => mockMorgan);
    jest.mock("./routes", () => (req, res, next) => next());
    app = request(require("./app")());
  });

  beforeEach(() => {
    jest.resetModules();
  });

  afterAll(() => {
    jest.unmock("morgan");
    jest.unmock("./routes");
  });
  it("should return 404 for an unfound page", async () => {
    return await app.get("/gordomramsay").expect(404);
  });
});
