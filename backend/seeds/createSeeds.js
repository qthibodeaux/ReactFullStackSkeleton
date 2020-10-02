
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('generic').del()
    .then(function () {
      // Inserts seed entries
      return knex('generic').insert([
        {id: 1, fname: 'Pat', number: '15'},
        {id: 2, fname: 'Lamar', number: '8'},
        {id: 3, fname: 'Deshaun', number: '4'}
      ]);
    });
};
