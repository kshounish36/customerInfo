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
    //const API_URL = "https://api.nationalize.io/";
    //const URL = API_URL.concat(data);
    //const API_URL = "https://api.nationalize.io/?name=nathaniel";
    
    const [customers, setCustomer] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setCustomer(response.data)
            })
    }, [url])

    if(customers) {
        return (
            <Card sx={{ maxWidth: 345, backgroundColor: 'whitesmoke' }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                       avatar({customers.country});
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={customers.country}
                    subheader="September 14, 2016"
                />
                <div>
                    <p>Customer Name: {customers.country}</p>
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
