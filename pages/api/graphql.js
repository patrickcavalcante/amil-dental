import { ApolloServer, gql } from 'apollo-server-micro'
import {template} from '../../data';

const typeDefs = gql`
  
  type Data {
    tema: String!
    keywords:[String!]!
    content:Sessions
  }
  type Session1 {
    title: String!
    sub:String!
    imagem:String!
  }
  type Header {
    title: String!
    sub:String!
  }
  type Sessions {
    header:[Header!]!
    session1:[Session1!]!
    session3:[Session1!]!
  }
  type Query {
    data: [Data!]!
    temp:[Data!]!
    getTema(keyword: String): Data!
  }
  `

const resolvers = {
  Query: {
    temp:() => template,
    getTema:(_, args,) => {
        return template.find(
          function (temp){
            return temp.keywords.find(
              function(t){
                return t.toLowerCase().match(args.keyword.toLowerCase())
              }
            )
          }
        )
    },
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })