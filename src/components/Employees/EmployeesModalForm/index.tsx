'use client';

import { InputCpfCnpj } from '@/components/_common/Inputs/InputCpfCnpj';
import { InputPhone } from '@/components/_common/Inputs/InputPhone';
import {
  Button,
  Checkbox,
  Grid,
  GridCol,
  Modal,
  ModalProps,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { IconDisc } from '@tabler/icons-react';
import EmployeesDocumentsForm from './EmployeesDocumentsForm';
import {
  EmployeeFormProvider,
  EmployeeFormValues,
  useEmployeeForm,
} from './form.context';

export default function EmployeesModalForm(props: ModalProps) {
  const form = useEmployeeForm({ mode: 'uncontrolled' });

  const handleSubmit = (values: EmployeeFormValues) => {
    console.log(values);
  };

  return (
    <Modal title="Cadastro de funcionário" size="xl" {...props}>
      <EmployeeFormProvider form={form}>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack gap="md">
            <Stack gap="sm">
              <Text c="dimmed" fw={600} fz="md">
                Dados gerais
              </Text>

              <Grid gutter="xs">
                <GridCol span={9}>
                  <TextInput
                    withAsterisk
                    label="Nome completo"
                    placeholder="Informe o nome completo"
                    {...form.getInputProps('fullName')}
                    key={form.key('fullName')}
                  />
                </GridCol>

                <GridCol span={3}>
                  <DateInput
                    withAsterisk
                    label="Data de nascimento"
                    placeholder="Informe uma data"
                    {...form.getInputProps('birthDate')}
                    key={form.key('birthDate')}
                  />
                </GridCol>

                <GridCol span={4}>
                  <InputCpfCnpj
                    withAsterisk
                    label="CPF"
                    placeholder="Informe um cpf"
                    {...form.getInputProps('cpf')}
                    key={form.key('cpf')}
                  />
                </GridCol>

                <GridCol span={4}>
                  <InputPhone
                    withAsterisk
                    label="Celular/Telefone"
                    placeholder="(31) 90000-0000"
                    {...form.getInputProps('phone')}
                    key={form.key('phone')}
                  />
                </GridCol>

                <GridCol span={4}>
                  <TextInput
                    label="Email"
                    placeholder="exemplo@gmail.com"
                    {...form.getInputProps('email')}
                    key={form.key('email')}
                  />
                </GridCol>

                <GridCol span={4}>
                  <Select
                    label="Gênero"
                    placeholder="Informe um gênero"
                    data={[
                      { label: 'Masculino', value: 'MALE' },
                      { label: 'Feminino', value: 'FEMALE' },
                      { label: 'Não informar', value: 'UNDEFINED' },
                    ]}
                    {...form.getInputProps('gender')}
                    key={form.key('gender')}
                  />
                </GridCol>
              </Grid>
            </Stack>

            <Stack gap="sm">
              <Text c="dimmed" fw={600} fz="md">
                Dados profissionais
              </Text>

              <Grid gutter="xs">
                <GridCol span={4}>
                  <Select
                    label="Função"
                    placeholder="Informe uma função"
                    withAsterisk
                    data={[
                      { label: 'Professora', value: 'teacher' },
                      { label: 'Monitora', value: 'monitor' },
                      { label: 'Diretora', value: 'principal' },
                      {
                        label: 'Coordenadora Pedagógica',
                        value: 'pedagogical_coordinator',
                      },
                      {
                        label: 'Secretária Escolar',
                        value: 'school_secretary',
                      },
                      { label: 'Auxiliar de Sala', value: 'assistant' },
                      {
                        label: 'Psicopedagoga',
                        value: 'educational_psychologist',
                      },
                      {
                        label: 'Orientadora Educacional',
                        value: 'educational_advisor',
                      },
                      {
                        label: 'Inspetora de Alunos',
                        value: 'student_inspector',
                      },
                      { label: 'Faxineira', value: 'cleaning_staff' },
                      { label: 'Zeladora', value: 'caretaker' },
                      { label: 'Porteira', value: 'gatekeeper' },
                      { label: 'Cozinheira', value: 'cook' },
                      { label: 'Bibliotecária', value: 'librarian' },
                      { label: 'TI / Suporte Técnico', value: 'it_support' },
                      {
                        label: 'Financeiro / Administrativo',
                        value: 'admin_financial',
                      },
                    ]}
                    {...form.getInputProps('role')}
                    key={form.key('role')}
                  />
                </GridCol>

                <GridCol span={4}>
                  <Select
                    label="Horário"
                    placeholder="Informe um horário"
                    withAsterisk
                    data={[
                      { label: 'Manhã', value: 'morning' },
                      { label: 'Tarde', value: 'afternoon' },
                      { label: 'Noite', value: 'night' },
                    ]}
                    {...form.getInputProps('workShift')}
                    key={form.key('workShift')}
                  />
                </GridCol>

                <GridCol span={12}>
                  <Textarea
                    label="Anotações"
                    placeholder="Informe as anotações"
                    withAsterisk
                    {...form.getInputProps('notes')}
                    key={form.key('notes')}
                  />
                </GridCol>

                <GridCol span={12}>
                  <Checkbox
                    label="Acesso ao sistema?"
                    {...form.getInputProps('hasSystemAccess', {
                      type: 'checkbox',
                    })}
                    key={form.key('hasSystemAccess')}
                  />
                </GridCol>
              </Grid>

              <Grid>
                <GridCol span={12}>
                  <EmployeesDocumentsForm />
                </GridCol>
              </Grid>
            </Stack>

            <Grid>
              <GridCol span="auto" mr="auto">
                <Button
                  onClick={() => {
                    props.onClose();
                    form.reset();
                  }}
                  variant="default"
                >
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
      </EmployeeFormProvider>
    </Modal>
  );
}
