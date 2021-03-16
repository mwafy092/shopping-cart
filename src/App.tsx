import { useState } from 'react';
import { useQuery } from 'react-query';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import { Wrapper } from './App.styles';
// components

const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((products) => products);
};
getProducts();
const App = () => {
    return (
        <div className='App'>
            <h1>hello</h1>
        </div>
    );
};

export default App;
