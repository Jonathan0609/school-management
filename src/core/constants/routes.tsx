import {
  IconBriefcase,
  IconDashboard,
  IconDoor,
  IconUsers,
} from '@tabler/icons-react';
import { ReactNode } from 'react';

interface Route {
  label: string;
  description?: string;
  icon: ReactNode;
  key: string;
  href: string;
}

export const routes: Route[] = [
  {
    label: 'Tela inicial',
    key: 'home',
    icon: <IconDashboard size={18} />,
    href: '/home',
  },
  {
    label: 'Funcionários',
    key: 'employees',
    icon: <IconBriefcase size={18} />,
    href: '/employees',
  },
  {
    label: 'Alunos',
    key: 'students',
    icon: <IconUsers size={18} />,
    href: '/students',
  },
  {
    label: 'Turmas',
    key: 'rooms',
    icon: <IconDoor size={18} />,
    href: '/rooms',
  },
];
