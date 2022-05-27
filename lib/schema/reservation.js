//module for parsing, validating, manipualting and formatting dates
const moment = require("moment");
//object schema validation
const Joi = require("joi");

module.exports = class Reservation {
  /**
   * Create a reservation booking request
   *
   * @param {number} party - Number of people in a party.
   * @param {string} name - Contact name.
   * @param {string} email - Contact email.
   * @param {string} date - Date in "YYYYY/MM/DD" format.
   * @param {string} time - Time in "H:mm A" format.
   * @param {string} [phone] - Contact phone.
   * @param {string} [message] - Additional details
   */
  constructor({ party, name, email, date, time, phone, message }) {
    this.party = party;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.message = Reservation.combineDateTime(date, time);
  }
};
