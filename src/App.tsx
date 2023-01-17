import Child1Component from "./Components/Child1Component";
import "./App.css";
import Child2Component from "./Components/Child2Component";
function App() {
  let arr = [75, 86, 90, 67, 95];
  let books = [
    {
      id: 101,
      name: "Rich Dad Poor Dad",
    },
    {
      id: 102,
      name: "Do Epic Shit",
    },
    {
      id: 103,
      name: "Atomic Habits",
    },
    {
      id: 104,
      name: "Think Like A Monk",
    },
    {
      id: 105,
      name: "Psychology Of Money",
    },
  ];
  return (
    <div className="App">
      <Child1Component name="Kaif" age={23} qualified={true} gender="male" />
      <Child2Component arr={arr} books={books} />
    </div>
  );
}

export default App;
