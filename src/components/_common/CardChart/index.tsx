import { Card, Group, Stack, Text, Tooltip } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import { ReactNode } from 'react';

interface Props {
  chart: ReactNode;
  title: string;
  contentInfo: string;
}

export default function CardChart(props: Props) {
  return (
    <Card shadow="sm" radius="md">
      <Stack gap="lg" w="100%">
        <Group justify="space-between" wrap="nowrap">
          <Text fz="sm" fw={600} c="dimmed">
            {props.title}
          </Text>

          <Tooltip
            label={props.contentInfo}
            color="primary"
            multiline
            w={220}
            transitionProps={{ transition: 'skew-down', duration: 400 }}
            events={{ hover: true, focus: false, touch: true }}
          >
            <IconInfoCircle size={18} cursor="pointer" />
          </Tooltip>
        </Group>

        {props.chart && props.chart}
      </Stack>
    </Card>
  );
}
