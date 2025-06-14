import { ActionIcon, Tooltip } from '@mantine/core';
import { IconSchool } from '@tabler/icons-react';

export default function ManagerStudentsAction() {
  return (
    <Tooltip label="Gerenciar alunos" position="left" color="primary">
      <ActionIcon variant="subtle">
        <IconSchool size={18} />
      </ActionIcon>
    </Tooltip>
  );
}
