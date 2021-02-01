import express from 'express'
import { ApolloServer } from 'apollo-server-express'

import typeDefs from './schema'
import resolvers from './resolvers'

const app = express()
const PORT = 4000

const server = new ApolloServer({ typeDefs, resolvers })

server.applyMiddleware({ app })

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
