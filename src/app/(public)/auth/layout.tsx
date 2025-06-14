import { Card, Group } from '@mantine/core';
import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Group
      justify="center"
      h="100vh"
      w="100%"
      bg="linear-gradient(135deg, #4FCB81 0%, #1F5449 100%)"
    >
      <Card radius="lg" shadow="xs" p={0}>
        {children}
      </Card>
    </Group>
  );
}
