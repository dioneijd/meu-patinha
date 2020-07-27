import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('ANIMALS', table => {
        table.increments('idAnimal').primary()
        table.string('name').notNullable()
        table.string('description').notNullable()
        table.string('idOng').notNullable()
        table.foreign('idOng').references('idOng').inTable('ONGS')
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('ANIMALS')
}