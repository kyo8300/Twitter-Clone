import { Response } from 'express'

export interface Ctx {
  res: Response
  session: CookieSessionInterfaces.CookieSessionObject
}
