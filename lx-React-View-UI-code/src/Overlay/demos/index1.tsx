import React, {useState} from 'react';
import Overlay from '../index';
import {Button} from "@/index";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenOverlay = () => {
    console.log(true)
    setIsOpen(true);
  };
  const handleCloseOverlay = () => {
    console.log(false)
    setIsOpen(false);
  }
  return (
    <div>
      <Button onClick={handleOpenOverlay}>Open Overlay</Button>
      <div onClick={handleCloseOverlay}>
        {
          isOpen
            ? <Overlay isOpen={isOpen} onClose={handleCloseOverlay}>
            </Overlay>
            : <></>
        }
      </div>
    </div>
  );
}

export default App;
