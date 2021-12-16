import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import http from 'http'

const data = [
  { id: 1, title: 'Math Textbook', author: 'Jane Smith', classes: ['Math'] },
  { id: 2, title: 'Coloring Book', author: 'Joe Smith', colors: ['red'] },
]

const typeDefs = gql(`
  interface Book {
    title: String!
    author: String!
  }

  type TextBook implements Book {
    title: String!
    author: String!
    classes: [String]
  } 

  type ColoringBook implements Book {
    title: String!
    author: String!
    colors: [String]
  }

  type Query {
    books(id: Int!): [Book!]!
  }
`)

const resolvers = {
  Book: {
    __resolveType(obj: any, context: any, info: any) {
      if (obj.classes) {
        return 'TextBook'
      }

      if (obj.colors) {
        return 'ColoringBook'
      }

      console.log(obj)

      return null
    },
  },
  Query: {
    books: (_: any, { id }: any) => {
      return [data.find((el) => el.id == id)]
    },
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
