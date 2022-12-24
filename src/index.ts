import express from 'express';

import routerDiaries from './routes/diaries.routes';

const app = express();

app.use(express.json());

const PORT = 3000;

app.use('/api/diaries', routerDiaries);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); 
});