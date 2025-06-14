import { Modal } from '@mantine/core';

export const ModalComponent = Modal.extend({
  defaultProps: {
    radius: 'lg',
  },
  styles: {
    title: {
      fontWeight: 600,
    },
  },
});
