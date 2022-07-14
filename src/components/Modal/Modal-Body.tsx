import { DialogContent } from '@mui/material';

interface IProps {
  children: any;
}

export const ModalBody = (props: IProps) => {
  const { children } = props;

  return <DialogContent dividers>{children}</DialogContent>;
};
