import { useState } from 'react';
import { useQuery } from 'react-query';
import Drawer from '@material-ui/core/Drawer';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import { Wrapper } from './App.styles';
// components
import Item from './Item/Item';
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
    const getTotalItems = () => null;
    const handleAddToCart = () => null;
    const handleRemoveFromCart = () => null;

    if (isLoading) return <CircularProgress />;
    if (error) return <div>Something is going wrong...</div>;
    return (
        <Wrapper>
            <Grid container spacing={4}>
                {data?.map((item) => (
                    <Grid item key={item.id} xs={12} sm={6} lg={4}>
                        <Item item={item} handleAddToCart={handleAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </Wrapper>
    );
};

export default App;
