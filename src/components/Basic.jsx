import Draggable from 'react-draggable';

function BasicDraggable() {
  return (
    <Draggable>
      <div
        className='box'
        style={{
          width: '200px',
          height: '200px',
          background: 'lightblue',
          border: '1px solid blue',
        }}
      >
        Drag me!
      </div>
    </Draggable>
  );
}

export default BasicDraggable;
