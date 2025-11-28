
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { useDispatch, useSelector } from "react-redux";

function App() {

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();


  return (
    <Router>
      <nav className="p-4 space-x-4 bg-gray-100">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/about" className="text-blue-500">About</Link>
      </nav>

      <div className="p-4">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
         {/* Redux Test */}
        <div className="mt-8 p-4 border rounded">
        <h2 className="text-xl font-bold mb-2">Counter: {count}</h2>
        <button className="px-4 py-2 bg-blue-500 text-white mr-2" onClick={() => dispatch({type:"INCREMENT"})}>+</button>

        <button className="px-4 py-2 bg-red-500 text-white mr-2" onClick={() => dispatch({type:"DECREMENT"} )}>-</button>

        </div>
      </div>
    </Router>
  );
}

export default App;
