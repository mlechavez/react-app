const ExpenseForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label" htmlFor="description">
          Description
        </label>
        <input className="form-control" id="description" />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="amount">
          Amount
        </label>
        <input className="form-control" id="amount" type="number" />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="category">
          Category
        </label>
        <select className="form-select">
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
