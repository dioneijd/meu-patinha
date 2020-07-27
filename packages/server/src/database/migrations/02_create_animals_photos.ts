import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('ANIMALS_PHOTOS', table => {        
        table.integer('idAnimal').primary()
        table.foreign('idAnimal').references('idAnimal').inTable('ANIMALS')
        table.string('imageUrl').notNullable()
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('ANIMALS_PHOTOS')
}