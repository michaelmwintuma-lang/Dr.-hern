import React, { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, title, description }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay active" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target.classList.contains('modal-overlay')) {
          onClose();
        }
      }}
    >
      <div className="modal-content" tabIndex="-1" ref={modalRef}>
        <button type="button" className="modal-close" aria-label="Close modal" onClick={onClose}>✕</button>
        <h2 id="modal-title" className="modal-title">{title}</h2>
        <div className="modal-desc" dangerouslySetInnerHTML={{ __html: description }} />
        <a href="#volunteer" className="btn btn-primary modal-btn" onClick={onClose}>Get Involved</a>
      </div>
    </div>
  );
};

export default Modal;
