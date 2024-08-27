import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';

const Product2 = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await API.get(`/products/${id}`);
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
      <h1>PRODUCT 2</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia natus veniam repellat ipsa ullam! Non reprehenderit perferendis magni distinctio sit atque qui?</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default Product2;
