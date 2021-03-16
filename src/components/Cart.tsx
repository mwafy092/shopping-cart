import CartItem from './CartItem';
import { Wrapper } from './Cart.styles';
import { CartItemsTypes } from '../App';

type Props = {
    cartItems: CartItemsTypes[];
    addToCart: (clickedItem: CartItemsTypes) => void;
    removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
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
        </Wrapper>
    );
};

export default Cart;
