import { ApolloServer, makeExecutableSchema } from 'apollo-server'
// Models
import models from './models'

import resolvers from './graphql/resolvers'
import typeDefs from './graphql/types'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const apolloServer = new ApolloServer({
  schema,
  context: {
    models
  }
})

// Running Apollo Server
const alter = true
const force = false

models.sequelize.sync({ alter, force }).then(() => {
  // eslint-disable-next-line no-console
  apolloServer.listen(5000).then(({ url }) => console.log(`running on ${url}`))
})
