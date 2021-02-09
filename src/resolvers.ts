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
    signin: async (
      _,
      { SigninInfo, password },
      { session }
    ): Promise<ReturnResult> => {
      if (SigninInfo) {
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
      } else {
        return { message: 'Please input SigninInfo and password' }
      }
    },
  },
}

export default resolvers
