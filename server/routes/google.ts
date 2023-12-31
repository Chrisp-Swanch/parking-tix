import express, { Router } from 'express'
import request from 'superagent'
import {
  getAuthURL,
  getMessagesByThread,
  getToken,
  sendMail,
  sendResponseMail,
  setRefreshToken,
} from '../utils/google'

const router = express.Router()

router.get('/code', async (req, res, next) => {
  const redirect = await getAuthURL()
  res.send(redirect)
})

router.post('/code', async (req, res) => {
  const refToken = await getToken(req.body.code)
  res.send(refToken)
})

router.post('/token', async (req, res) => {
  const token = req.body.token
  await setRefreshToken(token)
})

router.post('/thread', async (req, res) => {
  const threadId = req.body.threadId
  const emails = await getMessagesByThread(threadId)
  res.send(emails)
})

router.post('/send', async (req, res) => {
  const email = req.body.email
  const threadId = await sendMail(email)
  res.send(threadId)
})

router.post('/send/reply', async (req, res) => {
  const email = req.body.email
  console.log(email)
  await sendResponseMail(email)
  res.sendStatus(200)
})

export default router
