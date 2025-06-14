'use client';

import TableCommon from '@/components/_common/TableCommon';
import { toCpfCnpjMask } from '@/core/functions/toCpfCnpjMask';
import { toPhoneMask } from '@/core/functions/toPhoneMask';
import { Anchor, Badge, Text } from '@mantine/core';
import dayjs from 'dayjs';
import Link from 'next/link';

export interface Employee {
  id: string;
  fullName: string;
  cpf: string;
  email: string;
  phone: string;
  birthDate: string;
  role: string;
  hiredAt: string;
  isActive: boolean;
}

export const data: Employee[] = [
  {
    id: 'e1d2f3a4-1111-4444-aaaa-123456789001',
    fullName: 'Ana Clara Silva',
    cpf: '12345678900',
    email: 'ana.silva@escola.com',
    phone: '11987654321',
    birthDate: '1985-04-12',
    role: 'Educador',
    hiredAt: '2020-02-01',
    isActive: true,
  },
  {
    id: 'e1d2f3a4-2222-4444-aaaa-123456789002',
    fullName: 'Bruno Mendes',
    cpf: '32165498711',
    email: 'bruno.mendes@escola.com',
    phone: '11996541234',
    birthDate: '1990-09-08',
    role: 'Auxiliar',
    hiredAt: '2021-03-15',
    isActive: true,
  },
  {
    id: 'e1d2f3a4-3333-4444-aaaa-123456789003',
    fullName: 'Carlos Eduardo Costa',
    cpf: '45612378922',
    email: 'carlos.costa@escola.com',
    phone: '11988887777',
    birthDate: '1982-11-22',
    role: 'Coordenador',
    hiredAt: '2018-08-10',
    isActive: true,
  },
  {
    id: 'e1d2f3a4-4444-4444-aaaa-123456789004',
    fullName: 'Daniela Pereira',
    cpf: '65498732133',
    email: 'daniela.pereira@escola.com',
    phone: '11977776666',
    birthDate: '1995-06-18',
    role: 'Educador',
    hiredAt: '2022-01-05',
    isActive: true,
  },
  {
    id: 'e1d2f3a4-5555-4444-aaaa-123456789005',
    fullName: 'Eduardo Lima',
    cpf: '78912345644',
    email: 'eduardo.lima@escola.com',
    phone: '11966665555',
    birthDate: '1978-02-03',
    role: 'Diretor',
    hiredAt: '2015-09-20',
    isActive: true,
  },
  {
    id: 'e1d2f3a4-6666-4444-aaaa-123456789006',
    fullName: 'Fernanda Gomes',
    cpf: '85274196355',
    email: 'fernanda.gomes@escola.com',
    phone: '11955554444',
    birthDate: '1989-12-30',
    role: 'Secretária',
    hiredAt: '2019-06-12',
    isActive: true,
  },
];

export default function EmployeesList() {
  return (
    <TableCommon
      data={data}
      columns={[
        {
          label: 'Nome completo',
          key: 'fullName',
          render: (employee) => (
            <Anchor component={Link} href={`/employees/${employee.id}`}>
              <Text lh={1} fw={600}>
                {employee.fullName}
              </Text>
            </Anchor>
          ),
        },
        {
          label: 'Função',
          key: 'role',
          render: (employee) => (
            <Badge variant="default" radius="sm">
              {employee.role}
            </Badge>
          ),
        },
        {
          label: 'CPF',
          key: 'cpf',
          render: (employee) => toCpfCnpjMask(employee.cpf),
        },
        {
          label: 'Celular',
          key: 'phone',
          render: (employee) => toPhoneMask(employee.phone),
        },
        {
          label: 'Dt. nascimento',
          render: (employee) => dayjs(employee.birthDate).format('DD/MM/YYYY'),
        },
        {
          label: 'Ativo',
          render: (employee) => (
            <Badge variant="light" color={employee.isActive ? 'green' : 'red'}>
              {employee.isActive ? 'Sim' : 'Não'}
            </Badge>
          ),
        },
      ]}
    />
  );
}
