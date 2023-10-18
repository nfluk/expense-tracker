import React from 'react';

function ExpenseCard({ products }) {
  return products.map((product) => {
    return (
      <div
        key={product.id}
        className="flex flex-row justify-between bg-slate-400 p-1 rounded-md"
      >
        <div className="bg-slate-200 p-1 rounded-md">
          <h2>Date</h2>
        </div>
        <h2 className="font-bold">{product.title}</h2>
        <di className="p-1 bg-red-300 rounded-md">
          <h2>{product.price}</h2>
        </di>
      </div>
    );
  });
}

export default ExpenseCard;
