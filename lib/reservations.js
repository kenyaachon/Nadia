/**
 *
 * Retrieve reservations.
 * @return {Promise<Array>} Reservations
 */
function fetch() {
  return "";
}

/**
 *
 * Create a reservation; performs validation
 * @param {Reservation} reservation -  a new reservation request
 * @return {Promise<number>} Newly creted reservation ID
 */
function create(reservation) {
  return 0;
}

/**
 * Save a reservation to the database
 *
 * @param {Reservation} reservation - A reservation request
 * @return {Promise<Array>} Insert ID.
 */
function save(reservation) {
  return "";
}

/**
 *
 * Validat a reservation
 *
 * @param {Reservation} reservation - A reservation request
 * @return {Promise<Reservation>} Validate reservation.
 */
function validate(reservation) {
  return "";
}

module.exports = {
  create,
  fetch,
  save,
  validate,
};
