import React, {useState} from 'react';
import './App.css';
import Modal from './Modal';

const App = () => {
      const [isModal, setModal] = useState(false);
      const onClose = () => setModal(false);
      const handleButton = () => setModal(true)

      return (
        <>
            <button className="button" onClick={handleButton}>Open Modal</button>
            <Modal isOpen={isModal} onClose={onClose}>
                <h1>Title</h1>
            </Modal>
        </>
      );
}

export default App;
