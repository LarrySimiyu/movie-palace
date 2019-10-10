const db = require("../../data/dbConfig");

module.exports = {
  add,
  find,
  get,
  findById,
  remove,
  update
};

async function add(body) {
  return db("film_info").insert(body);
}

function find() {
  return db("film_info");
}

function get(id) {
  //what does this do?
  if (id) {
    return db("film_info")
      .where({ id: Number(id) })
      .first();
  } else {
    return db("film_info");
  }
}

function findById(id) {
  return db("film_info")
    .where({ id })
    .first();
}

function remove(id) {
  return db("film_info")
    .where({ id })
    .del();
}

// add update to model

function update(id, changes) {
  return db("film_info")
    .where({ id })
    .update(changes);
}
