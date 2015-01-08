var moment = require('moment');

function DateFormatter(format, custom) {
  return function(date, custom) {
    return moment(date).format(custom || format);
  };
}

module.exports = {
  date: DateFormatter('D MMM YYYY'),
  dateTime: DateFormatter('D MMM YYYY h:mm A'),
  time: DateFormatter('h:mm A'),
  custom: DateFormatter('LLLL')
};