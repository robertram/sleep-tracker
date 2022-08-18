export type AlarmType = 'sleep' | 'wake'

export interface AlarmEntry {
  id: number
  name: string
  description?: string
  type: AlarmType
}

interface SpecialAlarm extends AlarmEntry {
  image: string
}
