'use client';

import { Stack, Group, ActionIcon, Text } from '@mantine/core';
import { Dropzone, DropzoneAccept, DropzoneReject } from '@mantine/dropzone';
import {
  IconUpload,
  IconX,
  IconPhoto,
  IconFileTypePdf,
  IconTrash,
} from '@tabler/icons-react';
import { useEmployeeFormContext } from '../form.context';
import { useEffect, useState } from 'react';

export default function EmployeesDocumentsForm() {
  const [files, setFiles] = useState<File[]>([]);

  const formContext = useEmployeeFormContext();

  useEffect(() => {
    formContext.setFieldValue('files', files);
  }, [files, formContext]);

  return (
    <Stack gap="sm">
      <Text c="dimmed" fw={600} fz="md">
        Documentos
      </Text>

      <Dropzone
        onDrop={(files) => setFiles((prev) => [...prev, ...files])}
        maxSize={5 * 1024 ** 2}
      >
        <Group
          justify="center"
          gap="md"
          style={{ pointerEvents: 'none' }}
          wrap="nowrap"
        >
          <DropzoneAccept>
            <IconUpload
              size={30}
              color="var(--mantine-color-blue-6)"
              stroke={1.5}
            />
          </DropzoneAccept>

          <DropzoneReject>
            <IconX size={30} color="var(--mantine-color-red-6)" stroke={1.5} />
          </DropzoneReject>

          <Dropzone.Idle>
            <Group gap="xs">
              <IconPhoto size={30} color="var(--mantine-color-dimmed)" />

              <IconFileTypePdf size={30} color="var(--mantine-color-dimmed)" />
            </Group>
          </Dropzone.Idle>

          <Stack gap={0}>
            <Text size="lg" inline>
              Arquivos
            </Text>

            <Text size="sm" c="dimmed" inline mt={7}>
              Anexe aqui todos os documentos do profissional
            </Text>
          </Stack>
        </Group>
      </Dropzone>

      <Stack gap="xs">
        {formContext.getValues().files?.map((file, index) => (
          <Group key={index} justify="space-between">
            <Text>{file.name}</Text>

            <ActionIcon
              variant="subtle"
              color="red"
              size="input-xs"
              onClick={() =>
                setFiles((prev) =>
                  prev.filter((_, indexFilter) => indexFilter !== index)
                )
              }
            >
              <IconTrash size={18} />
            </ActionIcon>
          </Group>
        ))}
      </Stack>
    </Stack>
  );
}
