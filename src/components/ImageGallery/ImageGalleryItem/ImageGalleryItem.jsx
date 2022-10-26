import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { Img, Item } from './ImageGalleryItem.styled';
import { Loader } from 'components/Loader/Loader';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ item }) => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };  
    
  return (
    <>
      <Item>
        <Img
          src={item.webformatURL}
          alt={item.tags}
          onClick={openModal}
        />
      </Item>
      {showModal && (
        <Modal onCloseModal={closeModal}>
          <img src={item.largeImageURL} alt={item.tags} />
        </Modal>
      )}
      {showModal && <Loader />}
    </>
  );
}


ImageGalleryItem.propTypes = {
  item: PropTypes.object,
};
