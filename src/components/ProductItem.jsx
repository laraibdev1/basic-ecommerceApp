import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <li>
      <Link to={`/product1/${product.id}`}>
        {product.name} - ${product.price}
      </Link>
    </li>
  );
};

export default ProductItem;
