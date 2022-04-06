import { CartContextdispatch, CartContextState } from '../contexts/AppContext';

const CartItem = ({ product, index, handleRemove }) => {
  return (
    <div className='cart-item'>
      <h2>{product.title}</h2>
      <h4>${product.price}</h4>
      <button onClick={() => handleRemove(index)}>Remove from cart</button>
    </div>
  )
}
export default function Store() {
  const items = CartContextState();
  const dispatch = CartContextdispatch();
  const totalPrice = items.reduce((acc, curr) => acc + curr.price, 0);

  const handleRemove = (index) => {
    dispatch({ type: 'REMOVE_FROM_CART', index });
  }
  if (items.length === 0) {
    return (
      <div className='empty-cart'>
        <h3>Your Cart is Empty &#x1F972;</h3>
      </div>
    )
  }
  return (
    <main className='label'> 
      <div style={{textAlign: 'center'}}> 
        <h2 style={{ fontStyle: 'italic', color: 'green' }}>Total Price: ${totalPrice.toFixed(2)}</h2>
      </div> 
      <div className='cart-items'>
      {items.map((item, index) => (
        <CartItem handleRemove={handleRemove} key={index} product={item} index={index} />
      ))}
      </div>
    </main>
  )
}