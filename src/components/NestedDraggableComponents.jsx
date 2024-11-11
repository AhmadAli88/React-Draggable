import Draggable from 'react-draggable';

function NestedDraggable() {
  return (
    <Draggable>
      <div
        className='box'
        style={{
          width: '200px',
          height: '200px',
          background: 'lightyellow',
          border: '1px solid yellow',
        }}
      >
        Outer Box
        <Draggable>
          <div
            className='box'
            style={{
              width: '100px',
              height: '100px',
              background: 'lightblue',
              marginTop: '50px',
            }}
          >
            Inner Box
          </div>
        </Draggable>
      </div>
    </Draggable>
  );
}

export default NestedDraggable;
