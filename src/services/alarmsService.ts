import { AlarmEntry } from '../types'
import alarmData from './alarms.json'

const alarms: AlarmEntry[] = alarmData as AlarmEntry[]

export const findById = (id: any): AlarmEntry | undefined => {
  const entry: any = alarmData.find(d => d.id === id)
  return entry
}

export const getAlarms = (): any => alarms
export const addAlarm = (): any => null
