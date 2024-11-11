
import Draggable from 'react-draggable';

function GridSnapping() {
  return (
    <Draggable grid={[50, 50]}>
      <div className="box" style={{ width: '200px', height: '200px', background: 'lightcoral', border: '1px solid red' }}>
        Snap to grid
      </div>
    </Draggable>
  );
}

export default GridSnapping;
