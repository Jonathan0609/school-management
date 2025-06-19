export interface RoomsFormValues {
  code: string;
  name: string;
  schoolYear: Date;
  teachingStage: TeachingStage;
  shift: string;
}

export enum TeachingStage {
  EarlyChildhoodEducation = 'EARLY_CHILDHOOD_EDUCATION',
  ElementarySchoolI = 'ELEMENTARY_SCHOOL_I',
  ElementarySchoolII = 'ELEMENTARY_SCHOOL_II',
  HighSchool = 'HIGH_SCHOOL',
}

export const teachingStageLabel: Record<TeachingStage, string> = {
  [TeachingStage.EarlyChildhoodEducation]: 'Educação infantil',
  [TeachingStage.ElementarySchoolI]: 'Ensino Fundamental I',
  [TeachingStage.ElementarySchoolII]: 'Ensino Fundamental II',
  [TeachingStage.HighSchool]: 'Ensino Médio',
};
