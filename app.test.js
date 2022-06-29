const request = require("supertest");

let app;

const mockMorgan = jest.fn((req, res, next) => next());

beforeAll(() => {
  app = request(require("./app")());
  jest.mock("morgan", () => () => mockMorgan);
});

afterAll(() => {
  jest.unmock("morgan");
});

//needs to test the error handling of app.js
describe("errors", () => {
  it("should return 404 for an unfound page", async () => {
    console.log(process.env);
    return await app.get("/gordomramsay").expect(404);
  });
});
