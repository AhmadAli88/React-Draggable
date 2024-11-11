
import './App.css'
import BasicDraggable from './components/Basic'
import DragWithEvents from './components/Drag Events'
import DraggableModal from './components/Draggable Modal'
import CustomHandle from './components/Draggable with Custom Handles'
import MultipleDraggables from './components/Dynamic Dragging'
import GridSnapping from './components/Grid Snapping'
import NestedDraggable from './components/NestedDraggableComponents'
import RestrictedArea from './components/Restricting'

function App() {


  return (
   <div>
    <BasicDraggable/>
    <RestrictedArea/>
    <GridSnapping/>
    <DragWithEvents/>
    <MultipleDraggables/>
    <CustomHandle/>
    <DraggableModal/>
    <NestedDraggable/>
   </div>
  )
}

export default App
