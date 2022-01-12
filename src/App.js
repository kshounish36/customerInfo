import Accountinput from "./Accountinput";
import { useState } from "react";
import Datastore from "./Datastore";
import Appbar from "./Appbar";
import SignInSide from "./Signin";

function App() {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  return (
    <div className="App">
      <Appbar />
      <SignInSide />
      <Accountinput setUrl={setUrl}/>
      <Datastore url={url}/>
    </div>
  )
};

export default App;