import express from 'express'
import request from 'superagent'

import path from 'path'
import dotenv from 'dotenv'
const envPath = path.join(__dirname, '../../.env')
dotenv.config({ path: envPath })

const router = express.Router()

router.post('/', (req, res) => {
  const prompt = req.body.prompt

  request
    .post('https://api.openai.com/v1/chat/completions')
    .set('Authorization', `Bearer ${process.env.OPEN_AI_KEY}`)
    .set('Content-Type', 'application/json')
    .send({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `Write an email to the Wellington City Council (New Zealand) to appeal a parking ticket. The ticket details will be sent in my next message. Please explain that there are extraordinary circumstances that warrant, in due fairness, a waiver of the fee. Provide a defensible reason for this.`,
        },
        {
          role: 'user',
          content: `${prompt}`,
        },
      ],
      temperature: 0.7,
    })
    .then((response) => {
      return res.json(response.body)
    })
    .catch((err) => console.log('OPEN AI API ERR: ', err.message))
})

export default router