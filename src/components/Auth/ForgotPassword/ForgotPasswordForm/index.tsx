'use client';

import { Stack, Grid, GridCol, TextInput, Button } from '@mantine/core';
import Link from 'next/link';

export default function ForgotPasswordForm() {
  return (
    <form>
      <Stack gap="md" w="100%">
        <Grid>
          <GridCol span={12}>
            <TextInput placeholder="E-mail" type="email" radius="md" />
          </GridCol>
        </Grid>

        <Button
          component={Link}
          href="forgot-password/verify-code"
          size="sm"
          fullWidth
        >
          Enviar código
        </Button>
      </Stack>
    </form>
  );
}
