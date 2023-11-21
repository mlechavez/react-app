type Props = {
  onSelect: (category: string) => void;
};
const ExpenseFilter = ({ onSelect }: Props) => {
  const categories = [
    { value: "Groceries", label: "Groceries" },
    { value: "Utilities", label: "Utilities" },
    { value: "Entertainment", label: "Entertainment" },
  ];

  return (
    <select className="form-select" onChange={(e) => onSelect(e.target.value)}>
      <option value="">All</option>
      {categories.map((category) => (
        <option key={category.value} value={category.value}>
          {category.label}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
