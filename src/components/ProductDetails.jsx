import { CartContextdispatch } from '../contexts/AppContext';

const ProductDetails = ({ product }) => {
  const dispatch = CartContextdispatch();
  
  const addToCart = (item) => {
    dispatch({type: 'ADD_TO_CART', item})
  }

  return (
    <div className='product-desc'>
      <h2>{product.title}</h2>
      <h4>${product.price}</h4>
      <button onClick={()=>addToCart(product)}>Add to Cart</button>
    </div>
  )
}
export default ProductDetails;