import React, { useState, useEffect } from 'react';
import './shop.css';

const ShopPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Apple iPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium',
      price: '₦1,799,000.00',
      image: 'item-1.png',
      description: 'The iPhone 15 Pro Max uses Titanium for its frame, which is lighter and stronger than before.'
    },
    {
      id: 2,
      name: 'iPhone 15 Pro Max 1TB',
      price: '₦2,799,000.00',
      image: 'item-2.png',
      description: 'The iPhone 15 Pro Max is powered by the A17 Pro chip, a 3nm processor that promises improved performance.'
    },
    {
      id: 3,
      name: 'MacBook Pro 16-inch | Apple M3 Max | 1TB',
      price: '₦7,099,000.00',
      image: 'item-3.png',
      description: 'The MacBook Pro 16-inch is powered by the Apple M3 Max chip, a 3nm processor that promises improved performance.'
    },
    {
      id: 4,
      name: 'Apple Watch Series 8 GPS + Cellular 45mm',
      price: '₦439,000.00',
      image: 'item-4.png',
      description: 'The Apple Watch Series 8 is a smartwatch that tracks your fitness and health metrics.'
    },
    {
      id: 5,
      name: 'AirPods Pro 2',
      price: '₦179,000.00',
      image: 'item-5.png',
      description: 'The AirPods Pro 2 are wireless earbuds with active noise cancellation.'
    },
    {
      id: 6,
      name: 'iPad Pro 12.9-inch | Apple M3 | 1TB',
      price: '₦1,399,000.00',
      image: 'item-6.png',
      description: 'The iPad Pro 12.9-inch is a tablet powered by the Apple M3 chip.'
    },
    {
      id: 7,
      name: 'Apple Pencil (2nd Generation)',
      price: '₦99,000.00',
      image: 'item-7.png',
      description: 'The Apple Pencil is a stylus designed for the iPad and iPhone.'
    },
    {
      id: 8,
      name: 'Harman Kardon Onyx Studio 8',
      price: '₦323,000.00',
      image: 'item-8.png',
      description: 'The Harman Kardon Onyx Studio 8 is a wireless speaker with a sleek design.'
    },
    {
      id: 9,
      name: 'EarPods with 3.5mm Headphone Plug n Mic',
      price: '₦50,000.00',
      image: 'item-9.png',
      description: 'EarPods with 3.5mm Headphone Plug n Mic are wired earbuds with a microphone.'
    },
    {
      id: 10,
      name: 'Apple Magic Keyboard',
      price: '₦139,000.00',
      image: 'item-10.png',
      description: 'The Apple Magic Keyboard is a wireless keyboard designed for the Mac and iPad.'
    },
    {
      id: 11,
      name: 'Apple AirTag',
      price: '₦29,000.00',
      image: 'item-11.png',
      description: 'The Apple AirTag is a Bluetooth tracking device that helps you keep track of your belongings.'
    },
    {
      id: 12,
      name: 'Beats Solo Pro Wireless Headphones',
      price: '₦239,000.00',
      image: 'item-12.png',
      description: 'The Beats Solo Pro Wireless Headphones are wireless earbuds with active noise cancellation.'
    },
    {
      id: 13,
      name: 'Apple TV 4K 64GB',
      price: '₦139,000.00',
      image: 'item-13.png',
      description: 'The Apple TV 4K is a streaming device that allows you to watch your favorite TV shows and movies in 4K resolution.'
    },
    {
      id: 14,
      name: 'Apple HomePod Mini',
      price: '₦99,000.00',
      image: 'item-14.png',
      description: 'The Apple HomePod Mini is a smart speaker that allows you to control your smart home devices with your.'
    }
    {
      id: 15,
      name: 'Belkin BoostCharge Pro 2-in-1 Wireless Charger',
      price: '₦49,000.00',
      image: 'item-15.png',
      description: 'The Belkin BoostCharge Pro 2-in-1 Wireless Charger is a wireless charger that can charge your iPhone and Apple Watch at the same time.'
    },
    {
      id: 16,
      name: 'Apple Magic Mouse 2',
      price: '₦29,000.00',
      image: 'item-16.png',
      description: 'The Apple Magic Mouse 2 is a wireless mouse designed for the Mac.'
    },
    {
      id: 17,
      name: 'Apple Smart Keyboard Folio for iPad Pro 12.9-inch',
      price: '₦139,000.00',
      image: 'item-17.png',
      description: 'The Apple Smart Keyboard Folio is a keyboard designed for the iPad Pro 12.9-inch.'
    },
    {
      id: 18,
      name: 'Logitech MX Master 3 Mouse',
      price: '₦49,000.00',
      image: 'item-18.png',
      description: 'The Logitech MX Master 3 Mouse is a wireless mouse designed for productivity.'
    },
    {
      id: 19,
      name: 'Anker PowerCore Fusion Portable Charger',
      price: '₦29,000.00',
      image: 'item-19.png',
      description: 'The Anker PowerCore Fusion Portable Charger is a portable charger that can charge your devices on the go.'
    },
    {
      id: 20,
      name: 'Apple USB-C Earbuds',
      price: '₦19,000.00',
      image: 'item-20.png',
      description: 'The Apple USB-C Earbuds are wired earbuds with a USB-C connector.'
    },
  ]);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter((item) => item.id!== product.id));
  };

  return (
    <div className="shop-page">
      <h1>Smart GADGETS</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>Price: {product.price}</p>
              <button onClick={() => handleRemoveFromCart(product)}>Remove from Cart</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShopPage;
