'use client';

import {
  Stack,
  Grid,
  GridCol,
  TextInput,
  PasswordInput,
  Group,
  Anchor,
  Button,
} from '@mantine/core';
import Link from 'next/link';

export default function LoginForm() {
  return (
    <form>
      <Stack gap="md" w="100%">
        <Grid>
          <GridCol span={12}>
            <TextInput placeholder="E-mail" type="email" radius="md" />
          </GridCol>

          <GridCol span={12}>
            <PasswordInput placeholder="Senha" radius="md" />
          </GridCol>
        </Grid>

        <Group justify="end">
          <Anchor
            href="https://mantine.dev/"
            underline="never"
            fw={600}
            fz="sm"
            c="dimmed"
          >
            Esqueceu a senha?
          </Anchor>
        </Group>

        <Button component={Link} href="/home" size="sm" fullWidth>
          Entrar
        </Button>
      </Stack>
    </form>
  );
}
