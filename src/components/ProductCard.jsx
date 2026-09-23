import './ProductCard.css';

function ProductCard({ name, price, image, description }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="product-info">
        <h2>{name}</h2>
        <p className="description">{description}</p>
        <p className="price">${price}</p>
      </div>
    </div>
  );
}

export default ProductCard;