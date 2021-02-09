import { Resolvers, ReturnResult, User } from './generated/graphql'
import argon2 from 'argon2'
import { v4 as uuidv4 } from 'uuid'

const Users: User[] = []

const resolvers: Resolvers = {
  ReturnResult: {
    __resolveType(obj: ReturnResult): 'User' | 'ErrorHandler' | null {
      if ('username' in obj) return 'User'
      if ('message' in obj) return 'ErrorHandler'
      return null
    },
  },
  Mutation: {
    login: async (_, { LoginInfo, password }, { session }) => {
      if (session.userId) return { message: 'You already logged in' }

      const { username, email, phoneNumber } = LoginInfo

      const isUserExist = (user: User) => {
        if (user.phoneNumber && user.phoneNumber === phoneNumber) {
          return true
        }
        if (user.username && user.username === username) {
          return true
        }
        if (user.email && user.email === email) {
          return true
        }

        return false
      }

      const user = Users.find(isUserExist)

      if (!user) return { message: 'Please signin first.' }

      try {
        if (await argon2.verify(user.password, password)) {
          session.userId = user.id
          return user
        } else {
          return { message: 'Password is incorrect.' }
        }
      } catch (err) {
        return { message: 'Unexpected error occurred.' }
      }
    },
    signin: async (
      _,
      { SigninInfo, password },
      { session }
    ): Promise<ReturnResult> => {
      const { phoneNumber, birth, username } = SigninInfo
      const user = Users.some((user) => user.phoneNumber === phoneNumber)
      if (user) {
        return { message: 'User already exists!' }
      }

      let randomId = uuidv4()
      let id = randomId.replace(/-/g, '').substr(0, 15)

      while (Users.some((user) => user.id === id)) {
        randomId = uuidv4()
        id = randomId.replace(/-/g, '').substr(0, 15)
      }

      const hashPassword = await argon2.hash(password)

      const newUser: User = {
        id,
        username,
        phoneNumber,
        birth,
        password: hashPassword,
        isPrivate: false,
      }

      Users.unshift(newUser)

      session.userId = id

      return newUser
    },
    logout: (_, __, { session, res }) => {
      if (!session.userId) return false

      res.clearCookie('userId', {
        maxAge: -1,
        domain: 'localhost',
        path: '/',
      })

      res.clearCookie('userId.sig', {
        maxAge: -1,
        domain: 'localhost',
        path: '/',
      })

      return true
    },
  },
}

export default resolvers
