import Draggable from 'react-draggable';

function CustomHandle() {
  return (
    <Draggable handle='.handle'>
      <div
        className='box'
        style={{
          width: '200px',
          height: '200px',
          background: 'lightseagreen',
          border: '1px solid green',
        }}
      >
        <div className='handle' style={{ background: 'gray', padding: '10px' }}>
          Drag from here
        </div>
        Content of the box
      </div>
    </Draggable>
  );
}

export default CustomHandle;
