exports.up = function(knex) {
  return knex.schema.createTable("film_info", tbl => {
    tbl.increments();
    tbl.string("title", 100).notNullable();
    tbl.string("screenwriter", 100).notNullable();
    tbl.string("cowriter", 100);
    tbl.text("description", 1000).notNullable();
    tbl.string("category", 25).notNullable(); // category tags? - find by category tags
    tbl.text("pdfurl", 1000);
    tbl.string("cool", 45);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("film_info");
};
