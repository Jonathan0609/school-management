'use client';

import BreadcrumbCommon from '@/components/_common/BreadcrumbCommon';
import EmployeesList from '@/components/Employees/EmployeesList';
import EmployeesModalForm from '@/components/Employees/EmployeesModalForm';
import { Stack, Grid, GridCol, Text, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPlus } from '@tabler/icons-react';

export default function RoomsPage() {
  const [createOpened, createActions] = useDisclosure();

  return (
    <>
      <Stack>
        <Stack>
          <BreadcrumbCommon
            data={[
              { href: 'overview', title: 'Ponte 21' },
              { href: 'employees', title: 'Funcionários' },
            ]}
          />

          <Grid>
            <GridCol span="auto">
              <Text fz="xl" fw={700}>
                Funcionários
              </Text>
            </GridCol>

            <GridCol span="content">
              <Button
                leftSection={<IconPlus size={18} />}
                onClick={createActions.open}
              >
                Cadastrar funcionário
              </Button>
            </GridCol>
          </Grid>

          <EmployeesList />
        </Stack>
      </Stack>

      <EmployeesModalForm opened={createOpened} onClose={createActions.close} />
    </>
  );
}
