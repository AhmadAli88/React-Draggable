import Draggable from 'react-draggable';

function RestrictedArea() {
  return (
    <Draggable bounds='parent'>
      <div
        className='box'
        style={{
          width: '200px',
          height: '200px',
          background: 'lightgreen',
          border: '1px solid green',
        }}
      >
        Drag me within parent
      </div>
    </Draggable>
  );
}

export default RestrictedArea;
