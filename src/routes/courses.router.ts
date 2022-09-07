import express, { Request, Response } from 'express'
import CoursesService from '../services/courses.service'

const router = express.Router()
const service = new CoursesService()

router.get('/', (_req: Request, res: Response): void => {
  const courses = service.list()
  res.send(courses)
})

export default router
