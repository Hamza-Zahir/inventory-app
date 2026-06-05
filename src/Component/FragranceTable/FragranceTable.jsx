import "./FragranceTable.css";

export default function FragranceTable({ data }) {
  return (
    <div className="table-wrapper">
      <table className="luxury-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.fragrance} – {row.brand}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
