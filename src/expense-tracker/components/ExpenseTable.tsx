import { Expense } from "../Expense";

type Props = {
  items: Expense[];
};
const ExpenseTable = ({ items }: Props) => {
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
            <td>{item.amount}</td>
            <td>{item.category}</td>
            <td>
              <button className="btn btn-outline-danger btn-sm">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
