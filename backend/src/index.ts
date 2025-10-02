import express from 'express';
import dotenv from 'dotenv';
import { getAuthToken } from './api/connect';
import searchRouter from './api/search';
import artistRouter from './api/artist';
import cors from 'cors';

//For env File
dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
	getAuthToken().then((tok) => res.send('Welcome to Express & TypeScript Server, your token is: ' + tok))
		.catch((err) => {
			console.error(err);
			res.status(500).send('Error occurred while fetching token');

		});
});
app.use("/search", searchRouter);
app.use("/artist", artistRouter);

app.listen(port, () => {
	console.log(`Server is Fire at https://localhost:${port}`);
});