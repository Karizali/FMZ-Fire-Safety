import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import slider_img1 from "../../assets/images/slider_img1.jpg"
import slider_img2 from "../../assets/images/slider_img2.jpg"
import slider_img3 from "../../assets/images/slider_img3.jpg"

function Carousel1(props)
{
    var items = [
        {
            img:slider_img1
        },
        {
            img:slider_img2
        },
        {
            img:slider_img3
        },
        
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <img className='h-1/2' src={props.item.img} alt="" srcset="" />
        </Paper>
    )
}
export default Carousel1;