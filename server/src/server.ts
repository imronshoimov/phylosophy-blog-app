import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import http from 'http'

const users = [
  { id: 1, name: 'Nimadir', email: 'i1@gmail.com', role: 'teacher' },
  { id: 2, name: 'Birnima', email: 'i2@gmail.com', role: 'developer' },
  { id: 3, name: 'Va nima', email: 'i3@gmail.com', role: 'hacker' },
  { id: 4, name: 'Va nima', email: 'i4@gmail.com', role: 'mentor' },
]

const typeDefs = gql(`
    type Query {
        users(
            includeId: Boolean = true,
            includeName: Boolean = true,
            includeEmail: Boolean = true,
            includeRole: Boolean = true
        ): [User!]!
    }

    type User {
        id: @include(if: includeId)
        name: @include(if: includeId)   
        email: @include(if: includeId)
        role: @include(if: includeId)
    }
`)

const resolvers = {
  Query: {
    users: () => users,
  },
}

async function startApolloServer() {
  const app = express()
  const httpServer = http.createServer(app)
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  })

  await server.start()

  server.applyMiddleware({ app })

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4100 }, resolve),
  )
  console.log(`🚀 Server ready at http://localhost:4100${server.graphqlPath}`)
  return { server, app }
}

startApolloServer()
