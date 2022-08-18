import express from 'express'
import * as alarmsServices from '../services/alarmsService'

const router = express.Router()

router.get('/', (_req, res): any => {
  res.send(alarmsServices.getAlarms())
})

router.get('/:id', (req: any, res): any => {
  const alarm: any = alarmsServices.findById(Number(req.params.id))

  return alarm != null ? res.send(alarm) : res.sendStatus(404)
})

router.post('/', (_req, res): any => {
  res.send('Saving alarm')
})

export default router
