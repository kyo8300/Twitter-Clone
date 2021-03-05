import { Response } from 'express'
import { User } from 'generated/graphql'

interface SessionType extends CookieSessionInterfaces.CookieSessionObject {
  userId: string | null
}

export interface Ctx {
  res: Response
  session: SessionType
  Users: User[]
}
