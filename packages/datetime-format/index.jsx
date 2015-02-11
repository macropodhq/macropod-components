const moment = require('moment');

function DateFormatter(format) {
  return (date, custom) => moment(date).format(custom || format);
}

module.exports = {
  date: DateFormatter('D MMM YYYY'),
  dateTime: DateFormatter('D MMM YYYY h:mm A'),
  time: DateFormatter('h:mm A'),
  custom: DateFormatter('LLLL')
};
