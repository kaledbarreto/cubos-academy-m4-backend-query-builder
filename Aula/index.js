const express = require('express');
const knex = require('./conexao');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  // const maria = {
  //   nome: 'Maria',
  //   email: 'maria@gmail.com',
  //   telefone: '(99) 99999-9999'
  // }

  // const joao = {
  //   nome: 'Joao',
  //   email: 'joao@gmail.com',
  //   telefone: '(99) 99999-9999'
  // }

  const agenda = await knex('agenda');
  return res.json(agenda);
});

app.put('/:id', async (req, res) => {
  const { nome, email, telefone } = req.body;
  const { id } = req.params;

  const agendaAtualizada = await knex('agenda').update({ nome, email, telefone }).where({ id }).returning('*');
  return res.json(agendaAtualizada);
});

app.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const agendaExcluida = await knex('agenda').delete().where({ id });
  return res.json(agendaExcluida);
});

app.post('/:id/anotacoes', async (req, res) => {
  const { id } = req.params;
  const { nota } = req.body;

  const anotacao = await knex('anotacoes')
    .insert({
      agenda_id: id,
      nota
    })
    .returning('*');
  return res.json(anotacao);
});

app.listen(3000);