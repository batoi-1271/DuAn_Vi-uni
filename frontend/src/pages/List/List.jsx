import  Modal  from './Components/Modal';
import React, {useState} from 'react';
import './list.scss';

const Lits = () => {

  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="list">
      <button onClick={() => Toggle()}>Modal</button>

       <Modal show={modal} close = {Toggle} title = "Dynamic Title">
            This is modal dynamic content
         </Modal>
    </div>
  );
}
 
export default Lits;