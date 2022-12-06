import './App.css';

function App() {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <div>
        <button>Add Items</button>
        <select name="items" id="items">
          <option>All</option>
          <option>Complete</option>
          <option>Incomplete</option>
        </select>
      </div>
      <div>
        <h3>No todo found</h3>
      </div>
    </div>
  );
}

export default App;
