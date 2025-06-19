'use client';

import { Stack, Grid, GridCol, PasswordInput, Button } from '@mantine/core';
import Link from 'next/link';

export default function UpdatePasswordForm() {
  return (
    <form>
      <Stack gap="md" w="100%">
        <Grid>
          <GridCol span={12}>
            <PasswordInput placeholder="Senha" radius="md" />
          </GridCol>

          <GridCol span={12}>
            <PasswordInput placeholder="Confirme a senha" radius="md" />
          </GridCol>
        </Grid>

        <Button component={Link} href="/auth/login" size="sm" fullWidth>
          Alterar senha
        </Button>
      </Stack>
    </form>
  );
}
