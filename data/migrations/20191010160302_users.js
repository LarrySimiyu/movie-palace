exports.up = function(knex) {
  return knex.schema.createTable("user", tbl => {
    tbl.increments();
    tbl.string("email", 50).unique();
    tbl.string("username", 20).notNullable();
    tbl.string("first_name", 20);
    tbl.string("last_name", 20);
    tbl.string("password").notNullable();
    tbl.string("userImgUrl", 255);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("user");
};
