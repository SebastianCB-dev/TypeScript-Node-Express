import { DiaryEntry, NewDiaryEntry, NoSensitiveDiaryEntry } from '../types';
import diaryData from './diaries.json';

import { v4 } from 'uuid';

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries = () => diaries;

export const getEntriesWithoutSensitiveInfo = (): Array<NoSensitiveDiaryEntry> => {
  return diaries.map(({ comment, ...entry }) => entry);
}

export const findById = (id: number): NoSensitiveDiaryEntry | undefined => {
  return getEntriesWithoutSensitiveInfo().find(d => d.id === id);
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary: DiaryEntry = {
    id: v4(),
    ...newDiaryEntry
  };
  diaries.push(newDiary);
  return newDiary;
};