const OVERNIGHT_START = 22
const OVERNIGHT_END = 6
const OVERNIGHT_FARE = 3.9
const SUNDAY_FARE = 3
const NORMAL_FARE = 2.1

const isOvernight = function (date) {
  return date.getHours() > OVERNIGHT_START || date.getHours() < OVERNIGHT_END
}

const isSunday = function (date) {
  return date.getDay() === 0
}

exports.calculateTrip = function (date, distance) {
  if (date instanceof Date) {
    if (isOvernight(date)) {
      return distance * OVERNIGHT_FARE
    } else {
      if (isSunday(date)) {
        return distance * SUNDAY_FARE
      } else {
        return distance * NORMAL_FARE
      }
    }
  } else {
    return -1
  }
}
