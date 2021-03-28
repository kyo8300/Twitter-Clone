import { Response } from 'express'

interface SessionType extends CookieSessionInterfaces.CookieSessionObject {
  userId: string | null
}

export interface Ctx {
  res: Response
  session: SessionType
}
