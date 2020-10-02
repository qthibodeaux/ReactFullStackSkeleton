const createGenericTable = `
CREATE TABLE generic (
    id serial primary key,
    fname text,
    number text,
    ctime timestamptz,
    mtime timestamptz default current_timestamp
    );`

const dropGenericTable = `DROP TABLE "generic";`

exports.up = function(knex) {
    return knex.raw(createGenericTable)
};

exports.down = function(knex) {
    return knex.raw(dropGenericTable)
};
