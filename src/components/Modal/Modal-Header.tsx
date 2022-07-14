import { DialogTitle } from '@mui/material';

interface IProps {
  title: any;
}

export const ModalHeader = (props: IProps) => {
  const { title } = props;

  return <DialogTitle>{title}</DialogTitle>;
};
