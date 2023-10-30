import express from 'express'
import { PORT } from './config.js';
import userRouter from './routes/userRouter.js'
import PostRouter from './routes/PostRouter.js'
import bodyParser from 'body-parser';
import cors from 'cors'

const app = express();

app.use(bodyParser.json())
app.use(cors())


app.get('/',(req,res) => {
    res.json({mensage:"Api do CultureLink"})
} )

app.use('/users',userRouter)
app.use('/posts',PostRouter)

app.listen(PORT, () => {
    console.log(`servidor no ar na porta http://localhost:${PORT}`)
}
)