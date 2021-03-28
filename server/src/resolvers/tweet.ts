import { Resolvers, TweetResult, Tweet } from './../generated/graphql'

const Tweets: Tweet[] = []

const tweet: Resolvers = {
  TweetResult: {
    __resolveType(obj: TweetResult): 'Tweet' | 'ErrorHandler' | null {
      if ('texts' in obj) return 'Tweet'
      if ('message' in obj) return 'ErrorHandler'
      return null
    },
  },
  Query: {
    tweets: (_, { followingIds }) => {
      const tweets = Tweets.filter((tweet) => followingIds.includes(tweet.id))
      return tweets
    },
    tweet: (_, { id }) => {
      const intId = parseInt(id)
      const tweet = Tweets[Tweets.length - intId]
      return tweet ? tweet : null
    },
  },
  Mutation: {
    tweet: (_, { texts, media }, { session }) => {
      if (!session.userId) {
        return { message: 'Not authed' }
      }

      if (texts && texts.length > 140) {
        return { message: 'You cannot tweet over 140 characters!' }
      }

      const newTweet: Tweet = {
        id: `${Tweets.length + 1}`,
        media,
        texts,
        likes: 0,
        retweets: [],
        replys: null,
        userId: session.userId,
        created_at: new Date(),
      }

      Tweets.unshift(newTweet)

      return newTweet
    },
    retweet: (_, { id }, { session }) => {
      if (!session.userId) {
        return false
      }

      const intId = parseInt(id)
      const tweet = Tweets[Tweets.length - intId]
      if (!tweet) return false

      tweet.retweets.unshift(session.userId)
      return true
    },
  },
}

export default tweet
