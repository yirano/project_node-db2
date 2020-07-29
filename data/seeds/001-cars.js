
exports.seed = async function (knex) {
  await knex('car-dealer').insert([
    { VIN: '235242etasera3', make: 'Honda', model: 'Accord', mileage: 1434 },
    { VIN: 'haoukhkjh455', make: 'Toyota', model: 'Camry', mileage: 45345 },
    { VIN: '45srtrt445', make: 'Hyundai', model: 'Sonata', mileage: 423565 }
  ])
}
