import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import classes from "./modal.module.css";

export const ModalForm = ({ isOpenModal, setIsOpenModal, children }) => {
  return (
    <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)} center>
      <div className={classes.modal}>{children}</div>
    </Modal>
  );
};
