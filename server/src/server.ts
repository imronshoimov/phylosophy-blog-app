import express, { Application } from 'express'
import { ApolloServer, gql, UserInputError } from 'apollo-server-express'
import http from 'http'
import { ApolloError } from 'apollo-server-core'
import { GraphQLUpload, graphqlUploadExpress } from 'graphql-upload'
import { finished } from 'stream/promises'

const data = [
  { id: 1, title: 'Math Textbook', author: 'Jane Smith', classes: ['Math'] },
  { id: 2, title: 'Nimdir Book', author: 'Imron Smith', colors: ['red'] },
  { id: 3, title: 'Kimdir Book', author: 'Joe Shoimov', colors: ['Math'] },
  { id: 4, title: 'Qaysidir Book', author: 'Imron Shoimov', colors: ['red'] },
]

const users = [
  {
    id: '1',
    name: 'Elizabeth Bennet',
  },
  {
    id: '2',
    name: 'Fitzwilliam Darcy',
  },
]

const typeDefs = gql(`
  scalar Upload

  directive @uppercase on FIELD_DEFINITION
  directive @deprecated(
    reason: String = "No longer available"
  ) on FIELD_DEFINITION | ENUM_VALUE

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

  type User {
    id: ID!
    name: String!
  }

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Query {
    books: [Book!]!
    hello: String @deprecated
    user(id: ID!): User!
    file: File!
  }

  type Mutation {
    singleUpload(file: Upload): File!
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
      return data
    },
    hello: () => 'helloSSS',
    user: (_: any, args: any, context: any) => {
      console.log(context)

      if (args.id < 1) {
        // throw new UserInputError('Bunday id li user yoq', {
        //   argumentName: 'id',
        // })
        throw new ApolloError('Bunday id li error yoq')
      }

      return users.find((el) => el.id == args.id)
    },
  },
  Mutation: {
    singleUpload: async (_: any, { file }: any) => {
      const { createReadStream, filename, mimetype, encoding } = await file

      const stream = createReadStream()

      const out = require('fs').createWriteStream('local-file-output.txt')
      stream.pipe(out)
      await finished(out)

      return { filename, mimetype, encoding }
    },
  },
}

async function startApolloServer() {
  const app: Application = express()
  const httpServer = http.createServer(app)
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ token: req?.headers?.token }),
  })

  await server.start()

  app.use(graphqlUploadExpress())

  server.applyMiddleware({ app })

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4100 }, resolve),
  )
  console.log(`🚀 Server ready at http://localhost:4100${server.graphqlPath}`)
  return { server, app }
}

startApolloServer()
function getScope(authorization: string | undefined) {
  throw new Error('Function not implemented.')
}
