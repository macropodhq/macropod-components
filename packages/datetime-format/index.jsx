const fecha = require('fecha');

function DateFormatter(format) {
  return (date, custom) => fecha.format(new Date(date), custom || format);
}

module.exports = {
  date: DateFormatter('D MMM YYYY'),
  dateTime: DateFormatter('D MMM YYYY h:mm A'),
  time: DateFormatter('h:mm A'),
  custom: DateFormatter('LLLL')
};
