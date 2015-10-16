'use strict';
// slightly modified version of https://github.com/jquense/react-widgets-moment-localizer.git

module.exports = function(moment){
  if (typeof moment !== 'function')
    throw new TypeError('You must provide a valid moment object')

  var localField = typeof moment().locale === 'function' ? 'locale' : 'lang'
    , hasLocaleData = !!moment.localeData;

  if ( !hasLocaleData )
    throw new TypeError(
      'The Moment localizer depends on the `localeData` api, please provide a moment object v2.2.0 or higher')

  function endOfDecade(date) {
    return moment(date).add(10, 'year').add(-1, 'millisecond').toDate()
  }

  function endOfCentury(date) {
    return moment(date).add(100, 'year').add(-1, 'millisecond').toDate()
  }

  return {
    formats: {
      date: 'L',
      time: 'LT',
      'default': 'lll',
      header: 'MMMM YYYY',
      footer: 'LL',
      weekday: function(day, culture) {
        if(culture === undefined){
          culture = 'en';
        }
        return moment(day).weekday(culture).format('dd')
      },

      dayOfMonth: 'DD',
      month: 'MMM',
      year: 'YYYY',

      decade: function(date, culture, localizer) {
        if(culture === undefined){
          culture = 'en';
        }
        return localizer.format(date, 'YYYY', culture)
          + ' - ' + localizer.format(endOfDecade(date), 'YYYY', culture)
      },

      century: function(date, culture, localizer) {
        if(culture === undefined){
          culture = 'en';
        }
        return localizer.format(date, 'YYYY', culture)
          + ' - ' + localizer.format(endOfCentury(date), 'YYYY', culture)
      }
    },

    firstOfWeek: function(culture) {
      if(culture === undefined){
        culture = 'en';
      }
      return moment.localeData(culture).firstDayOfWeek()
    },

    parse: function(value, format, culture) {
      if(culture === undefined){
        culture = 'en';
      }
      return (culture ? moment(value, format)[localField](culture) : moment(value, format)).toDate()
    },

    format: function(value, format, culture) {
      if(culture === undefined){
        culture = 'en';
      }
      return (culture ? moment(value)[localField](culture): moment(value)).format(format)
    }
  }
}
