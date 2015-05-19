const fecha = require('fecha');

function DateFormatter(format) {
  return date => fecha.format(new Date(date), format);
}

module.exports = {
  date: DateFormatter('D MMM YYYY'),
  dateTime: DateFormatter('D MMM YYYY h:mm A'),
  time: DateFormatter('h:mm A'),
  custom: (date, format) => DateFormatter(format)(date),
};
