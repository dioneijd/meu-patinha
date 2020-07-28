import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('USERS').delete()
    await knex('USERS').insert([
        { idUser:'abc123', name: 'AJAPRA', email: 'ajapra@gmail.com', password: '123', city: 'Jaragua', uf: 'SC'},
        { idUser:'abc124', name: 'Gangue Patinhas', email: 'patinhas@gmail.com', password: '123', city: 'Jaragua', uf: 'SC'},
        { idUser:'abc125', name: 'FRADA', email: 'frada@gmail.com', password: '123', city: 'Joinville', uf: 'SC'},
        { idUser:'2094ce14', name: 'DIONEI PETS', email: 'dionei@gmail.com', password: '123', city: 'Jaragua', uf: 'SC'},
    ])
}