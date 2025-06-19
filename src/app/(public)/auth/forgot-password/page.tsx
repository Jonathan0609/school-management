import ForgotPasswordForm from '@/components/Auth/ForgotPassword/ForgotPasswordForm';
import { Stack, Text, Title } from '@mantine/core';

export default function ForgotPasswordPage() {
  return (
    <Stack p="xl" justify="center" h="100%">
      <Stack gap={4}>
        <Title order={3} lh={1} c="primary">
          Esqueceu a senha?
        </Title>

        <Text lh={1} c="dimmed">
          Informe seu e-mail e com um código de confirmação!
        </Text>
      </Stack>

      <ForgotPasswordForm />
    </Stack>
  );
}
