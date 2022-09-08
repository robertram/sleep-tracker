export type AlarmType = 'sleep' | 'wake'

export enum AlarmTypeEnum {
  Sleep='sleep',
  Wake='wake'
}

export interface AlarmEntry {
  id: number
  date: string
  name: string
  description?: string
  type: AlarmType
}

// interface SpecialAlarm extends AlarmEntry {
//   image: string
// }

export type NewAlarmEntry =Omit<AlarmEntry, 'id'>