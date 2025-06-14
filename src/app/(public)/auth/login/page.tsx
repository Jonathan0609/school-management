import {
  Anchor,
  Button,
  Grid,
  GridCol,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import dayjs from 'dayjs';

import logo from '@/../public/logo-login.png';
import Image from 'next/image';
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
    <Grid gutter={{ base: 0, xl: 120 }}>
      <GridCol span={{ base: 12, md: 6 }}>
        <Image src={logo} alt="Logo" style={{ height: '100%' }} />
      </GridCol>

      <GridCol span={{ base: 12, md: 6 }}>
        <Stack p="md" justify="center" h="100%">
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

            <Button variant="light" fullWidth>
              Criar conta
            </Button>
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
      </GridCol>
    </Grid>
  );
}
