/**
 *
 * @param {Date} date
 */
function dateFormat(date) {
  return Intl.DateTimeFormat("pt-BR", { dateStyle: "long" }).format(date);
}
