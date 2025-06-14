import { Sparkline } from '@mantine/charts';
import { Card, Group, Stack, Text, Tooltip } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import { ReactNode } from 'react';

interface Props {
  title: string;
  value: number;
  leftSection?: ReactNode;
  contentInfo?: string;
}

export default function CardStatisticHome(props: Props) {
  return (
    <Card shadow="sm" radius="md">
      <div
        style={{
          position: 'absolute',
          top: 9,
          width: '100%',
          height: '100%',
          zIndex: 40,
          opacity: 0.9,
          pointerEvents: 'none',
        }}
      >
        <Sparkline
          data={[10, 20, 15, 30, 50]}
          color="primary"
          curveType="monotone"
          strokeWidth={0}
          w="100%"
          h="100%"
        />
      </div>

      <Group gap="md" wrap="nowrap">
        {props.leftSection && props.leftSection}

        <Stack gap="xs" w="100%">
          <Group justify="space-between" wrap="nowrap">
            <Text fz="sm" fw={600} c="dimmed" lh={1} lineClamp={1}>
              {props.title}
            </Text>

            <Tooltip
              label={props.contentInfo}
              color="primary"
              multiline
              w={220}
              transitionProps={{ transition: 'skew-down', duration: 500 }}
            >
              <IconInfoCircle size={18} cursor="pointer" />
            </Tooltip>
          </Group>

          <Text fz="xl" fw="bold" lh={1}>
            {props.value}
          </Text>
        </Stack>
      </Group>
    </Card>
  );
}
