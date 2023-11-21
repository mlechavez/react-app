import { Expense } from "../Expense";

type Props = {
  items: Expense[];
  onDelete: (item: number) => void;
};
const ExpenseTable = ({ items, onDelete }: Props) => {
  const total = items
    .reduce((acc, current) => acc + current.amount, 0)
    .toFixed(2);
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.description}</td>
            <td>${item.amount.toFixed(2)}</td>
            <td>{item.category}</td>
            <td>
              <button
                onClick={() => onDelete(item.id)}
                className="btn btn-outline-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <th>${total}</th>
          <th></th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseTable;
