import { Anchor, Breadcrumbs, BreadcrumbsProps } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';

interface Props extends Omit<BreadcrumbsProps, 'separator' | 'children'> {
  data: { title: string; href: string }[];
}

export default function BreadcrumbCommon({ data, ...props }: Props) {
  return (
    <Breadcrumbs separator={<IconChevronRight size={14} />} {...props}>
      {data.map((item, index) => (
        <Anchor
          key={index}
          href={item.href}
          underline="never"
          fw="bold"
          c="dimmed"
          fz="md"
        >
          {item.title}
        </Anchor>
      ))}
    </Breadcrumbs>
  );
}
