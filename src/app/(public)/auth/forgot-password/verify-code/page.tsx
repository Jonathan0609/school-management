import VerifyCodeForm from '@/components/Auth/ForgotPassword/VerifyCodeForm';
import { Stack, Text, Title } from '@mantine/core';

export default function VerifyCodePage() {
  return (
    <Stack p="xl" justify="center" h="100%">
      <Stack gap={4}>
        <Title order={3} lh={1} c="primary">
          Confirmação de código
        </Title>

        <Text lh={1} c="dimmed">
          Informe o código de 6 digitos enviado em seu e-mail!
        </Text>
      </Stack>

      <VerifyCodeForm />
    </Stack>
  );
}
