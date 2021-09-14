import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './style';
const products = [
    {id:1,name:'shoes',description:'running soes' ,price:'$5', image:"https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm208-251-jj-58-k_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f7264d6da3df4c96180fbe87d0850595"},
    {id:2,name:'Macbook',description:'Apple macbook ',price:'$10' ,image:"https://www.apple.com/v/macbook-air/k/images/meta/macbook-air_overview__15sjf4iagj6q_og.png?202108090535"},
];

const Products = ()=>{
    const classes = useStyles();
    return (
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </main>
    );

}

export default Products ;