import {
  Badge,
  Button,
  Card,
  Group,
  ScrollArea,
  Stack,
  Text,
} from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';

interface Room {
  id: string;
  name: string;
  level: string;
  teachers: {
    id: string;
    name: string;
  }[];
}

export default function RoomsListCard() {
  const data: Room[] = [
    {
      id: '13134',
      name: 'Sala 01',
      level: '1º ano',
      teachers: [
        { id: '213142', name: 'Jonathan' },
        { id: '213rsq142', name: 'Emilly' },
      ],
    },
    {
      id: '423421',
      name: 'Sala 02',
      level: '2º ano',
      teachers: [{ id: '21314224242', name: 'Roberto' }],
    },
    {
      id: '415r12',
      name: 'Sala 03',
      level: '3º ano',
      teachers: [{ id: '21314224', name: 'Cláudia' }],
    },
    {
      id: '313242',
      name: 'Sala 04',
      level: '1º ano',
      teachers: [{ id: '21314221r42', name: 'Ronaldo' }],
    },
    {
      id: '3132dsq42',
      name: 'Sala 05',
      level: '1º ano',
      teachers: [{ id: '2131422sq1r42', name: 'Rizê' }],
    },
  ];

  return (
    <Card h="calc(100vh - 60px)">
      <Stack h="100%" gap="xs">
        <Group justify="space-between">
          <Text fz="md" fw={600} c="dimmed">
            Turmas
          </Text>

          <Button
            variant="transparent"
            rightSection={<IconChevronRight size={14} />}
            component={Link}
            href="/rooms"
            p={0}
          >
            Ver todas
          </Button>
        </Group>

        <ScrollArea
          scrollbars="y"
          scrollbarSize={2}
          h="100%"
          offsetScrollbars={false}
          mb={5}
        >
          <Stack gap="sm" h="100%">
            {data.map((item, index) => (
              <Card
                key={index}
                component={Link}
                href={`/rooms/${item.id}`}
                radius="lg"
                withBorder
              >
                <Stack>
                  <Group justify="space-between">
                    <Text fw={600}>{item.name}</Text>

                    <Badge variant="dot">{item.level}</Badge>
                  </Group>

                  <Stack gap="xs">
                    <Text fz="sm" fw={600} c="dimmed" lh={1}>
                      Responsáveis pela turma
                    </Text>

                    <Group gap={5}>
                      {item.teachers.map((teacher) => (
                        <Badge variant="light" radius="sm" key={teacher.id}>
                          {teacher.name}
                        </Badge>
                      ))}
                    </Group>
                  </Stack>
                </Stack>
              </Card>
            ))}
          </Stack>
        </ScrollArea>
      </Stack>
    </Card>
  );
}
