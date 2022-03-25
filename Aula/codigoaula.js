//Equivalente: conexao.query('select * from agenda');
// const agenda = await knex.raw('select * from agenda');  //Query bruta
// const agenda = await knex('agenda').where('id', 5).debug();
// const agenda = await knex('agenda').where('id', '!=', 5).debug();
// const agenda = await knex('agenda').where({ id: 5 }).debug();
// const agenda = await knex('agenda').where({ id: 1, nome: 'Melinda Wynn' }).debug();
// const agenda = await knex('agenda').where({ id: 5 }).first().debug();
// const agenda = await knex('agenda').where({ id: 5 }).select('id', 'nome').first().debug();

// const agenda = await knex('agenda').whereNull('email').debug();
// const agenda = await knex('agenda').whereNotNull('email').debug();
// const agenda = await knex('agenda').whereBetween('id', [5, 10]).debug();
// const agenda = await knex('agenda').whereBetween('id', [5, 10]).orderBy('id', 'desc').debug();
// const agenda = await knex('agenda').distinct('email').debug();

// const agenda = await knex('agenda').select('email').groupBy('email').debug();
// const agenda = await knex('agenda').select('email').groupBy('email').count().debug();
// const agenda = await knex('agenda').limit(5).debug();
// const agenda = await knex('agenda').limit(5).offset('2').debug();

// const agenda = await knex('agenda').whereNull('email').count().debug();
// const agenda = await knex('agenda').whereNull('email').sum('id').debug();
// const agenda = await knex('agenda').whereNull('email').avg('id').debug();
// const agenda = await knex('agenda').whereNull('email').min('id').debug();
// const agenda = await knex('agenda').whereNull('email').max('id').debug();


//return res.json(agenda);



  // const farmacia = await knex('farmacia').count().debug();
  // const usuarios = await knex('usuarios').min('idade').debug();
  // const farmacia = await knex('farmacia').select('categoria').sum('estoque').whereNotNull('categoria').groupBy('categoria').debug();
  // const farmacia = await knex('farmacia').select('categoria').sum('estoque').whereNull('categoria').groupBy('categoria').debug();
  // const farmacia = await knex('farmacia').select('categoria').count().whereNotNull('categoria').groupBy('categoria').debug();
  // const usuarios = await knex('usuarios').select('idade').count().where('idade', '>=', 18).groupBy('idade').debug();

  // return res.json(farmacia);