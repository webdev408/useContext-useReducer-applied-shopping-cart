import ProductDetails from "./ProductDetails";

const products = [
  { id: 1, title: 'green beans', price: 1.69 },
  { id: 2, title: ' red bell pepper', price: 0.99 },
  { id: 3, title: 'chiquita bananas', price: 0.57 },
  { id: 4, title: 'artisan bread', price: 2.69 },
  { id: 5, title: 'cherry tomatoes', price: 1.99 },
  { id: 6, title: 'spinach leaf', price: 1.79 },
  { id: 7, title: 'cucumber', price: 0.79 },
  { id: 8, title: 'Anju Pears', price: 1.49 },
  { id: 9, title: 'red onion' , price: 0.99},
  
]

const Store = () => {
  return (
    <div className='product-list'>
      {products.map(product => (
        <ProductDetails key={product.id} product={product} />
      ))}
    </div>
  )
}
export default Store;