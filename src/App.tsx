import { useState } from 'react';
import { useQuery } from 'react-query';
import Drawer from '@material-ui/core/Drawer';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import { Wrapper } from './App.styles';
// components

// type interface
export type CartItemsTypes = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
};

const getProducts = async (): Promise<CartItemsTypes[]> => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
};

const App = () => {
    const { data, isLoading, error } = useQuery<CartItemsTypes[]>(
        'products',
        getProducts
    );
    console.log('data ', data);

    if (isLoading) return <CircularProgress />;
    if (error) return <div>Something is going wrong...</div>;
    return (
        <div className='App'>
            <h1>hello</h1>
        </div>
    );
};

export default App;
