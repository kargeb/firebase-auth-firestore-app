import React, { useState } from 'react';

const LogOutConfirm = () => {
  const [isActive, setIsActive] = useState('is-active');

  const handleClick = () => {
    setIsActive('');
  };

  return (
    <div className={`modal ${isActive}`}>
      <div className="modal-background" />
      <div className="modal-content">Any other Bulma elements you want</div>
      <button onClick={handleClick} className="modal-close is-large" aria-label="close" />
    </div>
  );
};

export default LogOutConfirm;
