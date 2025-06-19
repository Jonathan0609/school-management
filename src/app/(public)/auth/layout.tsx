import { Card, Grid, GridCol, Group } from '@mantine/core';
import { ReactNode } from 'react';
import logo from '@/../public/logo-login.png';

import classes from './styles.module.css';
import Image from 'next/image';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Group justify="center" className={classes.root}>
      <Card radius="lg" shadow="xs" p={0}>
        <Grid>
          <GridCol span={{ base: 12, md: 'auto' }} p={0}>
            <Image src={logo} alt="Logo" className={classes.image} />
          </GridCol>

          <GridCol span={{ base: 12, md: 'content' }} p={0} w={400}>
            {children}
          </GridCol>
        </Grid>
      </Card>
    </Group>
  );
}
