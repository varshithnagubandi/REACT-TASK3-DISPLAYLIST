import "./App.css";

function App() {
  const items = ["apple", "orange", "banana", "mango", "grapes"];
  return (
    <div>
      {items.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </div>
  );
}

export default App;
