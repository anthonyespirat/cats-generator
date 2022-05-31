const fastify = require('fastify')({ logger: true })
const routes = require('./router/router')
const path = require('path')

fastify.register(require('@fastify/cors'), { 
  origin: "http://localhost:3001"
})
fastify.register(require('@fastify/mysql'), {
  connectionString: 'mysql://nox:2525@localhost/cats'
})
fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'images'),
  prefix: '/images/', // optional: default '/'
})

fastify.register(routes)

// Run the server!
fastify.listen(3000, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})