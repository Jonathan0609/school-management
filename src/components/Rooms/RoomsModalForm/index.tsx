'use client';

import {
  Button,
  Grid,
  GridCol,
  Modal,
  ModalProps,
  Select,
  Stack,
  TextInput,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { IconDisc } from '@tabler/icons-react';
import {
  RoomsFormValues,
  TeachingStage,
  teachingStageLabel,
} from './form.context';

export default function RoomsModalForm(props: ModalProps) {
  const form = useForm<RoomsFormValues>({ mode: 'uncontrolled' });

  const handleSubmit = (values: RoomsFormValues) => {
    console.log(values);
  };

  const handleClose = () => {
    form.reset();
    props.onClose();
  };

  return (
    <Modal {...props} title="Cadastro de turma" size="xl" onClose={handleClose}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          <Grid gutter="xs">
            <GridCol span={{ base: 12, md: 3 }}>
              <TextInput
                withAsterisk
                label="Código"
                placeholder="Ex: 1A2025"
                {...form.getInputProps('code')}
                key={form.key('code')}
              />
            </GridCol>

            <GridCol span={{ base: 6, md: 9 }}>
              <TextInput
                withAsterisk
                label="Nome"
                placeholder="Informe o nome da turma"
                {...form.getInputProps('name')}
                key={form.key('name')}
              />
            </GridCol>

            <GridCol span={{ base: 6, md: 4 }}>
              <DateInput
                withAsterisk
                label="Ano letivo"
                placeholder="Informe uma ano"
                {...form.getInputProps('schoolYear')}
                key={form.key('schoolYear')}
              />
            </GridCol>

            <GridCol span={{ base: 6, md: 4 }}>
              <Select
                withAsterisk
                label="Etapa de ensino"
                data={Object.values(TeachingStage).map((teachingStage) => ({
                  value: teachingStage,
                  label: teachingStageLabel[teachingStage],
                }))}
                {...form.getInputProps('teachingStage')}
                key={form.key('teachingStage')}
              />
            </GridCol>

            <GridCol span={{ base: 6, md: 4 }}>
              <Select
                label="Turno"
                placeholder="Informe um turno"
                withAsterisk
                data={[
                  { label: 'Manhã', value: 'morning' },
                  { label: 'Tarde', value: 'afternoon' },
                  { label: 'Noite', value: 'night' },
                ]}
                {...form.getInputProps('shift')}
                key={form.key('shift')}
              />
            </GridCol>
          </Grid>
          <Grid>
            <GridCol span="auto" mr="auto">
              <Button onClick={handleClose} variant="default">
                Cancelar
              </Button>
            </GridCol>

            <GridCol span="content">
              <Button type="submit" leftSection={<IconDisc size={18} />}>
                Cadastrar
              </Button>
            </GridCol>
          </Grid>
        </Stack>
      </form>
    </Modal>
  );
}
