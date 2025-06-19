import UpdatePasswordForm from '@/components/Auth/ForgotPassword/UpdatePasswordForm';
import { Stack, Text, Title } from '@mantine/core';

export default function UpdatePasswordPage() {
  return (
    <Stack p="xl" justify="center" h="100%">
      <Stack gap={4}>
        <Title order={3} lh={1} c="primary">
          Alterar senha
        </Title>

        <Text lh={1} c="dimmed">
          Informe a senha que deseja e confirme
        </Text>
      </Stack>

      <UpdatePasswordForm />
    </Stack>
  );
}
