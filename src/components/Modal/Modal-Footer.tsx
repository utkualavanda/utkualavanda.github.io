interface IProps {
  children: any;
}

export const ModalFooter = (props: IProps) => {
  const { children } = props;

  return <div className="custom-modal-footer">{children}</div>;
};
