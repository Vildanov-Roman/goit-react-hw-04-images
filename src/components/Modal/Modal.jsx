import { Overlay, ModalWindow } from './Modal.styled';
import { createPortal } from 'react-dom';
import { Component } from 'react';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.onCloseModal();
      }
    });
  }

  closeModal = e => {
    if (e.target === e.currentTarget) {
      this.props.onCloseModal();
    }
  };
  render() {
    return createPortal(
      <Overlay onClick={this.closeModal}>
        <ModalWindow>{this.props.children}</ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.protoTypes = {
  onCloseModal: PropTypes.func,
  children: PropTypes.object,
};
