import { useState } from 'react';
import './Instructions.css';

function Instructions() {
  const [show, setShow] = useState(true)

  function handleShowHideClick() {
    setShow(!show)
  }

  return (
    <div className="Instructions">
      <div className={show ? 'show' : 'hide'}>
        <header className="Instructions-header">
          <h1>
            Pair programming interview
          </h1>
          <h2 className='subHeader'>Time: 30 - 45 minutes</h2>
          <p>
            This is a pair programming interview where you will work with your interviewer to solve a set of tasks. The aim is to gauge your technical 
            and collaborative skills when tackling a set of problems.
          </p>
          <p>
            This is an "open book" interview, so referencing documentation sites and
            using search engines or other tools is permitted as long as you make it clear that is what you are doing.
          </p>
          
          <p>
            Your collaborator will provide you with support, including orientating on the code base, but will not provide solutions directly to you.
          </p>

          <h2>Tasks</h2>
          <p>We do not necessarily expect you to complete all of the following:</p>
          <ul>
            <li>Populate the existing table with a list of devices</li>
            <li>Use the deviceEventEmitter 'deviceUpdate' event to add a device to devicesData</li>
            <li>Refresh the list of devices in the web UI every 5 seconds</li>
            <li>Make it possible to delete a device from the list</li>
          </ul>
        </header>
      </div>
      <button onClick={handleShowHideClick}>{show ? '<' : '>'}</button>
    </div>
  );
}

export default Instructions;
