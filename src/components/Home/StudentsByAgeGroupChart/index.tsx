import CardChart from '@/components/_common/CardChart';
import { BarChart } from '@mantine/charts';

export default function StudentsByAgeGroupChart() {
  const data = [
    { age: '1 ano', quanitty: 34 },
    { age: '2 anos', quanitty: 25 },
    { age: '3 anos', quanitty: 19 },
    { age: '4 anos', quanitty: 28 },
    { age: '5 anos', quanitty: 45 },
    { age: '6 anos', quanitty: 50 },
  ];

  return (
    <CardChart
      title="Distribuição de Alunos por Faixa Etária"
      contentInfo="Visualizar a quantidade de alunos em cada faixa etária."
      chart={
        <BarChart
          h={300}
          data={data}
          dataKey="age"
          barProps={{ radius: 6 }}
          series={[
            { name: 'quanitty', color: 'primary.6', label: 'Quantidade' },
          ]}
        />
      }
    />
  );
}
