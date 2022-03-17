import Button from "@material-ui/core/Button";
import { CartItemType } from "../App";
import { Wrapper } from "./CartItem.styles";

type Props = {
  item: CartItemType;
  addToCart: (item: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  const { title, amount, price, id, image } = item;
  return (
    <Wrapper>
      <div>
        <h3>{title}</h3>
        <div className="information">
          <p>Price: ${price}</p>
          <p>Total: ${(amount * price).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(id)}
          >
            -
          </Button>
          <p>{amount}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
        <img src={image} alt={title} />
      </div>
    </Wrapper>
  );
};

export default CartItem;
