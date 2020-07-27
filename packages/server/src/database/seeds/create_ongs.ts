import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('ONGS').delete()
    await knex('ONGS').insert([
        { idOng:'abc123', name: 'AJAPRA', email: 'ajapra@gmail.com', password: '123', city: 'Jaragua', uf: 'SC'},
        { idOng:'abc124', name: 'Gangue Patinhas', email: 'patinhas@gmail.com', password: '123', city: 'Jaragua', uf: 'SC'},
        { idOng:'abc125', name: 'FRADA', email: 'frada@gmail.com', password: '123', city: 'Joinville', uf: 'SC'},
        { idOng:'2094ce14', name: 'DIONEI PETS', email: 'dionei@gmail.com', password: '123', city: 'Jaragua', uf: 'SC'},
    ])
}