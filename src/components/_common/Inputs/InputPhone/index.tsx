import { TextInput, TextInputProps } from '@mantine/core';
import { useState } from 'react';

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '');

  if (digits.length <= 10) {
    return digits
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2');
  } else {
    return digits
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2');
  }
}

export function InputPhone(props: TextInputProps) {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);

    setValue(formatted);
  };

  return (
    <TextInput
      {...props}
      value={value}
      onChange={handleChange}
      maxLength={15}
    />
  );
}
