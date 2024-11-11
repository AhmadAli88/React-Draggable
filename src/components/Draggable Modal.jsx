import { useState } from 'react';
import Draggable from 'react-draggable';

function DraggableModal() {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <Draggable>
      <div className="modal" style={{ padding: '20px', background: 'white', border: '1px solid black', width: '300px' }}>
        <h3>Draggable Modal</h3>
        <p>This is a draggable modal. You can move it around!</p>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </div>
    </Draggable>
  ) : null;
}

export default DraggableModal;
