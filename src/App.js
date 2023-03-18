import { useState } from "react";
import "./App.css";
import Screenshot from "./Screenshot.png";

function App() {
  const [count, setCount] = useState(0);

  function HandleAddition() {
    setCount(count + 1);
  }

  function HandleSubtraction() {
    setCount(count - 1);
  }

  return (
    <>
      <div className="App">
        <p>{count}</p>
        <button className="btn_green" onClick={HandleAddition}>
          Add + 1
        </button>
        &nbsp;
        <button className="btn_red" onClick={HandleSubtraction}>
          Remove + 1
        </button>
        <h1>Note</h1>
      </div>
    <div className="description_note">
    <div className="description">
        <h2>
          <span>Simple Defination</span> : State Is Build-in React object That
          contain information or data of Components. whenever changes made.
          react re-render the component.
        </h2>
        <div className="code">
         <div> <img src={Screenshot} alt="" /></div>
         <div>

         </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
