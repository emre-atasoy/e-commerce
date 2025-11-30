
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { HomeIcon, Info } from "lucide-react";


function App() {

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();


  return (
    <Router>
      <nav className="p-4 space-x-4 bg-gray-100">
        <Link to="/" className="text-blue-500"><HomeIcon size={20}/>Home</Link>
        <Link to="/about" className="text-blue-500"><Info size={20}/>About</Link>
      </nav>

      <div className="p-4">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
         {/* Redux Test */}
        <div className="mt-8 p-4 border rounded">
        <h2 className="text-xl font-bold mb-2">Counter: {count}</h2>
        <button className="px-4 py-2 bg-blue-500 text-white mr-2" onClick={() => {
  dispatch({ type: "INCREMENT" });
  toast.success("Sayı artırıldı!");
}}>+</button>

        <button className="px-4 py-2 bg-red-500 text-white mr-2" onClick={() => {dispatch({type:"DECREMENT"}); toast.success("Sayı azaltıldı!")}}>-</button>
<ToastContainer />
        </div>
        
      </div>
    </Router>
  );
}

export default App;
