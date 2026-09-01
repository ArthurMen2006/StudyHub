import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import statusRoutes from './routes/statusRoute.js'
import userRoutes from './routes/userRoute.js'
import taskRoute from './routes/taskRoute.js'
import studyGroupRoute from './routes/studyGroupRoute.js'


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/', statusRoutes);
app.use('/users', userRoutes);
app.use('/task',taskRoute);
app.use('/studyGroup',studyGroupRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});