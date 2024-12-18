import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8080;

app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.get('/api/home', (req, res) => {
  res.json({ message: 'Hello World!', people: ['Harry', 'Jack', 'Sarah'] });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
