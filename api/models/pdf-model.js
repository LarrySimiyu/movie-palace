const db = require("../../data/dbConfig.js");

module.exports = {
  add,
  find,
  findById,
  update,
  remove
};

function add(screenplay) {
  return db("screenplay_pdf").insert(screenplay);
}

function find() {
  return db("screenplay_pdf");
}

function findById(id) {
  return db("screenplay_pdf")
    .where({ id })
    .first();
}

function update(id, changes) {
  return db("screenplay_pdf")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("screenplay_pdf")
    .where({ id })
    .del();
}
