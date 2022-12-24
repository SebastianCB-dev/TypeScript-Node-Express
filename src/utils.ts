import { NewDiaryEntry, 
         Visibility, 
         Weather } from './types';

const parseComment = (commentFromRequest: any): string => {
  if(!isString(commentFromRequest) || !commentFromRequest) {
    throw new Error('Incorrect or missing comment');
  }

  return commentFromRequest
}
const parseDate = (dateFromRequest: any): string => {
  if(!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date');
  }
  return dateFromRequest;
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if(!isString(weatherFromRequest) || !weatherFromRequest || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather');
  }
  
  return weatherFromRequest;
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !visibilityFromRequest || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing weather');
  }

  return visibilityFromRequest;
}

const isString = (string: any) => typeof string === 'string' || string instanceof String;

const isDate = (date: string): boolean => Boolean(Date.parse(date));

const isWeather = (string: any): boolean => Object.values(Weather).includes(string);

const isVisibility = (string: any): boolean => Object.values(Visibility).includes(string);

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }

  return newEntry;
}

export default toNewDiaryEntry