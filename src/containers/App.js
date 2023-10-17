import { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import ExpenseList from '../components/ExpenseList';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="flex flex-col max-w-2xl m-auto">
      <Nav />
      <ExpenseList />
    </div>
  );
}

export default App;
