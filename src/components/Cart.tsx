import CartItem from './CartItem';
import { Wrapper } from './Cart.styles';
import { CartItemsTypes } from '../App';

type Props = {
    cartItems: CartItemsTypes[];
    addToCart: (clickedItem: CartItemsTypes) => void;
    removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
    const handleTotal = (items: CartItemsTypes[]) =>
        items.reduce((ac: number, item) => ac + item.amount * item.price, 0);
    return (
        <Wrapper>
            <h2>Your products</h2>
            {cartItems.length === 0 && <p>No Items in Cart.</p>}
            {cartItems.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            <h3>Total: ${handleTotal(cartItems).toFixed(2)}</h3>
        </Wrapper>
    );
};

export default Cart;
