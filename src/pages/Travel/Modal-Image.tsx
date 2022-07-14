import { Modal, ModalBody, ModalHeader } from '../../components';
import { ITravelItem } from './type';

interface IProps {
  selectedImage: ITravelItem;
  open: boolean;
  onClose: () => void;
}

export const ModalImage = (props: IProps) => {
  const { selectedImage, open, onClose } = props;

  return (
    <Modal open={open} onClose={() => onClose()}>
      <ModalHeader title={selectedImage.title} />
      <ModalBody>
        <img
          src={selectedImage.imagePath}
          alt={`travel-${selectedImage}-city`}
          style={{ width: '100%', borderRadius: '2px' }}
        />
      </ModalBody>
    </Modal>
  );
};
