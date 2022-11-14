const Trip = require('./Trip')

test('should be normal fare', function () {
  const fare = new Trip(new Date('2018-10-10T10:00'), 1000).calculateTrip()
  expect(fare).toBe(2100)
})

test('should be sunday fare', function () {
  const fare = new Trip(new Date('2018-10-07T10:00'), 1000).calculateTrip()
  expect(fare).toBe(3000)
})

test('should be overnight fare', function () {
  const fare = new Trip(new Date('2018-10-10T23:00'), 1000).calculateTrip()
  expect(fare).toBe(3900)
})

test('should be wrong date', function () {
  expect(() => new Trip('2018-10-10T23:00', 1000).calculateTrip()).toThrow(Error)
})
