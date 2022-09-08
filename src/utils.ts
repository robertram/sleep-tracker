import { AlarmType, NewAlarmEntry, AlarmTypeEnum } from "./types";

const isString = (string: string): boolean => {
  return typeof string === "string";
};

const isType = (param: any): boolean => {
  return Object.values(AlarmTypeEnum).includes(param);
};

const parseDescription = (descriptionFromRequest: any): string => {
  if (!isString(descriptionFromRequest)) {
    throw new Error("Incorrect or missing description");
  }
  return descriptionFromRequest;
};

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error("Incorrect or missing date");
  }
  return dateFromRequest;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseType = (typeFromRequest: any): AlarmType => {
  if (!isString(typeFromRequest) || !isType(typeFromRequest)) {
    throw new Error("Incorrect or missing type");
  }
  return typeFromRequest;
};

const parseName = (nameFromRequest: any): AlarmType => {
  if (!isString(nameFromRequest) ) {
    console.log('name', nameFromRequest)
    throw new Error("Incorrect or missing name");
  }
  return nameFromRequest;
};

const toNewAlarmEntry = (object: any): NewAlarmEntry => {
  const newEntry: NewAlarmEntry = {
    name: parseName(object.name),
    description: parseDescription(object.description),
    date: parseDate(object.date),
    type: parseType(object.type),
  };
  return newEntry;
};

export default toNewAlarmEntry;
