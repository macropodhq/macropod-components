export
  return {
    formats: {
      date: 'L',
      time: 'LT',
      'default': 'lll',
      header: 'MMMM YYYY',
      footer: 'LL',
      weekday: function(day, culture) {

        return moment()[localField](culture).weekday(day).format('dd')
      },

      dayOfMonth: 'DD',
      month: 'MMM',
      year: 'YYYY',

      decade: function(date, culture, localizer) {
        return localizer.format(date, 'YYYY', culture)
          + ' - ' + localizer.format(endOfDecade(date), 'YYYY', culture)
      },

      century: function(date, culture, localizer) {
        return localizer.format(date, 'YYYY', culture)
          + ' - ' + localizer.format(endOfCentury(date), 'YYYY', culture)
      }
    },

    firstOfWeek: function(culture) {
      return moment.localeData(culture).firstDayOfWeek()
    },

    parse: function(value, format, culture) {
      return (culture ? moment(value, format)[localField](culture) : moment(value, format)).toDate()
    },

    format: function(value, format, culture) {
      return (culture ? moment(value)[localField](culture): moment(value)).format(format)
    }
  }
}
