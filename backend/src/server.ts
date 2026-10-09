import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import statusRoutes from './routes/statusRoute.js';
import userRoutes from './routes/userRoute.js';
import taskRoute from './routes/taskRoute.js';
import studyGroupRoute from './routes/studyGroupRoute.js';
import studyGroupMembersRoute from './routes/studyGroupMembersRoute.js';
import authRoute from './routes/authRoute.js';
import { authMiddleware } from './middlewares/authMiddleware.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/', statusRoutes);
app.use('/auth', authRoute);
app.use('/users',authMiddleware, userRoutes);
app.use('/task',authMiddleware,taskRoute);
app.use('/studyGroup',authMiddleware,studyGroupRoute);
app.use('/studyGroupMembers',authMiddleware,studyGroupMembersRoute);


app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});