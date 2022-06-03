const fastify = require('fastify')({ logger: true })
const fastifyEnv = require('@fastify/env')
const routes = require('./router/router')
const path = require('path')

fastify.register(require('@fastify/cors'), { 
  origin: "http://localhost:3001"
})
fastify.register(fastifyEnv, {dotenv: true, schema: {
  type: 'object',
  required: [ 'MYSQL_STRING' ],
  properties: {
    PORT: {
      type: 'string',
      default: ''
    }
  }
}})
fastify.register(require('@fastify/mysql'), {
  connectionString: process.env.MYSQL_STRING
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