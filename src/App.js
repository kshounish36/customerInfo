import Customerdetails from "./Customerdetails";
import Accountinput from "./Accountinput";
import { useState } from "react";
import Datastore from "./Datastore";

function App() {
  const [url, setUrl] = useState('');
  return (
    <div className="App">
      <Accountinput setUrl={setUrl}/>
      <Datastore url={url}/>
      {/* <Customerdetails /> */}
      <h1>Hello Universe</h1>
    </div>
  )
};

export default App;