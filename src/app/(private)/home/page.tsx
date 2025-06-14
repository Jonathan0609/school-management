import BreadcrumbCommon from '@/components/_common/BreadcrumbCommon';
import HomeKpis from '@/components/Home/HomeKpis';
import { Grid, GridCol, Stack, Text } from '@mantine/core';
import StudentsByAgeGroupChart from '@/components/Home/StudentsByAgeGroupChart';
import RegistrationsLastMonthsChart from '@/components/Home/RegistrationsLastMonthsChart';

export default function HomePage() {
  return (
    <Stack p="md">
      <Grid>
        <GridCol span="auto">
          <Text fz="xl" fw={700}>
            Tela inicial
          </Text>
        </GridCol>

        <GridCol
          span="content"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <BreadcrumbCommon
            data={[
              { href: 'overview', title: 'Ponte 21' },
              { href: 'home', title: 'Tela inicial' },
            ]}
          />
        </GridCol>
      </Grid>

      <HomeKpis />

      <Grid>
        <GridCol span={{ sm: 12, lg: 6 }}>
          <StudentsByAgeGroupChart />
        </GridCol>

        <GridCol span={{ sm: 12, lg: 6 }}>
          <RegistrationsLastMonthsChart />
        </GridCol>
      </Grid>
    </Stack>
  );
}
