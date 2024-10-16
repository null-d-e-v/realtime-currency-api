import session, { SessionOptions } from 'express-session'
import SessionFileStore from 'session-file-store'
import { Express } from 'express'

const FileStore = SessionFileStore(session)

export const CONFIG: SessionOptions = {
  secret: String(process.env.COOKIE_PWD),
  resave: false,
  saveUninitialized: false,
  name: 'xsessionid',
  store: new FileStore(),
  cookie: {
    secure: true, //INFO To test you need a site with ssl or self signed cert
    sameSite: 'none'
  }
}

const useSession = (app: Express) => {
  app.use(session(CONFIG))
}

export default useSession
