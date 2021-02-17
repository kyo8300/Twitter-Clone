import { gql } from 'apollo-server-express'
import {
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
  Kind,
  ValueNode,
} from 'graphql'

// Custom Scalar
const config: GraphQLScalarTypeConfig<Date | number, number> = {
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value: Date) {
    console.log('serialize: ', value)
    return value.getTime() // Convert outgoing Date to integer for JSON
  },
  parseValue(value: number) {
    console.log('parseValue: ', value)
    return new Date(value) // Convert incoming integer to Date
  },
  parseLiteral(ast: ValueNode) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10) // Convert hard-coded AST string to type expected by parseValue
    }
    return null // Invalid hard-coded value (not an integer)
  },
}

export const dateScalar = new GraphQLScalarType(config)

const typeDefs = gql`
  scalar Date

  # ======== Schema =========
  type Tweet {
    id: ID!
    texts: String
    media: String
    likes: Int
    retweets: Int
    replys: [Tweet]
    created_at: Date!
  }

  type DM {
    roomId: ID!
    messages: String!
    fromUserId: String!
    created_at: Date!
  }

  type User {
    id: ID!
    email: String
    username: String!
    phoneNumber: Int!
    birth: Date!
    password: String!
    bio: String
    profileImage: String
    headerImage: String
    token: String
    tweets: [Tweet]
    likes: [Tweet]
    following: [User]
    followers: [User]
    muteUsers: [User]
    blockUsers: [User]
    isPrivate: Boolean!
    DMs: [DM]
  }

  type ErrorHandler {
    message: String!
  }

  union ReturnResult = User | ErrorHandler

  # =========================

  # ======== Query =========
  type Query {
    tweets(followingIds: [ID]!): Tweet
    tweet(id: ID!): Tweet
    getUser(id: ID!): User
    me: User
  }
  # ========================

  # ======== Mutation =========
  type Mutation {
    login(LoginInfo: LoginInfo!, password: String!): ReturnResult
    signin(SigninInfo: SigninInfo!, password: String!): ReturnResult
    logout: Boolean
  }

  # Input types
  input LoginInfo {
    username: String
    email: String
    phoneNumber: Int
  }

  input SigninInfo {
    username: String!
    email: String
    phoneNumber: Int!
    birth: Date!
  }

  # ===========================
`

export default typeDefs
