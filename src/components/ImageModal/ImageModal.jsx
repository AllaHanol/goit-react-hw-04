import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, closeModal, imgUrl, imgAlt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: "rgba(19, 19, 19, 0.5)",
        },
        content: {
          padding: "0",
          height: "max-content",
          overflow: "hidden",
        },
      }}
    >
      <img className={css.modalImage} src={imgUrl} alt={imgAlt} />
    </Modal>
  );
};

export default ImageModal;



// import { Modal } from 'modal';
// import css from './ImageModal.module.css';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     maxWidth: '90%',
//     maxHeight: '90%',
//   },
//   overlay: {
//     backgroundColor: 'rgba(0, 0, 0, 0.75)',
//   },
// };

// const ImageModal = ({ largeImageURL, onClose }) => {
//   return (
//     <Modal isOpen={true} onRequestClose={onClose} style={customStyles}>
//           <button className={css.closeButton} onClick={onClose}>X</button>
//           <img src={largeImageURL} alt="" className={css.modalImage} />
//     </Modal>
//   );
// };

// export default ImageModal;


