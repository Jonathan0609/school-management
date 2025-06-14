import LayoutPrivate from '@/components/Layout/LayoutPrivate';

export default function AppPrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutPrivate>{children}</LayoutPrivate>;
}
