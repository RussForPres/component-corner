import './App.css';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header storeName="TechVault" />

      <Hero
        title="Welcome to TechVault"
        subtitle="Quality technology for everyday life."
        buttonText="Shop Now"
      />

      <main className="products">
        <ProductCard
          name="Wireless Headphones"
          price="79.99"
          image="https://placehold.co/600x400"
          description="Comfortable wireless headphones with great sound."
        />

        <ProductCard
          name="Gaming Keyboard"
          price="59.99"
          image="https://placehold.co/600x400"
          description="A responsive mechanical keyboard for gaming and work."
        />

        <ProductCard
          name="Smart Watch"
          price="99.99"
          image="https://placehold.co/600x400"
          description="Track your fitness, notifications, and daily activity."
        />
      </main>

      <Footer
        storeName="TechVault"
        email="support@techvault.com"
        phone="555-123-4567"
      />
    </>
  );
}

export default App;