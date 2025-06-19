import express from 'express'
import dotenv from 'dotenv';
dotenv.config(); // must come before anything else

import cors from 'cors'

import eventRoutes from './routes/eventRoutes'
import authRoutes from './routes/authRoutes'


const app = express()
app.use(express.json())
app.use(
  cors({
    origin: '*', // frontend origin
    credentials: true,
  })
)



app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/events', eventRoutes)

// 🏠 Root route
app.get('/', (req, res) => {
  res.send(`
    🚀 API is running...
    🌐 Status: Online
    
  `)
})

export default app
