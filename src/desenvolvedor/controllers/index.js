const create = require('./create')
const edit = require('./edit')
const { findAll, findById} = require('./find')
const remove = require('./remove')

module.exports = {
  create,
  edit,
  findAll,
  findById,
  remove
}
