import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await API.get(`/products1/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>PRODUCT 1</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, omnis incidunt.</p>
      <p>Price: $89</p>
    </div>
  );
};

export default Product;
