const getAllCats = async function (req, reply) {
  const fastify = this;
  fastify.mysql.query(
    'SELECT * FROM cat',
    function onResult(err, result) {
      reply.send(err || result)
    }
  )
}
const getOneRandomCat = async function (req, reply) {
  const fastify = this;
  fastify.mysql.query(
    `SELECT * FROM cat
    ORDER BY RAND()
    LIMIT 1;`,
    function onResult(err, result) {
      reply.send(err || result)
    }
  )
}

const getRandomCatLimit = async function (req, reply) {
  const fastify = this;
  fastify.mysql.query(
    `SELECT * FROM cat
    ORDER BY RANDOM()
    LIMIT ${req.query.limit}`,
    function onResult(err, result) {
      reply.send(err || result)
    }
  )
}


module.exports = {
  getAllCats,
  getOneRandomCat,
  getRandomCatLimit
}

