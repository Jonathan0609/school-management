import { Anchor, Stack, Text, Title } from '@mantine/core';
import dayjs from 'dayjs';

import LoginForm from '@/components/Auth/Login/LoginForm';
import Link from 'next/link';

export default function LoginPage() {
  const handleGreeting = () => {
    if (dayjs().hour() >= 18) {
      return 'Boa noite';
    }

    if (dayjs().hour() >= 12 && dayjs().hour() < 18) {
      return 'Boa tarde';
    }

    return 'Bom dia';
  };

  return (
    <Stack p="xl" justify="center" h="100%">
      <Stack gap={0}>
        <Title order={3} lh={1} c="dimmed">
          Hello!
        </Title>

        <Title order={2} lh={1} c="primary" textWrap="nowrap">
          {handleGreeting()}
        </Title>
      </Stack>

      <Stack gap="sm">
        <Text
          fz="xl"
          fw={700}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          Entre na sua conta
        </Text>

        <LoginForm />
      </Stack>

      <Anchor
        href="https://mantine.dev/"
        component={Link}
        underline="never"
        fw={600}
        fz="sm"
        c="dimmed"
        ta="center"
      >
        Política de privacidade
      </Anchor>
    </Stack>
  );
}
