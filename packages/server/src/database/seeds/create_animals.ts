import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('ANIMALS').delete()
    await knex('ANIMALS').insert([
        { name: 'Charlei', description: 'Tombalata encontrado proximo ao Marusan. Porte meio/grande. Super carrinho e quietinho', idOng: '2094ce14'},
        { name: 'Charlei2', description: 'Tombalata encontrado proximo ao Marusan. Porte meio/grande. Super carrinho e quietinho', idOng: '2094ce14'},
        { name: 'Charlei3', description: 'Tombalata encontrado proximo ao Marusan. Porte meio/grande. Super carrinho e quietinho', idOng: '2094ce14'},
        { name: 'Charlei4', description: 'Tombalata encontrado proximo ao Marusan. Porte meio/grande. Super carrinho e quietinho', idOng: '2094ce14'},
        { name: 'Jhow', description: 'Terrorista! Mas muito amoroso', idOng: '2094ce14'},
        { name: 'Jhow2', description: 'Terrorista! Mas muito amoroso', idOng: '2094ce14'},
        { name: 'Jhow3', description: 'Terrorista! Mas muito amoroso', idOng: '2094ce14'},
        { name: 'Jhow4', description: 'Terrorista! Mas muito amoroso', idOng: '2094ce14'},
        { name: 'Luna', description: 'Porte gigante! Cadela com temperamento bipolar.', idOng: '2094ce14'},
        { name: 'Luna2', description: 'Porte gigante! Cadela com temperamento bipolar.', idOng: '2094ce14'},
        { name: 'Luna3', description: 'Porte gigante! Cadela com temperamento bipolar.', idOng: '2094ce14'},
        { name: 'Luna4', description: 'Porte gigante! Cadela com temperamento bipolar.', idOng: '2094ce14'},
    ])
}