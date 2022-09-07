import { Application, Router } from 'express'
import coursesRouter from './courses.router'

const routerApi = (app: Application): void => {
  const router = Router()
  app.use('/api/v1', router)
  router.use('/courses', coursesRouter)
}

export default routerApi
