import express from 'express'
import { PORT } from './config.js';
import userRouter from './routes/userRouter.js'

const app = express();

app.get('/',(req,res) => {
    res.json({mensage:"Api do CultureLink"})
} )

app.use('/user',userRouter)

app.listen(PORT, () => {
    console.log(`servidor no ar na porta http://localhost:${PORT}`)
}
)