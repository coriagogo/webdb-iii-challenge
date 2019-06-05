
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { name: 'Cori', cohort_id: '1'},
        { name: 'Leo', cohort_id: '1' },
        { name: 'Kimberlee', cohort_id: '1' }
      ]);
    });
};
