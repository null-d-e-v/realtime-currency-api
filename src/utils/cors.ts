import cors, { CorsOptions } from "cors";
import { Express } from 'express'

export const CONFIG: CorsOptions = {
  origin: '*',
  methods: ['POST', 'GET'],
  credentials: true
}

const useCors = (app: Express) => {
  app.use(cors(CONFIG))
}

export default useCors
