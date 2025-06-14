'use client';

import TableCommon from '@/components/_common/TableCommon';
import { Anchor, Group, Text } from '@mantine/core';
import dayjs from 'dayjs';
import Link from 'next/link';

interface Student {
  id: string;
  name: string;
  ra: string;
  birthdayDate: string;
  phone: string;
  responsibles: { name: string; phone: string; kinship: string }[];
}

export const data: Student[] = [
  {
    id: '1222',
    name: 'Emilly Souza',
    ra: '2023001',
    birthdayDate: '2004-03-15',
    phone: '11912345678',
    responsibles: [
      { name: 'Ana Souza', phone: '11998765432', kinship: 'Mãe' },
      { name: 'Carlos Souza', phone: '11987654321', kinship: 'Pai' },
    ],
  },
  {
    id: '124',
    name: 'Lucas Pereira',
    ra: '2023002',
    birthdayDate: '2005-07-22',
    phone: '21923456789',
    responsibles: [
      { name: 'Fernanda Pereira', phone: '21934567890', kinship: 'Mãe' },
    ],
  },
  {
    id: '2142',
    name: 'Isabela Lima',
    ra: '2023003',
    birthdayDate: '2006-11-09',
    phone: '31934567890',
    responsibles: [{ name: 'João Lima', phone: '31945678901', kinship: 'Pai' }],
  },
  {
    id: '5212',
    name: 'Rafael Oliveira',
    ra: '2023004',
    birthdayDate: '2004-01-30',
    phone: '41945678901',
    responsibles: [
      { name: 'Luciana Oliveira', phone: '41956789012', kinship: 'Mãe' },
      { name: 'Pedro Oliveira', phone: '41967890123', kinship: 'Pai' },
    ],
  },
  {
    id: '2314',
    name: 'Laura Martins',
    ra: '2023005',
    birthdayDate: '2007-05-18',
    phone: '51956789012',
    responsibles: [
      { name: 'Patrícia Martins', phone: '51978901234', kinship: 'Mãe' },
    ],
  },
  {
    id: '41512532',
    name: 'Guilherme Almeida',
    ra: '2023006',
    birthdayDate: '2005-09-27',
    phone: '61967890123',
    responsibles: [
      { name: 'Roberto Almeida', phone: '61989012345', kinship: 'Pai' },
    ],
  },
  {
    id: '3142213',
    name: 'Mariana Costa',
    ra: '2023007',
    birthdayDate: '2006-12-04',
    phone: '71978901234',
    responsibles: [
      { name: 'Sandra Costa', phone: '71990123456', kinship: 'Mãe' },
    ],
  },
  {
    id: '232112431',
    name: 'Bruno Fernandes',
    ra: '2023008',
    birthdayDate: '2004-06-11',
    phone: '81989012345',
    responsibles: [
      { name: 'Fabiana Fernandes', phone: '81901234567', kinship: 'Mãe' },
    ],
  },
  {
    id: '231412521',
    name: 'Camila Rocha',
    ra: '2023009',
    birthdayDate: '2005-08-25',
    phone: '11987654321',
    responsibles: [
      { name: 'Marcelo Rocha', phone: '11912349876', kinship: 'Pai' },
    ],
  },
  {
    id: '2141252121',
    name: 'Thiago Nunes',
    ra: '2023010',
    birthdayDate: '2006-10-03',
    phone: '21976543210',
    responsibles: [
      { name: 'Renata Nunes', phone: '21923456780', kinship: 'Mãe' },
    ],
  },
];

export default function StudentsList() {
  return (
    <TableCommon
      data={data}
      columns={[
        {
          label: 'Registro acadêmico',
          key: 'ra',
          render: (student) => (
            <Anchor component={Link} href={`/students/${student.id}`}>
              <Text lh={1} fw={600}>
                {student.ra}
              </Text>
            </Anchor>
          ),
        },
        {
          label: 'Aluno',
          key: 'name',
        },
        {
          label: 'Dt. nascimento',
          render: (student) => (
            <Group gap="sm">
              {dayjs(student.birthdayDate).format('DD/MM/YYYY')}
            </Group>
          ),
        },
      ]}
    />
  );
}
