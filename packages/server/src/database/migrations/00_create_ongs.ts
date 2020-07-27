import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('ONGS', table => {
        table.string('idOng').primary()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('password').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).notNullable()
        table.string('thumbnail')
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('ONGS')
}