const taximeter = require('./taximeter')

test('should be normal fare', function () {
  const fare = taximeter.calculateTrip(new Date('2018-10-10T10:00'), 1000)
  expect(fare).toBe(2100)
})

test('should be sunday fare', function () {
  const fare = taximeter.calculateTrip(new Date('2018-10-07T10:00'), 1000)
  expect(fare).toBe(3000)
})

test('should be overnight fare', function () {
  const fare = taximeter.calculateTrip(new Date('2018-10-10T23:00'), 1000)
  expect(fare).toBe(3900)
})

test('should be wrong date', function () {
  const fare = taximeter.calculateTrip('2018-10-10T23:00', 1000)
  expect(fare).toBe(-1)
})
