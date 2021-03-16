import Button from '@material-ui/core/Button';
import { CartItemsTypes } from '../App';
import { Wrapper } from './CartItem.styles';

type Props = {
    item: CartItemsTypes;
    addToCart: (clickedItem: CartItemsTypes) => void;
    removeFromCart: (id: number) => void;
};
const CartItem: React.FC<Props> = () => <div>Cart Item</div>;

export default CartItem;
