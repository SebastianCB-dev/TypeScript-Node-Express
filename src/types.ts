
export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}

export enum Visibility {
  Good = 'good',
  Bad = 'bad',
  Ok = 'ok',
  Poor = 'poor'
}

export interface DiaryEntry {
  id : number | string;
  date : string;
  weather : Weather;
  visibility: Visibility;
  comment : string;
}

export type NoSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;



// Example pick
// export type NewDiaryEntry = Pick<DiaryEntry, 'date' | 'weather' | 'visibility'>;

// Diferencias entre interfaces y tipos
// La interfaz se puede extender, el tipo no

// * Example Interface
// interface SpecialDiaryEntry extends DiaryEntry {
//   fligthNumber: string;
// }

// * Example Type
// ? In this case, the type is not extensible, this create a new type
// type SpecialDiaryEntry2 = DiaryEntry & {
//   fligthNumber: string;
// };