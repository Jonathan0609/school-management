import './globals.css';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';

import { Montserrat } from 'next/font/google';

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import RootProvider from '@/components/Layout/RootProvider';
import { theme } from '@/core/config/mantine/theme';
import { DatesProvider } from '@mantine/dates';

export const metadata = {
  title: 'Gestão de escola',
};

export const montserrat = Montserrat({ subsets: ['latin'], display: 'swap' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>

      <body className={montserrat.className}>
        <MantineProvider theme={theme}>
          <Notifications position="bottom-center" />

          <DatesProvider settings={{ locale: 'pt-BR', firstDayOfWeek: 0 }}>
            <ModalsProvider>
              <RootProvider>{children}</RootProvider>
            </ModalsProvider>
          </DatesProvider>
        </MantineProvider>
      </body>
    </html>
  );
}

