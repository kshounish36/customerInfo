import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Accountinput from './Accountinput'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Paper } from "@mui/material";
import Image from './website_background.jpg';
import FALLBACK_IMAGE from "./accdetails.png";
import FALLBACK_IMAGE1 from "./bill.png";
import SearchAppBar from './Appbar';
import Grid from '@mui/material/Grid';

const Datastore = () => {
    const onMediaFallback = event => event.target.src = FALLBACK_IMAGE;
    const onBillMediaFallback = event => event.target.src = FALLBACK_IMAGE1;

    function avatar(str) {
        return str.subString(0,1);
    }

    const styles = {
        paperContainer: {
            backgroundImage: `url(${Image})`,
            height: 593
        }
    };

    const [customer, setCustomer] = useState(null);
    const [url, setUrl] = useState('');

    console.log(url);

    useEffect(() => {
        const url = localStorage.getItem("url")
        if (url) {
            setUrl(url);
        }
      }, []); 

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setCustomer(response.data)
            })
    }, [url])

    if(customer) {
        return (
            <div>
                <SearchAppBar />
                <Grid container spacing={2}>
                    <Grid item xs={6} md={4}>
                        <Card sx={{ maxWidth: 400,  ml: 5, mt: 5, backgroundColor: '#56A5EC' }} variant="outlined">
                            <CardHeader
                                avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                </Avatar>
                                }
                                action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                                }
                                title={customer[0].firstname}
                                subheader={customer[0].surname}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image="./Customer360.png"
                                alt="E.ON Customer 360"
                                onError={onMediaFallback}
                            />
                            <CardContent>
                            <div>
                                <Typography>First Name: {customer[0].firstname}</Typography>
                                <Typography>Last Name: {customer[0].surname}</Typography>
                                <Typography>Street: {customer[0].street}</Typography>
                                <Typography>House No: {customer[0].houseNumber}</Typography>
                                <Typography>Phone: {customer[0].phoneMobile}</Typography>
                                <Typography>Meter Location: {customer[0].street}</Typography>
                                <Typography>Market Location: {customer[0].city}</Typography>
                                <Typography>Balance: {customer[0].accountBalance}</Typography>
                            </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Card sx={{ maxWidth: 400,  ml: 5, mt: 5, backgroundColor: '#56A5EC' }} variant="outlined">
                            <CardHeader
                                avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                </Avatar>
                                }
                                action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                                }
                                // title={customer[0].firstname}
                                // subheader={customer[0].surname}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image="./Customer360.png"
                                alt="E.ON Customer 360"
                                onError={onBillMediaFallback}
                            />
                            <CardContent>
                            <div>
                                {/* <Typography>First Name: {customer[0].firstname}</Typography>
                                <Typography>Last Name: {customer[0].surname}</Typography>
                                <Typography>Street: {customer[0].street}</Typography>
                                <Typography>House No: {customer[0].houseNumber}</Typography>
                                <Typography>Phone: {customer[0].phoneMobile}</Typography>
                                <Typography>Meter Location: {customer[0].street}</Typography>
                                <Typography>Market Location: {customer[0].city}</Typography>
                                <Typography>Balance: {customer[0].accountBalance}</Typography> */}
                            </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
    return (
        <div>
            
        </div>
    )
}

export default Datastore
