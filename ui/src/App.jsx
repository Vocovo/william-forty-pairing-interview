import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Devices</h1>
      <table>
        <thead>
          <tr>
            <th scope="column">Id</th>
            <th scope="column">Type</th>
            <th scope="cloumn">Status</th>
            <th scope="column">Created</th>
            <th scope="column">Updated</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={5}>No results</td></tr></tbody>
      </table>
    </div>
  );
}

export default App;
