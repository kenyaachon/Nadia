const request = require("supertest");

const mockMorgan = jest.fn((req, res, next) => next());
const mockFetch = jest.fn().mockResolvedValue([]);

let app;
beforeAll(() => {
  jest.mock("morgan", () => () => mockMorgan);

  //mock fetching data from the database
  jest.mock("../lib/knex", () => ({ select: () => ({ table: mockFetch }) }));
  jest.mock("./", () => require("./admin"));
  app = request(require("../app")());
});

afterAll(() => {
  jest.unmock("morgan");
  jest.unmock("./");
});

//admin page
describe("GET", () => {
  it("should render admin page", async () => {
    return await app.get("/admin").auth("admin", "admin").expect(200);
  });
  it("should reject admin page access without password", async () => {
    return await app.get("/admin").expect(401);
  });
});
