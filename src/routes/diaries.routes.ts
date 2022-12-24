import { Router } from 'express';
import { addDiary, findById, 
         getEntriesWithoutSensitiveInfo } from '../services/diaries.services';

import toNewDiaryEntry from '../utils';

const routerDiaries = Router();

routerDiaries.get('/', (_req, res) => {
  res.json(getEntriesWithoutSensitiveInfo());
});

routerDiaries.get('/:id', (req, res) => {
  const diary = findById(Number(req.params.id));
  diary 
    ? res.json(diary) 
    : res.status(404).json({msg: 'Not Found'});  
});

routerDiaries.post('/', (req, res) => {

  try {
    const newDiaryEntry = toNewDiaryEntry(req.body);

    const addedDiaryEntry = addDiary(newDiaryEntry);

    res.json(addedDiaryEntry);
  }
  catch(e) {
    res.status(400).json({msg: `error: ${e}`});
  }
  
});

export default routerDiaries;