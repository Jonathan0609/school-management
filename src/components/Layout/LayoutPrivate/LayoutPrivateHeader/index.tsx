import {
  AppShellHeader,
  Grid,
  GridCol,
  Burger,
  Group,
  Avatar,
  useMantineColorScheme,
  ActionIcon,
} from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { useState, useEffect, useMemo } from 'react';

interface Props {
  opened: boolean;
  toggle: () => void;
}

export default function LayoutPrivateHeader(props: Props) {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = useMemo(() => colorScheme === 'dark', [colorScheme]);

  return (
    <AppShellHeader p="lg">
      <Grid p={0}>
        <GridCol
          span="auto"
          p={0}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Burger
            opened={props.opened}
            onClick={props.toggle}
            size="sm"
            hiddenFrom="sm"
          />
        </GridCol>

        <GridCol span="content" p={0}>
          <Group w="100%" gap="md" align="center">
            {mounted && (
              <ActionIcon
                onClick={() => setColorScheme(isDark ? 'light' : 'dark')}
                variant="transparent"
                size="sm"
              >
                {!isDark ? <IconMoon /> : <IconSun />}
              </ActionIcon>
            )}

            <Avatar size="md" name="Jonathan Cristian" color="initials" />
          </Group>
        </GridCol>
      </Grid>
    </AppShellHeader>
  );
}
