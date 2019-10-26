exports.up = function(knex) {
  return knex.schema.createTable("screenplay_pdf", tbl => {
    tbl.increments();
    tbl.string("pdfName", 400);
    tbl
      .integer("film_info")
      .unsigned()
      .references("id")
      .inTable("film_info")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("screenplay_pdf");
};
