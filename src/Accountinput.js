import { useState } from "react";
import Customerdetails from "./Customerdetails";
import { IconButton } from "@mui/material";
import { Fingerprint } from "@mui/icons-material";
import { Input, InputBase } from "@mui/material";

function Accountinput({setUrl}) {
    const childToParent = (childdata) => {
        setUrl(childdata);
    }
  const [data, setData] = useState(null);
  function getData(e) {
    setData(e.target.value)
  }
  const API_URL = "/api/";
  const URL = API_URL.concat(data);

  return (
    <div className="App">
      <p>{URL}</p>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Account ID"
        type="number"
        onChange={getData}
      />
      {/* <Input type="number" label="Account ID" variant="filled" color="success" focused onChange={getData}/> */}
      <IconButton aria-label="fingerprint" color="success" onClick={() => childToParent(URL)}>
        <Fingerprint />
      </IconButton>
    </div>
  )
};

export default Accountinput;