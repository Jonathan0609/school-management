'use client';

import BreadcrumbCommon from '@/components/_common/BreadcrumbCommon';
import RoomsList from '@/components/Rooms/RoomsList';
import RoomsModalForm from '@/components/Rooms/RoomsModalForm';
import { Stack, Grid, GridCol, Text, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPlus } from '@tabler/icons-react';

export default function RoomsPage() {
  const [createOpened, createActions] = useDisclosure();
  return (
    <>
      <Stack>
        <BreadcrumbCommon
          data={[
            { href: 'overview', title: 'Ponte 21' },
            { href: 'rooms', title: 'Turmas' },
          ]}
        />

        <Grid>
          <GridCol span="auto">
            <Text fz="xl" fw={700}>
              Turmas
            </Text>
          </GridCol>

          <GridCol span="content">
            <Button
              leftSection={<IconPlus size={18} />}
              onClick={createActions.open}
            >
              Cadastrar turma
            </Button>
          </GridCol>
        </Grid>

        <RoomsList />
      </Stack>

      <RoomsModalForm opened={createOpened} onClose={createActions.close} />
    </>
  );
}
