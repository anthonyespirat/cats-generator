const { getAllCats, getOneRandomCat } = require('../controllers/catController')

async function routes (fastify, option) {

  fastify.get('/cats', getAllCats)
  fastify.get('/cat', getOneRandomCat)
}

module.exports = routes