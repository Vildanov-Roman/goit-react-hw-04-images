import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { Img, Item } from './ImageGalleryItem.styled';
import { Loader } from 'components/Loader/Loader';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;
    const { item } = this.props;
    return (
      <>
        <Item>
          <Img
            src={item.webformatURL}
            alt={item.tags}
            onClick={this.openModal}
          />
        </Item>
        {showModal && (
          <Modal onCloseModal={this.closeModal}>
            <img src={item.largeImageURL} alt={item.tags} />
          </Modal>
        )}
        {showModal && <Loader />}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  item: PropTypes.object,
};
