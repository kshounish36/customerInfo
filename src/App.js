import Customerdetails from "./Customerdetails";
import Accountinput from "./Accountinput";
import { useState } from "react";
import Datastore from "./Datastore";

function App() {
  const [url, setUrl] = useState('');
  return (
    <div className="App">
      <h1>Hello Customer 360!</h1>
      <Accountinput setUrl={setUrl}/>
      <Datastore url={url}/>
      {/* <Customerdetails /> */}
    </div>
  )
};

export default App;