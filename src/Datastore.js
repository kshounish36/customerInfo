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

const Datastore = ({url}) => {
    function avatar(str) {
        return str.subString(0,1);
    }

    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setCustomer(response.data)
            })
    }, [url])

    if(customer) {
        return (
            <Card sx={{ maxWidth: 345, backgroundColor: 'whitesmoke' }}>
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
        )
    }
    return (
        <div>
            
        </div>
    )
}

export default Datastore
