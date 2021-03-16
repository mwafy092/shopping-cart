import { useState } from 'react';
import { useQuery } from 'react-query';
import Drawer from '@material-ui/core/Drawer';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import { Wrapper, StyledButton } from './App.styles';
import Item from './components/Item';
import Cart from './components/Cart';
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
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([] as CartItemsTypes[]);
    const { data, isLoading, error } = useQuery<CartItemsTypes[]>(
        'products',
        getProducts
    );

    // get total items function using reducer
    const getTotalItems = (items: CartItemsTypes[]) =>
        items.reduce((ac: number, item) => ac + item.amount, 0);

    const handleAddToCart = () => null;
    const handleRemoveFromCart = () => null;

    if (isLoading) return <CircularProgress />;
    if (error) return <div>Something is going wrong...</div>;
    return (
        <Wrapper>
            <Drawer
                anchor='right'
                open={cartOpen}
                onClose={() => setCartOpen(false)}>
                <Cart
                    cartItems={cartItems}
                    addToCart={handleAddToCart}
                    removeFromCart={handleRemoveFromCart}
                />
            </Drawer>
            <StyledButton onClick={() => setCartOpen(true)}>
                <Badge badgeContent={getTotalItems(cartItems)} color='error'>
                    <AddShoppingCartIcon />
                </Badge>
            </StyledButton>
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
