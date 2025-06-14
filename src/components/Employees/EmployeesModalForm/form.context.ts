import { createFormContext } from '@mantine/form';

export interface EmployeeFormValues {
  fullName: string;
  cpf: string;
  birthDate: string;
  phone: string;
  email: string;
  gender?: string;
  photoUrl?: string;

  role: string;
  hiredAt: string;
  isActive: boolean;
  workShift?: string;
  notes?: string;
  files: File[];

  hasSystemAccess: boolean;
  userRole?: 'admin' | 'educator' | 'secretary';
  userId?: string;
}

export const [EmployeeFormProvider, useEmployeeFormContext, useEmployeeForm] =
  createFormContext<EmployeeFormValues>();
