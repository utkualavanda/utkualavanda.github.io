import { Dialog, DialogProps, IconButton } from '@mui/material';
import { Clear as ClearIcon } from '@mui/icons-material';
import { LoadingModal } from '../../components';

interface IProps extends DialogProps {
  children: any;
  open: boolean;
  onClose: () => void;
  onBackdropClick?: () => void;
  loading?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Modal = (props: IProps) => {
  const {
    children,
    open,
    onClose,
    onBackdropClick,
    loading = false,
    size = 'sm',
    ...rest
  } = props;

  return (
    <>
      <Dialog
        open={open}
        maxWidth={size}
        onBackdropClick={() =>
          onBackdropClick ? onBackdropClick() : onClose()
        }
        fullWidth
        {...rest}
      >
        <IconButton
          className="custom-modal-exit-button"
          onClick={() => onClose()}
        >
          <ClearIcon />
        </IconButton>
        {children}
      </Dialog>
      {loading && <LoadingModal />}
    </>
  );
};
