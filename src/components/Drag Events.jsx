import  { useState } from 'react';
import Draggable from 'react-draggable';

function DragWithEvents() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };
console.log("position", position)
  return (
    <div>
      <Draggable
        position={position}
        onDrag={handleDrag}
      >
        <div className="box" style={{ width: '200px', height: '200px', background: 'lightgoldenrodyellow', border: '1px solid yellow' }}>
          Drag me with events
        </div>
      </Draggable>
      <p>Position: {`x: ${position.x}, y: ${position.y}`}</p>
    </div>
  );
}

export default DragWithEvents;
