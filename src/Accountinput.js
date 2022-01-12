import { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Button, IconButton, Typography } from "@mui/material";
import { InputBase } from "@mui/material";
import FALLBACK_IMAGE from "./Customer360.png";
import { Paper } from "@mui/material";
import Image from './website_background.jpg';

function Accountinput({setUrl}) {
  const onMediaFallback = event => event.target.src = FALLBACK_IMAGE;
  const childToParent = (childdata) => {
      setUrl(childdata);
  }
  const [data, setData] = useState(null);
  function getData(e) {
    setData(e.target.value)
  }
  const API_URL = "/api/";
  const URL = API_URL.concat(data);

  const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        height: 593
    }
  };

  return (
    <Paper style={styles.paperContainer} elevation={3}  variant="outlined" square>
      <Card sx={{ maxWidth: 400, ml: 60, mt: 10 }} variant="outlined">
        <CardMedia
          component="img"
          height="194"
          image="./Customer360.png"
          alt="E.ON Customer 360"
          onError={onMediaFallback}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle2" component="div">
            Enter Customer Account ID Below: 
          </Typography>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Account ID"
            type="number"
            onChange={getData}
          />
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="fingerprint" color="success" onClick={() => childToParent(URL)}>
            <Button variant="contained" size="small">Enter 360</Button>
          </IconButton>
        </CardActions>
      </Card>
    </Paper>
  )
};

export default Accountinput;