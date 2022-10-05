import React, { useState } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import menuCatering from '../images/menuCatering.webp'
const ModalMenuCard = (args) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
      SPRAWDŹ
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args} className='modal-menu'>
        <ModalBody>
          <img src={menuCatering} alt='menu' className='modal-menu-img'/>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalMenuCard;