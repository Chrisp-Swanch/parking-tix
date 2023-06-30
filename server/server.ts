import express from 'express'
import path from 'path'

import users from './routes/users'
import disputes from './routes/disputes'
import emails from './routes/emails'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use('/api/v1/users', users)
server.use('/api/v1/disputes', disputes)
server.use('/api/v1/emails', emails)

export default server
