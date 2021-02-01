import { gql } from 'apollo-server-express'

const typeDefs = gql`
  # ======== Schema =========
  type Tweet {
    id: ID!
    texts: String
    media: String
    likes: Int!
    retweets: Int!
    replys: [Tweet]
    created_at: String!
  }

  type DM {
    roomId: ID!
    messages: String!
    from: String!
  }

  type Me {
    id: ID!
    email: String!
    password: String!
    username: String!
    bio: String
    profileImage: String
    headerImage: String
    token: String
    tweets: [Tweet]
    likes: [Tweet]
    following: [Me]
    followers: [Me]
    muteUsers: [Me]
    blockUsers: [Me]
    isPrivate: Boolean!
    DMs: [DM]
  }
  # =========================

  # ======== Query =========
  type Query {
    tweets(followingIds: [ID]!): Tweet
    tweet(id: ID!): Tweet
    getUser(id: ID!): Me
    me: Me
  }
  # ========================

  # ======== Mutation =========
  # ===========================
`

export default typeDefs
