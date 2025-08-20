import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface Collection {
  id: number;
  title: string;
  products: Product[];
}

interface FashionTVProps {
  collections: Collection[];
}

const FashionTV: React.FC<FashionTVProps> = ({ collections }) => {
  return (
    <div style={{ backgroundColor: '#fff', color: '#000' }}>
      <h1 style={{ color: '#ff69b4' }}>Luxury FashionTV Cosmetics</h1>
      {collections.map((collection) => (
        <div key={collection.id}>
          <h2 style={{ color: '#ff69b4' }}>{collection.title}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {collection.products.map((product) => (
              <div key={product.id} style={{ margin: '10px', border: '1px solid #ff69b4', borderRadius: '5px' }}>
                <img src={product.imageUrl} alt={product.name} style={{ width: '100px', height: '100px' }} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p style={{ fontWeight: 'bold' }}>${product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FashionTV;