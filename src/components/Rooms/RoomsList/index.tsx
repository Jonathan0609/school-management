'use client';

import TableCommon from '@/components/_common/TableCommon';
import { Anchor, Text } from '@mantine/core';
import Link from 'next/link';
import ManagerStudentsAction from './ManagerStudentsAction';

interface Room {
  id: string;
  name: string;
  level: string;
  shift: string;
  studentsQuantity: number;
  responsibleEducator: string;
  assistant: string;
  year: number;
}

const data: Room[] = [
  {
    id: '3122313',
    name: '1º Ano B',
    level: 'Maternal I',
    shift: 'Integral',
    studentsQuantity: 25,
    responsibleEducator: 'Ana Clara Silva',
    assistant: 'Bruno Mendes',
    year: 2024,
  },
  {
    id: '313123',
    name: '1º Ano A',
    level: 'Maternal II',
    shift: 'Integral',
    studentsQuantity: 20,
    responsibleEducator: 'Carlos Eduardo Costa',
    assistant: 'Daniela Pereira',
    year: 2024,
  },
  {
    id: '313213',
    name: '3º Ano B',
    level: 'Maternal III',
    shift: 'Integral',
    studentsQuantity: 18,
    responsibleEducator: 'Fernanda Lima',
    assistant: 'Gustavo Almeida',
    year: 2024,
  },
  {
    id: '31421312',
    name: '2º Ano B',
    level: 'Maternal II',
    shift: 'Integral',
    studentsQuantity: 30,
    responsibleEducator: 'Helena Ribeiro',
    assistant: 'Igor Santos',
    year: 2024,
  },
  {
    id: '4212123',
    name: '1º Ano B',
    level: 'Maternal I',
    shift: 'Integral',
    studentsQuantity: 22,
    responsibleEducator: 'Julia Nogueira',
    assistant: 'Kleber Rocha',
    year: 2025,
  },
  {
    id: '4122413',
    name: '3º Ano B',
    level: 'Maternal III',
    shift: 'Integral',
    studentsQuantity: 19,
    responsibleEducator: 'Laura Martins',
    assistant: 'Marcelo Dantas',
    year: 2025,
  },
  {
    id: '41523123',
    name: 'Jardim da Imaginação',
    level: 'Educação Infantil',
    shift: 'Manhã',
    studentsQuantity: 15,
    responsibleEducator: 'Mariana Oliveira',
    assistant: 'Nelson Ferreira',
    year: 2025,
  },
  {
    id: '242512',
    name: 'Núcleo de Pesquisa',
    level: 'Ensino Médio',
    shift: 'Integral',
    studentsQuantity: 28,
    responsibleEducator: 'Otávio Pires',
    assistant: 'Patrícia Gomes',
    year: 2024,
  },
  {
    id: '241233',
    name: 'Cantinho da Leitura',
    level: 'Maternal I',
    shift: 'Integral',
    studentsQuantity: 20,
    responsibleEducator: 'Quezia Costa',
    assistant: 'Ricardo Souza',
    year: 2023,
  },
  {
    id: '14231',
    name: 'Fábrica de Ideias',
    level: 'Maternal II',
    shift: 'Noite',
    studentsQuantity: 23,
    responsibleEducator: 'Sandra Paiva',
    assistant: 'Thiago Vasconcelos',
    year: 2023,
  },
];

export default function RoomsList() {
  return (
    <TableCommon
      data={data}
      columns={[
        {
          label: 'Turma',
          key: 'name',
          render: (room) => (
            <Anchor component={Link} href={`/rooms/${room.id}`}>
              <Text lh={1} fw={600}>
                {room.name}
              </Text>
            </Anchor>
          ),
        },
        {
          label: 'Ano',
          key: 'year',
          render: (item) => <Text fw={600}>{item.year}</Text>,
        },
        {
          label: 'Turno',
          key: 'shift',
        },
        {
          label: 'Nível',
          key: 'level',
        },
        {
          label: 'Qtd. alunos',
          key: 'studentsQuantity',
          align: 'center',
        },
        {
          label: 'Educador responsável',
          key: 'responsibleEducator',
        },
        {
          label: 'Assistente',
          key: 'assistant',
        },
        {
          label: '',
          render: () => <ManagerStudentsAction />,
          align: 'right',
        },
      ]}
    />
  );
}
