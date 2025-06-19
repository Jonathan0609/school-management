'use client';

import { Stack, Grid, GridCol, Button, PinInput } from '@mantine/core';
import Link from 'next/link';

export default function VerifyCodeForm() {
  return (
    <form>
      <Stack gap="md" w="100%">
        <Grid>
          <GridCol span={12}>
            <PinInput
              length={6}
              size="lg"
              style={{ display: 'flex', justifyContent: 'center' }}
            />
          </GridCol>
        </Grid>

        <Button
          component={Link}
          href="verify-code/update-password"
          size="sm"
          fullWidth
        >
          Confirmar código
        </Button>
      </Stack>
    </form>
  );
}
