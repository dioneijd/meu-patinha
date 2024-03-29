import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('USERS', table => {
        table.string('idUser').primary()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('password').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).notNullable()
        table.string('thumbnail')
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('USERS')
}