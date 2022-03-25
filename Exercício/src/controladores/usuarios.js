const conexao = require('../conexao');
const bcrypt = require('bcrypt');
const knex = require('../conexao');

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha, nome_loja } = req.body;

    if (!nome) {
        return res.status(404).json("O campo nome é obrigatório");
    }

    if (!email) {
        return res.status(404).json("O campo email é obrigatório");
    }

    if (!senha) {
        return res.status(404).json("O campo senha é obrigatório");
    }

    if (!nome_loja) {
        return res.status(404).json("O campo nome_loja é obrigatório");
    }

    try {
        const quantidadeUsuarios = await knex('usuarios').where({ email }).first().debug();

        if (quantidadeUsuarios) {
            return res.status(400).json("O email já existe");
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const newUser = {
            nome,
            email,
            senha: senhaCriptografada,
            nome_loja
        }

        const cadastrarUsuario = await knex('usuarios').insert(newUser).returning('*');

        if (!cadastrarUsuario) {
            return res.status(400).json("O usuário não foi cadastrado.")
        }

        return res.status(200).json(cadastrarUsuario[0]);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const obterPerfil = async (req, res) => {
    return res.status(200).json(req.usuario);
}

const atualizarPerfil = async (req, res) => {
    const { nome, email, senha, nome_loja } = req.body;
    const { id } = req.usuario;

    if (!nome && !email && !senha && !nome_loja) {
        return res.status(404).json('É obrigatório informar ao menos um campo para atualização');
    }

    try {
        const userExists = await knex('usuarios').where({ id }).first();

        if (!userExists) {
            return res.status(400).json("O usuário não foi encontrado");
        }

        if (senha) {
            senha = await bcrypt.hash(senha, 10);
        }

        if (email !== req.usuario.email) {
            const userEmailExists = await knex('usuario').where({ email }).first();

            if (userEmailExists) {
                return res.status(400).json("O email ja existe");
            }
        }

        const usuarioAtualizado = await knex('usuarios').update({ nome, email, senha, nome_loja }).where({ id }).first();

        if (!usuarioAtualizado) {
            return res.status(400).json("O usuario não foi atualizado");
        }

        return res.status(200).json('Usuario foi atualizado com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    cadastrarUsuario,
    obterPerfil,
    atualizarPerfil
}