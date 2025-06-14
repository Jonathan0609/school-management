export function toPhoneMask(value: string): string {
  const numbers = value.replace(/\D/g, '');

  if (numbers.length === 10) {
    return numbers.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  } else if (numbers.length === 11) {
    return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else {
    return 'Número inválido para telefone';
  }
}
