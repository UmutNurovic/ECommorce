import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import {Link} from 'react-router-dom'
import useStyles from '../Cart/styles'
import CartItem from '../Cart/CartItem/CartItem';
const Cart = ({cart}) => {
    
    const classes = useStyles();
    const EmptyCard = ()=>(
    <Typography variant = "subtitle1" >Your have no items in your shopping cart ,
    <Link to="/" className ={classes.link}>
    start adding some!
    </Link>
    </Typography>
    );
    const FilledCart = ()=>(
        <>
        <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item = {item}/>
          </Grid>
        ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant="h4">
                Subtotal:{cart.subtotal.formatted_with_symbol}
            </Typography>
            <div>
                <Button className={classes.emptyButton} size="large" type="button" color="secondary" variant="contained">Empty Card</Button>
                <Button className={classes.checkoutButton} size="large" type="button" color="primary" variant="contained">Checkout</Button>
            </div>
        </div>
        </>
    );
    if(!cart.line_items) return 'Loading...'
    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            {!cart.line_items.length ? <EmptyCard /> : <FilledCart/>}
        </Container>
    )
}

export default Cart
