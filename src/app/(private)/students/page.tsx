import BreadcrumbCommon from '@/components/_common/BreadcrumbCommon';
import RoomsListCard from '@/components/Rooms/RoomsListCard';
import StudentsList from '@/components/Students/StudentsList';
import { Stack, Grid, GridCol, Text, Button } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import Link from 'next/link';

export default function StudentsPage() {
  return (
    <Stack p="md">
      <Grid>
        <GridCol span="auto">
          <Stack>
            <BreadcrumbCommon
              data={[
                { href: 'overview', title: 'Ponte 21' },
                { href: 'students', title: 'Estudantes' },
              ]}
            />

            <Grid>
              <GridCol span="auto">
                <Text fz="xl" fw={700}>
                  Estudantes
                </Text>
              </GridCol>

              <GridCol span="content">
                <Button
                  leftSection={<IconPlus size={18} />}
                  component={Link}
                  href="/students/create"
                >
                  Cadastrar aluno
                </Button>
              </GridCol>
            </Grid>

            <StudentsList />
          </Stack>
        </GridCol>

        <GridCol span={3} visibleFrom="md">
          <RoomsListCard />
        </GridCol>
      </Grid>
    </Stack>
  );
}
