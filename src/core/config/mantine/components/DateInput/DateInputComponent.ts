import { DateInput } from '@mantine/dates';

export const DateInputComponent = DateInput.extend({
  defaultProps: {
    valueFormat: 'DD/MM/YYYY',
  },
});
