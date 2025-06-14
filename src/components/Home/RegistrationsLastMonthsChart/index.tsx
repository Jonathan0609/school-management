import CardChart from '@/components/_common/CardChart';
import { LineChart } from '@mantine/charts';

export const data = [
  {
    month: 'Jan.',
    registrations: 120,
  },
  {
    month: 'Fev.',
    registrations: 90,
  },
  {
    month: 'Mar.',
    registrations: 70,
  },
  {
    month: 'Abr.',
    registrations: 34,
  },
  {
    month: 'Mai.',
    registrations: 39,
  },
  {
    month: 'Jun.',
    registrations: 21,
  },
  {
    month: 'Jul.',
    registrations: 10,
  },
  {
    month: 'Ago.',
    registrations: 3,
  },
  {
    month: 'Set.',
    registrations: 4,
  },
  {
    month: 'Out.',
    registrations: 5,
  },
  {
    month: 'Nov.',
    registrations: 3,
  },
  {
    month: 'Dez.',
    registrations: 0,
  },
];

export default function RegistrationsLastMonthsChart() {
  return (
    <CardChart
      title="Evolução das Matrículas nos Últimos 12 Meses"
      contentInfo="Acompanhar o crescimento ou declínio no número de matrículas ao longo do tempo."
      chart={
        <LineChart
          h={300}
          data={data}
          dataKey="month"
          series={[
            { name: 'registrations', color: 'primary.6', label: 'Matrículas' },
          ]}
          curveType="natural"
        />
      }
    />
  );
}
