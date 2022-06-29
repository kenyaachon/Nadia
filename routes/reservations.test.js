const request = require("supertest");
//reduce the log output that would morgan would have provided
const mockMorgan = jest.fn((req, res, next) => next());
const mockInsert = jest.fn().mockResolvedValue([1349]);

let app;
beforeAll(() => {
  jest.mock("morgan", () => () => mockMorgan);
  jest.mock("../lib/knex", () => () => ({
    insert: mockInsert,
  }));
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

//POST route for form submissions
describe("POST", () => {
  it("should reject an invalid reservation request", async () => {
    const reservation = {
      date: "2017/06/10",
      time: "06:02 AM",
      party: 4,
      name: "Family",
      email: "username",
    };
    const response = await app
      .post("/reservations")
      .type("form")
      .send(reservation);

    expect(response.text).toContain(
      "Sorry, there was a problem with your booking request"
    );
    expect(response.status).toBe(400);
  });

  it("should resolve a valid reservation request", async () => {
    const reservation = {
      date: "2017/06/10",
      time: "06:02 AM",
      party: 4,
      name: "Family",
      email: "swahili1963@email.com",
    };
    const response = await app
      .post("/reservations")
      .type("form")
      .send(reservation)
      .expect(200);

    expect(response.text).toContain("Thanks, your booking request #1349");
  });
});
