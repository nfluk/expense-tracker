import { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import ExpenseList from '../components/ExpenseList';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=7')
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="flex bg-slate-100">
      <div className="flex flex-col max-w-2xl m-auto">
        <Nav />
        <ExpenseList products={products} />
      </div>
    </div>
  );
}

export default App;

// TODO:
// * 1.
