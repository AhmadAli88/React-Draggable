import { useState } from 'react';
import Draggable from 'react-draggable';

function MultipleDraggables() {
  const [positions, setPositions] = useState({
    1: { x: 0, y: 0 },
    2: { x: 0, y: 100 },
    3: { x: 0, y: 200 }
  });

  const handleDrag = (e, data, id) => {
    setPositions(prev => ({
      ...prev,
      [id]: { x: data.x, y: data.y }
    }));
  };

  return (
    <div>
      {Object.keys(positions).map(id => (
        <Draggable
          key={id}
          position={positions[id]}
          onDrag={(e, data) => handleDrag(e, data, id)}
        >
          <div
            className="box"
            style={{
              width: '200px',
              height: '200px',
              background: 'lightpink',
              border: '1px solid pink',
              marginBottom: '10px'
            }}
          >
            Drag me {id}
          </div>
        </Draggable>
      ))}
    </div>
  );
}

export default MultipleDraggables;
