import React from 'react';
import '../styles.css'; 

interface ProductProps {
  title: string;
  price: number;
  image: string;
  rating: { rate: number };
}

const ProductCard: React.FC<ProductProps> = ({ title, price, image, rating }) => (
  <div className="border rounded p-4">
    <img src={image} alt={title} className="img" />
    <h3 className="font-bold text-lg">{title}</h3>
    <p>${price.toFixed(2)}</p>
    <p>Rating: {rating.rate}⭐</p>
  </div>
);

export default ProductCard;
