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
              <td>{row.brand ? `${row.fragrance} – ${row.brand}` : row.fragrance}</td>
              {/* <td>{row.fragrance} – {row.brand} - {row.gender} </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
