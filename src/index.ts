import express from 'express'
import dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server-express'
import cookieSession from 'cookie-session'
// helmet

import typeDefs from './schema'
import resolvers from './resolvers'

dotenv.config()

const app = express()
const PORT = 4000

app.use(
  cookieSession({
    keys: [process.env.KEY1 as string, process.env.KEY2 as string],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    sameSite: 'lax',
    domain: 'http://localhost:3000',
    // secure: true
  })
)

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ session: req.session }),
})

server.applyMiddleware({ app })

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
