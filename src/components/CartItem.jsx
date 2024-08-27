const CartItem = ({ item, removeFromCart }) => {
    return (
      <div>
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    );
  };
  
  export default CartItem;
  