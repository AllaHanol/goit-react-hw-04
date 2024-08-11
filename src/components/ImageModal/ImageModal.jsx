import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

function ImageModal({ image, onClose }) {
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <ReactModal
      isOpen={!!image}
      onRequestClose={onClose}
      onKeyDown={handleKeyDown}
      shouldCloseOnOverlayClick={true}
      className="modal"
      overlayClassName="overlay"
    >
      <div>
        <img src={image.urls.regular} alt={image.alt_description} />
      </div>
      <button onClick={onClose}>Close</button>
    </ReactModal>
  );
}

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


