import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('ANIMALS', table => {
        table.increments('idAnimal').primary()
        table.string('name').notNullable()
        table.string('description').notNullable()
        table.string('idUser').notNullable()
      //  table.foreign('idUser').references('idUser').inTable('USERS')
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('ANIMALS')
}