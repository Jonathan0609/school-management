'use client';

import {
  AppShell,
  AppShellMain,
  AppShellNavbar,
  Group,
  NavLink,
  Stack,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ReactNode } from 'react';

import { IconChevronRight } from '@tabler/icons-react';
import { routes } from '@/core/constants/routes';
import { usePathname } from 'next/navigation';
import LayoutPrivateHeader from '@/components/Layout/LayoutPrivate/LayoutPrivateHeader';

import classes from './styles.module.css';

export default function LayoutPrivate({ children }: { children: ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  const pathname = usePathname();

  return (
    <AppShell
      padding={0}
      layout="alt"
      header={{ height: 60 }}
      navbar={{
        width: 270,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
    >
      <LayoutPrivateHeader opened={opened} toggle={toggle} />

      <AppShellNavbar p="md">
        <Stack gap="xl">
          <Group justify="center">Ponte 21</Group>

          <Stack gap="xs">
            {routes.map((route) => (
              <NavLink
                key={route.key}
                href={route.href}
                label={route.label}
                leftSection={route.icon}
                rightSection={<IconChevronRight size={14} />}
                variant="subtle"
                active={pathname.includes(route.key)}
                onClick={toggle}
              />
            ))}
          </Stack>
        </Stack>
      </AppShellNavbar>

      <AppShellMain className={classes.main}>{children}</AppShellMain>
    </AppShell>
  );
}
