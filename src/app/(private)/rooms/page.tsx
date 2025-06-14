'use client';

import BreadcrumbCommon from '@/components/_common/BreadcrumbCommon';
import RoomsList from '@/components/Rooms/RoomsList';
import { Stack, Grid, GridCol, Text, Button } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import Link from 'next/link';

export default function RoomsPage() {
  return (
    <Stack p="md">
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
              component={Link}
              href="/rooms/create"
            >
              Cadastrar turma
            </Button>
          </GridCol>
        </Grid>

        <RoomsList />
      </Stack>
    </Stack>
  );
}
