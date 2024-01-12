import express from "express";
import cors from 'cors'

const app = express()

// MIDDLEWARES
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Agrega los métodos HTTP permitidos
  next();
})

// ROUTES

app.use((req, res, next) => {
  res.status(404).json({
    message: 'endpoint not found'
  })
})


export default app