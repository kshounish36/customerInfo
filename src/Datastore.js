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

const Datastore = ({url}) => {
    const onMediaFallback = event => event.target.src = FALLBACK_IMAGE;

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

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setCustomer(response.data)
            })
    }, [url])

    if(customer) {
        return (
            <Paper style={styles.paperContainer} elevation={3}  variant="outlined" square>
                <Card sx={{ maxWidth: 400,  ml: 60, mt: 10, backgroundColor: 'whitesmoke' }} variant="outlined">
                <CardMedia
                    component="img"
                    height="194"
                    image="./Customer360.png"
                    alt="E.ON Customer 360"
                    onError={onMediaFallback}
                />
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        avatar({customer.firstname});
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title={customer.firstname}
                        subheader={customer.signatureDate}
                    />
                    <div>
                        <p>First Name: {customer.firstname}</p>
                        <p>Last Name: {customer.surname}</p>
                        <p>Steet: {customer.street}</p>
                        <p>House No: {customer.billing_houseNumber}</p>
                        <p>Phone: {customer.billing_phone}</p>
                        <p>Meter Location: {customer.meterLocation}</p>
                        <p>Market Location: {customer.marketLocation}</p>
                        <p>Balance: {customer.balance}</p>
                    </div>
                </Card>
            </Paper>
        )
    }
    return (
        <div>
            
        </div>
    )
}

export default Datastore
