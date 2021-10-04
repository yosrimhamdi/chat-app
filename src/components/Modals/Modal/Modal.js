import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.scss';
import Spinner from '../../Spinner/Spinner';
import closeIcon from './close.svg';

const Modal = ({ loading, title, children, isModalOpen, closeModal }) => {
  if (!isModalOpen) {
    return null;
  }

  let subComponentList = Object.keys(Modal);

  let subComponents = subComponentList.map(key => {
    return React.Children.map(children, child =>
      child.type.name === key ? child : null,
    );
  });

  const modal = (
    <div className="modal" onClick={closeModal}>
      <div className="modal__wrapper" onClick={e => e.stopPropagation()}>
        <div className="modal__content">
          <div className="modal__header">
            <h1 className="modal__title">{title}</h1>
            <div onClick={closeModal}>
              <img src={closeIcon} alt="close" className="modal__close-icon" />
            </div>
          </div>
          {subComponents[0]}
        </div>
        <div className="modal__actions">{subComponents[1]}</div>
        <Spinner visible={loading} />
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, document.getElementById('modal'));
};

const Actions = props => props.children;
const Content = props => props.children;
const Button = ({ children, onClick }) => (
  <button className="modal__button" onClick={onClick}>
    {children}
  </button>
);

const TextInput = ({ label, ...rest }) => (
  <>
    <label className="modal__input-label">{label}</label>
    <input className="modal__input" type="text" {...rest} />
  </>
);

Modal.Content = Content;
Modal.Actions = Actions;
Modal.Button = Button;
Modal.TextInput = TextInput;

export default Modal;
