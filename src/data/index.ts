import data from "../data/content.json";

export interface NavData {
  id: string;
  title: string;
}

export interface HeaderData {
  name: string;
  title: string;
  summary: string;
}

export interface CompanyData {
  name: string;
  dates: string;
  imageKey: string;
}

export interface PositionData {
  dates: string;
  title: string;
  bullets: string[];
}

export interface ExperienceData {
  company: CompanyData;
  positions: PositionData[];
}

export interface EducationData {
  imageKey: string;
  imageAlt: string;
  degree: string;
  school: string[];
  year: string;
}

export interface SkillData {
  name: string;
  level: number;
}

export interface ContactData {
  body: string[];
  cta: string;
  emailUrlEncoded: string;
}

export interface Data {
  nav: NavData[];
  header: HeaderData;
  experience: ExperienceData[];
  education: EducationData[];
  skills: SkillData[];
  contact: ContactData;
}

export const getData = (): Data => data;
