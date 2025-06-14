import { Grid, GridCol } from '@mantine/core';
import {
  IconUsers,
  IconUsersGroup,
  IconChalkboard,
  IconCalendarStats,
} from '@tabler/icons-react';
import CardStatisticHome from '../CardStatisticHome';

export default function HomeKpis() {
  return (
    <Grid>
      <GridCol span={{ lg: 3 }}>
        <CardStatisticHome
          title="Alunos matriculados"
          value={120}
          leftSection={<IconUsers size={40} />}
          contentInfo="Número atual de alunos ativos na escola."
        />
      </GridCol>

      <GridCol span={{ lg: 3 }}>
        <CardStatisticHome
          title="Total de Professores"
          value={120}
          leftSection={<IconUsersGroup size={40} />}
          contentInfo="Quantidade de professores atualmente em exercício."
        />
      </GridCol>

      <GridCol span={{ lg: 3 }}>
        <CardStatisticHome
          title="Turmas Ativas"
          value={120}
          leftSection={<IconChalkboard size={40} />}
          contentInfo="Número de turmas em funcionamento."
        />
      </GridCol>

      <GridCol span={{ lg: 3 }}>
        <CardStatisticHome
          title="Dias Letivos Restantes no Mês"
          value={120}
          leftSection={<IconCalendarStats size={40} />}
          contentInfo="Número de dias letivos restantes no mês corrente."
        />
      </GridCol>
    </Grid>
  );
}
