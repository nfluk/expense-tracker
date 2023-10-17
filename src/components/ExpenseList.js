import React from 'react';
import ExpenseCard from './ExpenseCard';

function ExpenseList({ products }) {
  return (
    <div className="flex gap-2 flex-col text-center bg-slate-500 p-4 rounded-md">
      <ExpenseCard products={products} />
    </div>
  );
}

export default ExpenseList;
