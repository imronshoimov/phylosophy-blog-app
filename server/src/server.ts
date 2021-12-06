import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import http from "http";

const books = [
    { id: 1, name: "Nimadir" },
    { id: 2, name: "Birnima" },
    { id: 3, name: "Va nima" },
    { id: 4, name: "Va nima" }
]

const typeDefs = gql(`
    type Query {
        books: [Book!]!
    }

    type Book {
        id: Int
        name: String!
    }
`)

const resolvers = {
    Query: {
        books: () => books
    }
}

async function startApolloServer() {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    })

    await server.start();

    server.applyMiddleware({ app });

    await new Promise<void>(resolve => httpServer.listen({ port: 4100 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4100${server.graphqlPath}`)
    return { server, app }
}

startApolloServer()